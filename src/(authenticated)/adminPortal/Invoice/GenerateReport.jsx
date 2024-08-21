import React from "react";
import { useQuery } from "react-query";
import { generateReport } from "../../api/Invoice/invoice.api";

const GenerateReport = () => {
  const { data, error, isLoading } = useQuery("report", generateReport);

  if (isLoading)
    return <div className="text-center text-lg py-8">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500 py-8">
        Error: {error.message}
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Monthly Report
      </h1>
      <div className="p-6 border rounded-lg space-y-4 bg-gray-50">
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-gray-700">Total Invoices:</p>
          <p className="text-lg text-gray-900">{data.totalInvoices}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-gray-700">Paid Invoices:</p>
          <p className="text-lg text-green-600">{data.paidInvoices}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-gray-700">
            Unpaid Invoices:
          </p>
          <p className="text-lg text-red-600">{data.unpaidInvoices}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-gray-700">
            Total Paid Amount:
          </p>
          <p className="text-lg text-gray-900">
            ${data.totalPaidAmount.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-gray-700">
            Total Outstanding Amount:
          </p>
          <p className="text-lg text-gray-900">
            ${data.totalOutstandingAmount.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenerateReport;
