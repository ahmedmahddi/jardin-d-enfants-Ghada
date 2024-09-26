import React from "react";
import { useQuery } from "react-query";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { generateReport } from "../../api/Invoice/invoice.api";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GenerateReport = () => {
  const { data, error, isLoading } = useQuery("report", generateReport);

  if (isLoading)
    return <div className="text-center text-lg py-8">Chargement...</div>;
  if (error)
    return (
      <div className="text-center text-red-500 py-8">
        Erreur : {error.message}
      </div>
    );

  const formatCurrency = value => {
    return value.toFixed(2);
  };

  // Chart data for invoice status
  const invoiceData = {
    labels: ["Factures Payées", "Factures Non Payées"],
    datasets: [
      {
        label: "Nombre de Factures",
        data: [data?.paidInvoices ?? 0, data?.unpaidInvoices ?? 0],
        backgroundColor: ["#FF8000", "#67D0E9"],
      },
    ],
  };

  // Chart data for amounts
  const amountData = {
    labels: ["Montant Payé", "Montant impayé"],
    datasets: [
      {
        label: "Montant (€)",
        data: [data?.totalPaidAmount ?? 0, data?.totalOutstandingAmount ?? 0],
        backgroundColor: ["#2196F3", "#FFC107"],
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Rapport Mensuel
      </h1>

      <div className="p-6 border rounded-lg space-y-4 bg-gray-50">
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-gray-700">
            Total des Factures :
          </p>
          <p className="text-lg text-gray-900">
            {data?.totalInvoices ?? "N/A"}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-gray-700">
            Factures Payées :
          </p>
          <p className="text-lg text-green-600">
            {data?.paidInvoices ?? "N/A"}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-gray-700">
            Factures Non Payées :
          </p>
          <p className="text-lg text-red-600">
            {data?.unpaidInvoices ?? "N/A"}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-gray-700">
            Montant Payé Total :
          </p>
          <p className="text-lg text-gray-900">
            {formatCurrency(data?.totalPaidAmount)} TND
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-gray-700">
            Montant impayé Total :
          </p>
          <p className="text-lg text-gray-900">
            {formatCurrency(data?.totalOutstandingAmount)} TND
          </p>
        </div>
      </div>

      {/* Bar chart for invoice status */}
      <h2 className="text-xl font-bold text-gray-800 mt-6">
        Répartition des Factures
      </h2>
      <div className="my-4">
        <Bar
          data={invoiceData}
          options={{
            responsive: true,
            plugins: { legend: { position: "top" } },
          }}
        />
      </div>

      {/* Bar chart for amounts */}
      <h2 className="text-xl font-bold text-gray-800 mt-6">
        Montant Payé vs impayé
      </h2>
      <div className="my-4">
        <Bar
          data={amountData}
          options={{
            responsive: true,
            plugins: { legend: { position: "top" } },
          }}
        />
      </div>
    </div>
  );
};

export default GenerateReport;
