import React from "react";
import PropTypes from "prop-types";

const InvoiceDetailsModal = ({ isOpen, invoice, onClose }) => {
  if (!isOpen || !invoice) return null;

  console.log("Rendering InvoiceDetailsModal with invoice: ", invoice);

  const {
    invoiceID,
    issueDate,
    dueDate,
    parentName,
    parentPhone,
    parentEmail,
    amount,
    childName,
  } = invoice;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 overflow-y-auto">
      <div className="invoice-container bg-white p-6 rounded shadow-lg max-w-3xl mx-auto max-h-screen overflow-y-auto">
        <div className="header flex justify-between items-start border-b-2 border-orange-500 pb-4">
          <div className="invoice-logo-container flex flex-col items-center text-center">
            <div className="invoice-logo">
              <img
                src="https://i.ibb.co/8XFFCjN/logo-JDG.png"
                alt="Logo"
                className="w-32 h-auto mt-2"
              />
            </div>
            <div className="invoice-head">
              <h2 className="text-orange-500">Jardin d'enfant Ghada</h2>
              <p>Numéro de Facture: {invoiceID}</p>
            </div>
          </div>
          <div className="invoice-info text-right ml-auto">
            <h2 className="text-xl font-bold">Facture De</h2>
            <p>Jardin d'enfant Ghada</p>
            <p>+216 99 890 625</p>
            <p>138 Av. Errached Sakiet Eddaier</p>
            <p>3011, Sfax - Tunisie</p>
          </div>
        </div>
        <div className="content py-6">
          <div className="invoice-details flex justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold">Facture</h3>
              <p>Numéro de Facture: {invoiceID}</p>
              <p>Date d'Émission: {issueDate}</p>
              <p>Date d'Échéance: {dueDate}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Facturé à</h3>
              <p>Nom du Parent: {parentName}</p>
              <p>Téléphone du Parent: {parentPhone}</p>
              <p>Email du Parent: {parentEmail}</p>
            </div>
          </div>
          <div className="invoice-issues-box flex justify-evenly mb-6 bg-orange-500 text-white rounded-lg p-4">
            <div className="col-lg-4 col-md-4">
              <p>Date d'Émission: {issueDate}</p>
            </div>
            <div className="col-lg-4 col-md-4">
              <p>Date d'Échéance: {dueDate}</p>
            </div>
          </div>
          <table className="table w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Nom de l'enfant</th>
                <th className="border border-gray-300 p-2">Montant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">{childName}</td>
                <td className="border border-gray-300 p-2">{amount} TND</td>
              </tr>
              <tr className="table-total bg-gray-200 font-bold">
                <td className="border border-gray-300 p-2">Total</td>
                <td className="border border-gray-300 p-2">{amount} TND</td>
              </tr>
            </tbody>
          </table>
          <div className="notes-terms-container flex justify-between mt-6">
            <div className="left-side w-2/3">
              <div className="notes mb-4">
                <h4 className="font-bold">Notes:</h4>
                <p>
                  Merci de régler votre facture dans les 30 jours pour continuer
                  à bénéficier de nos services.
                </p>
              </div>
              <div className="terms">
                <h4 className="font-bold">Conditions Générales:</h4>
                <p>
                  Tous les services fournis sont régis par les conditions
                  générales de vente disponibles sur demande.
                </p>
              </div>
            </div>
            <div className="right-side w-1/3 flex flex-col justify-center">
              <div className="signature-space border border-gray-300 p-6 text-center">
                Signature:
                <br />
                <span className="text-sm text-gray-500">
                  (Authorized Signature)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer text-center border-t-2 border-orange-500 mt-6 pt-4">
          <p>Merci pour votre confiance!</p>
        </div>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

InvoiceDetailsModal.propTypes = {
  isOpen: PropTypes.bool,
  invoice: PropTypes.shape({
    invoiceID: PropTypes.string.isRequired,
    issueDate: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    parentName: PropTypes.string.isRequired,
    parentPhone: PropTypes.string.isRequired,
    parentEmail: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    childName: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func,
};

export default InvoiceDetailsModal;
