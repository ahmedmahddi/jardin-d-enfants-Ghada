// File path: src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import { fetchChildren } from "../../api/Children/children.api.js";
import { fetchStaff } from "../../api/Staff/staff.api.js";
import { fetchEnrollments } from "../../api/Enrollment/enrollment.api.js";
import { fetchInvoices } from "../../api/Invoice/invoice.api.js";
import SummaryCard from "./SummaryCard";
import ChildrenByGenderChart from "./ChildrenByGenderChart";

const Dashboard = () => {
  const [totalChildren, setTotalChildren] = useState(0);
  const [totalStaff, setTotalStaff] = useState(0);
  const [enrollments, setTotalEnrollments] = useState(0);
  const [invoices, setTotalInvoices] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const children = await fetchChildren(1, 1000);
      const staff = await fetchStaff(1, 1000);
      const enrollments = await fetchEnrollments(1, 1000);
      const invoices = await fetchInvoices(1, 1000);
      setTotalChildren(children.children.length);
      setTotalStaff(staff.staffList.length);
      setTotalEnrollments(enrollments.enrollments.length);
      setTotalInvoices(invoices.invoices.length);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <div className="lg:p-8 max-w-7xl mx-auto space-y-8">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-center">
          Tableau de bord
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="lg:col-span-1">
            <ChildrenByGenderChart />
          </div>
          <div className="lg:col-span-1 space-y-4">
            <SummaryCard title="Nombre total d'enfants" value={totalChildren} />
            <SummaryCard title="Nombre de personnel" value={totalStaff} />
            <SummaryCard title="Nombre d'inscriptions" value={enrollments} />
            <SummaryCard title="Nombre de factures" value={invoices} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
