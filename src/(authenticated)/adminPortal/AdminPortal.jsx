import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import AddChild from "./Children/AddChild";
import ChildrenList from "./Children/ChildrenList";
import AddStaff from "./Staff/AddStaff";
import StaffList from "./Staff/StaffList";
import EnrollmentList from "./Enrollment/EnrollmentList";
import InvoiceList from "./Invoice/InvoiceList";
import InvoiceDetails from "./Invoice/InvoiceDetailsModal.jsx";
import CreateInvoice from "./Invoice/CreateInvoice";
import GenerateReport from "./Invoice/GenerateReport";
import Event from "./Event/Event.jsx";
import AddEvent from "./Event/addEvent.jsx";
import ViewEvent from "./Event/ViewEvent.jsx";
import UpdateEvent from "./Event/UpdateEvent.jsx";

const AdminPortal = () => {
  return (
    <div className="flex">
      <main className="flex-grow p-4">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="children/add" element={<AddChild />} />
          <Route path="children/list" element={<ChildrenList />} />
          <Route path="staff/add" element={<AddStaff />} />
          <Route path="staff/list" element={<StaffList />} />
          <Route path="enrollments/list" element={<EnrollmentList />} />
          <Route path="invoices" element={<InvoiceList />} />
          <Route path="invoices/create" element={<CreateInvoice />} />
          <Route path="invoices/report" element={<GenerateReport />} />
          <Route path="invoices/:invoiceID" element={<InvoiceDetails />} />
          <Route path="events" element={<Event />} />
          <Route path="events/add" element={<AddEvent />} />
          <Route path="events/view/:id" element={<ViewEvent />} />
          <Route path="events/update/:id" element={<UpdateEvent />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminPortal;
