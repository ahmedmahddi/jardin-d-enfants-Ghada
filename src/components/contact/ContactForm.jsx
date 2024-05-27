import React, { useState } from "react";
import PropTypes from "prop-types";

const ContactInputBox = props => {
  const { type, placeholder, name, id, value, onChange, hasError } = props;
  return (
    <div>
      <div className={`mb-6 ${hasError ? "shake border-red-500" : ""}`}>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className={`w-full rounded border ${
            hasError ? "border-red-500 bg-red-100" : "border-stroke"
          } px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6`}
        />
      </div>
    </div>
  );
};

ContactInputBox.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
};

const ContactTextArea = props => {
  const { row, placeholder, name, id, value, onChange, hasError } = props;
  return (
    <div>
      <div className={`mb-6 ${hasError ? "shake border-red-500" : ""}`}>
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className={`w-full resize-none rounded border ${
            hasError ? "border-red-500 bg-red-100" : "border-stroke"
          } px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6`}
        />
      </div>
    </div>
  );
};

ContactTextArea.propTypes = {
  row: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
};

const ContactSelectBox = props => {
  const { name, id, value, onChange, hasError } = props;
  return (
    <div>
      <div className={`mb-6 ${hasError ? "shake border-red-500" : ""}`}>
        <select
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className={`w-full rounded border ${
            hasError ? "border-red-500 bg-red-100" : "border-stroke"
          } px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6`}
        >
          <option value="" disabled>
            Sélectionner le sujet
          </option>
          <option value="Recéption de plus de détails">
            Recéption de plus de détails
          </option>
          <option value="Demande de rendez-vous pour visiter la garderie">
            Demande de rendez-vous pour visiter le jardin d'enfants
          </option>
        </select>
      </div>
    </div>
  );
};

ContactSelectBox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Email envoyé avec succès!");
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      className="bg-gradient-to-r from-yellow-100 to-pink-50 py-12"
      id="contact"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-orange mb-4">
            Contactez Nous
          </p>
          <p className="text-xl text-dark-blue">
            En cas de question ou demande, n'hésitez pas à nous contacter.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="mb-12 lg:mb-0 lg:mr-8 flex-1">
            <p className="text-lg text-dark-blue leading-relaxed mb-6">
              Nous sommes ici pour répondre à toutes vos questions et pour aider
              votre enfant à réussir. Remplissez le formulaire ci-dessous et
              nous vous répondrons sous peu.
            </p>
            <ul className="space-y-6">
              <li className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 text-white flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="location"
                  >
                    <defs>
                      <linearGradient
                        id="a"
                        x1="39.46"
                        x2="59"
                        y1="32.1"
                        y2="32.1"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#ff912d"></stop>
                        <stop offset=".62" stopColor="#ff3439"></stop>
                        <stop offset="1" stopColor="#ff003f"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#a)"
                      d="M59,32A13,13,0,0,1,46,45a12.83,12.83,0,0,1-6.54-1.77,41.13,41.13,0,0,0,3.7-4.13A30.46,30.46,0,0,0,47,32.89,21.43,21.43,0,0,0,49,24a16.52,16.52,0,0,0-.7-4.79A13,13,0,0,1,59,32Z"
                      opacity=".3"
                    ></path>
                    <path
                      fill="#231f20"
                      d="M38,32H26a1,1,0,0,1-1-1V21a1,1,0,0,1,1-1H38a1,1,0,0,1,1,1V31A1,1,0,0,1,38,32ZM27,30H37V22H27Z"
                    ></path>
                    <path
                      fill="#231f20"
                      d="M41 22H23a1 1 0 0 1-.61-1.79l9-7a1 1 0 0 1 1.22 0l9 7A1 1 0 0 1 41 22zM25.91 20H38.09L32 15.27zM34 32H30a1 1 0 0 1-1-1V26a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5A1 1 0 0 1 34 32zm-3-2h2V27H31z"
                    ></path>
                    <path
                      fill="#231f20"
                      d="M40 32H24a1 1 0 0 1 0-2H40a1 1 0 0 1 0 2zM32 57a1 1 0 0 1-.41-.09l-11-5A1 1 0 0 1 20 51l.63-12.52a1 1 0 0 1 .7-.9 1 1 0 0 1 1.09.34 44.32 44.32 0 0 0 10.11 9.28A1 1 0 0 1 33 48v8a1 1 0 0 1-.46.84A1 1 0 0 1 32 57zM22 50.37l9 4.08V48.54a46.6 46.6 0 0 1-8.5-7.45z"
                    ></path>
                    <path
                      fill="#231f20"
                      d="M32 57a1 1 0 0 1-.54-.16A1 1 0 0 1 31 56V48a1 1 0 0 1 .47-.85 44.32 44.32 0 0 0 10.11-9.28 1 1 0 0 1 1.09-.34 1 1 0 0 1 .7.9L44 51a1 1 0 0 1-.59 1l-11 5A1 1 0 0 1 32 57zm1-8.46v5.91l9-4.08-.47-9.28A46.6 46.6 0 0 1 33 48.54zM8 56a1 1 0 0 1-.65-.24A1 1 0 0 1 7 54.85l3-20a1 1 0 0 1 .65-.79l6.93-2.52a1 1 0 0 1 1.25.53 28.34 28.34 0 0 0 3.58 5.79 1 1 0 0 1 .21.67L22 51.05a1 1 0 0 1-.71.91l-13 4A.92.92 0 0 1 8 56zm3.9-20.26L9.22 53.58 20 50.25l.57-11.45a30.85 30.85 0 0 1-3.19-5.07z"
                    ></path>
                    <path
                      fill="#231f20"
                      d="M56,56a.92.92,0,0,1-.29,0l-13-4a1,1,0,0,1-.71-.91l-.63-12.52a1,1,0,0,1,.21-.67,28.34,28.34,0,0,0,3.58-5.79,1,1,0,0,1,1.25-.53l6.93,2.52a1,1,0,0,1,.65.79l3,20a1,1,0,0,1-.34.91A1,1,0,0,1,56,56ZM44,50.25l10.82,3.33L52.1,35.74l-5.52-2a30.85,30.85,0,0,1-3.19,5.07Z"
                    ></path>
                    <path
                      fill="#ff5730"
                      d="M48.3,19.21A17,17,0,0,0,15,24a21.43,21.43,0,0,0,2,8.89,30.14,30.14,0,0,0,3.82,6.2,45.8,45.8,0,0,0,10.63,9.76,1,1,0,0,0,1.06,0,44.53,44.53,0,0,0,6.93-5.62,41.13,41.13,0,0,0,3.7-4.13A30.46,30.46,0,0,0,47,32.89,21.43,21.43,0,0,0,49,24,16.52,16.52,0,0,0,48.3,19.21ZM45.16,32.07a28.67,28.67,0,0,1-3.58,5.8,41.6,41.6,0,0,1-3.8,4.2A46.58,46.58,0,0,1,32,46.8a44.85,44.85,0,0,1-9.58-8.94,28.34,28.34,0,0,1-3.58-5.79A19.52,19.52,0,0,1,17,24a15,15,0,0,1,29.14-5A14.75,14.75,0,0,1,47,24,19.52,19.52,0,0,1,45.16,32.07Z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-dark-blue">
                    Adresse
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/LZh5HrSdJKnVR1ae7"
                    className="text-gray-600 dark:text-slate-400"
                  >
                    138 Av. Errached Sakiet Eddaier, Sfax, Tunisie
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 text-white flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    id="connection"
                  >
                    <path
                      fillRule="evenodd"
                      d="M45.15 248h82.605a130.066 130.066 0 0 0-.255 8c0 2.688.092 5.353.255 8H45.15a215.05 215.05 0 0 1 0-16zM354 420.448c0 16.846 5.555 32.395 14.932 44.916l-8.92 33.288a3.12 3.12 0 0 0 .827 3.087 3.12 3.12 0 0 0 3.087.827l41.134-11.022a74.917 74.917 0 0 0 23.938 3.903c41.421 0 75-33.579 75-75 0-41.422-33.579-75-75-75-41.42.001-74.998 33.58-74.998 75.001zm50.375-.697c0 5.246-4.254 9.5-9.5 9.5s-9.5-4.254-9.5-9.5 4.254-9.5 9.5-9.5 9.5 4.253 9.5 9.5zm58.75 9.5c-5.246 0-9.5-4.254-9.5-9.5s4.254-9.5 9.5-9.5 9.5 4.254 9.5 9.5-4.254 9.5-9.5 9.5zm-24.625-9.5c0 5.246-4.254 9.5-9.5 9.5s-9.5-4.254-9.5-9.5 4.254-9.5 9.5-9.5a9.5 9.5 0 0 1 9.5 9.5zM69.643 96.358A126.678 126.678 0 0 1 52.06 74.415c-1.832-2.898-1.813-6.38.05-9.257l7.161-11.057c1.528-2.36 1.819-5.053.832-7.685l-12.318-32.83a8.556 8.556 0 0 0-12.662-4.219l-17.185 10.98c-7.843 5.011-11.484 14.019-9.323 23.072 6.649 27.864 21.152 52.939 41.197 72.77 19.831 20.045 44.906 34.548 72.77 41.197 9.053 2.16 18.061-1.481 23.072-9.323l10.98-17.185a8.556 8.556 0 0 0-4.219-12.662l-32.83-12.318c-2.632-.988-5.325-.696-7.685.832l-11.057 7.161c-2.877 1.863-6.359 1.882-9.257.05a126.678 126.678 0 0 1-21.943-17.583zm-45.514 301.19h127.742c.539 0 1.072.027 1.599.079l-65.409 43.518-.061.036-.061-.036-65.409-43.518c.527-.052 1.06-.079 1.599-.079zm142.782 10.312-52.52 34.943 52.946 49.637c.43-1.45.662-2.983.662-4.569v-74.194a15.982 15.982 0 0 0-1.088-5.817zm-11.101 95.651a16.045 16.045 0 0 1-3.939.489H24.129c-1.358 0-2.678-.17-3.939-.489l55.068-51.627 3.868 2.574c2.728 1.815 5.793 2.723 8.873 2.723 3.08 0 6.145-.908 8.873-2.723l3.868-2.574 55.07 51.627zM8.662 492.44l52.946-49.637L9.089 407.86A16.003 16.003 0 0 0 8 413.677v74.194c0 1.586.232 3.119.662 4.569zM421 8.525c-15.52 1.648-29.625 8.034-40.838 17.688a272.408 272.408 0 0 0 19.365 2.568 297.877 297.877 0 0 0 21.474 1.28V8.525H421zm-53.339 31.487A74.485 74.485 0 0 0 354.525 75H421V46.057a321.837 321.837 0 0 1-22.974-1.401c-10.301-.998-20.151-2.481-29.402-4.384a7.973 7.973 0 0 1-.963-.26zM354.525 91a74.47 74.47 0 0 0 13.136 34.988 8.11 8.11 0 0 1 .963-.26c9.251-1.903 19.101-3.386 29.402-4.384A322.423 322.423 0 0 1 421 119.943V91h-66.475zm25.637 48.787c11.214 9.652 25.318 16.04 40.838 17.688v-21.536c-7.442.181-14.614.615-21.474 1.28a272.379 272.379 0 0 0-19.364 2.568zM437 157.475c15.52-1.648 29.625-8.034 40.838-17.688a272.456 272.456 0 0 0-19.364-2.568 297.911 297.911 0 0 0-21.474-1.28v21.536zm53.339-31.487A74.485 74.485 0 0 0 503.475 91H437v28.943c7.753.195 15.432.67 22.974 1.401 10.301.998 20.151 2.481 29.402 4.384.33.068.651.155.963.26zM503.475 75a74.485 74.485 0 0 0-13.136-34.988 7.973 7.973 0 0 1-.963.26c-9.251 1.903-19.101 3.386-29.402 4.384A322.423 322.423 0 0 1 437 46.057V75h66.475zm-25.637-48.787C466.624 16.561 452.52 10.174 437 8.525v21.536a297.911 297.911 0 0 0 21.474-1.28 272.456 272.456 0 0 0 19.364-2.568zM256 143.5c62.132 0 112.5 50.368 112.5 112.5S318.132 368.5 256 368.5 143.5 318.132 143.5 256 193.867 143.5 256 143.5zm.001 37.969c-21.937 0-39.721 17.784-39.721 39.721 0 21.937 17.784 39.721 39.721 39.721 21.937 0 39.721-17.784 39.721-39.721 0-21.937-17.784-39.721-39.721-39.721zM256 265.912c-34.078 0-63.089 21.715-73.971 52.055C167.97 301.202 159.5 279.591 159.5 256c0-53.295 43.204-96.5 96.5-96.5s96.5 43.204 96.5 96.5c0 23.591-8.47 45.202-22.529 61.966-10.875-30.345-39.885-52.054-73.971-52.054zM256 13c34.445 0 67.216 7.169 96.904 20.094a90.866 90.866 0 0 0-7.604 14.149C317.891 35.503 287.705 29 256 29c-62.685 0-119.435 25.408-160.514 66.486-.353.353-.702.71-1.053 1.066-4.335-3.142-8.44-6.6-12.282-10.331.67-.687 1.344-1.369 2.023-2.048C128.148 40.199 188.899 13 256 13zm222.906 146.096C491.831 188.784 499 221.554 499 256c0 31.89-6.147 62.344-17.315 90.245a90.964 90.964 0 0 0-13.981-8.17C477.579 312.621 483 284.944 483 256c0-31.705-6.503-61.891-18.243-89.299a90.955 90.955 0 0 0 14.149-7.605zM348.207 480.893C319.773 492.563 288.638 499 256 499c-25.069 0-49.251-3.798-72.004-10.847.001-.094.004-.188.004-.282V471.34c22.624 7.561 46.833 11.66 72 11.66 33.018 0 64.388-7.052 92.69-19.728a91.234 91.234 0 0 0 2.892 5.023l-3.375 12.598zM47.908 381.548h18.947C42.938 345.59 29 302.423 29 256c0-40.518 10.619-78.554 29.219-111.483a175.619 175.619 0 0 1-12.571-10.249C24.889 170.063 13 211.643 13 256c0 45.942 12.753 88.906 34.908 125.548zM248 127.756a130.04 130.04 0 0 1 8-.255c2.688 0 5.354.092 8 .255V45.15a215.01 215.01 0 0 0-16 0v82.606zM384.245 248c.163 2.647.255 5.312.255 8 0 2.688-.092 5.353-.255 8h82.605a212.906 212.906 0 0 0 0-16h-82.605zM264 384.244a130.09 130.09 0 0 1-8 .255c-2.688 0-5.353-.092-8-.255v82.605a212.866 212.866 0 0 0 16 0v-82.605z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-dark-blue">
                    Contact
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Mobile: +216 99 890 625
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    Email: tailnext@gmail.com
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 text-white flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 512 512"
                    viewBox="0 0 512 512"
                    id="open"
                  >
                    <path
                      fill="#fddc8d"
                      d="M490.592,271.4v215.643c0,11.027-8.939,19.965-19.965,19.965H41.373c-11.027,0-19.965-8.939-19.965-19.965V271.4c0-11.027,8.939-19.965,19.965-19.965h429.253C481.653,251.435,490.592,260.373,490.592,271.4z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M71.771,507.014H41.373c-11.031,0-19.965-8.935-19.965-19.965V271.423c0-11.031,8.934-19.965,19.965-19.965h30.397c-11.031,0-19.965,8.935-19.965,19.965v215.625C51.805,498.079,60.74,507.014,71.771,507.014z"
                      opacity=".5"
                    ></path>
                    <path
                      d="M490.592,271.423v215.625c0,11.031-8.934,19.965-19.965,19.965h-36.037c11.031,0,19.965-8.935,19.965-19.965V271.423c0-11.031-8.935-19.965-19.965-19.965h36.037C481.658,251.458,490.592,260.392,490.592,271.423z"
                      opacity=".15"
                    ></path>
                    <rect
                      width="389.323"
                      height="175.715"
                      x="61.339"
                      y="291.363"
                      fill="#efefef"
                    ></rect>
                    <circle
                      cx="256"
                      cy="41.019"
                      r="36.027"
                      fill="#a7b1b3"
                    ></circle>
                    <circle
                      cx="256"
                      cy="41.019"
                      r="12.584"
                      fill="#efefef"
                    ></circle>
                    <path d="M470.627,246.441h-51.552L284.645,70.321c7.622-7.452,12.373-17.828,12.373-29.304C297.018,18.401,278.617,0,256,0s-41.018,18.401-41.018,41.018c0,11.475,4.751,21.852,12.372,29.303L92.926,246.441H41.373c-13.76,0-24.957,11.196-24.957,24.957v215.645c0,13.76,11.196,24.957,24.957,24.957h429.253c13.76,0,24.957-11.196,24.957-24.957V271.398C495.583,257.638,484.387,246.441,470.627,246.441z M224.965,41.018c0-17.114,13.921-31.035,31.035-31.035s31.035,13.921,31.035,31.035S273.114,72.052,256,72.052S224.965,58.131,224.965,41.018z M235.298,76.367c6.086,3.578,13.146,5.668,20.702,5.668c7.556,0,14.616-2.089,20.702-5.668l129.803,170.059h-301.01L235.298,76.367z M485.601,487.043c0,8.257-6.717,14.974-14.974,14.974H41.373c-8.257,0-14.974-6.717-14.974-14.974V271.398c0-8.257,6.717-14.974,14.974-14.974h429.253c8.257,0,14.974,6.717,14.974,14.974V487.043z"></path>
                    <path d="M450.661 286.372H61.339c-2.759 0-4.991 2.232-4.991 4.991v175.715c0 2.759 2.232 4.991 4.991 4.991h389.323c2.759 0 4.991-2.232 4.991-4.991V291.363C455.653 288.604 453.42 286.372 450.661 286.372zM445.67 462.087H66.33V296.355h379.34V462.087zM256 58.594c9.69 0 17.577-7.887 17.577-17.577S265.69 23.441 256 23.441c-9.69 0-17.577 7.887-17.577 17.577S246.31 58.594 256 58.594zM256 33.423c4.187 0 7.594 3.407 7.594 7.594s-3.407 7.594-7.594 7.594c-4.187 0-7.594-3.407-7.594-7.594S251.813 33.423 256 33.423z"></path>
                    <path d="M136.974 426.733c21.247 0 38.536-21.32 38.536-47.53 0-26.19-17.289-47.495-38.536-47.495-21.233 0-38.507 21.306-38.507 47.495C98.466 405.413 115.741 426.733 136.974 426.733zM136.974 341.691c15.744 0 28.554 16.826 28.554 37.513 0 20.701-12.81 37.547-28.554 37.547-15.729 0-28.525-16.846-28.525-37.547C108.449 358.517 121.244 341.691 136.974 341.691zM199.458 426.733c2.759 0 4.991-2.232 4.991-4.991v-37.527h21.233c14.218 0 25.785-11.776 25.785-26.253s-11.567-26.253-25.785-26.253h-26.224c-2.759 0-4.991 2.232-4.991 4.991 0 29.743 0 55.3 0 85.043C194.466 424.501 196.699 426.733 199.458 426.733zM241.484 357.961c0 8.974-7.087 16.271-15.803 16.271h-21.233v-32.541h21.233C234.397 341.691 241.484 348.988 241.484 357.961zM272.066 426.733h44.503c2.759 0 4.991-2.232 4.991-4.991 0-2.759-2.233-4.991-4.991-4.991h-39.511v-32.536h39.511c2.759 0 4.991-2.232 4.991-4.991 0-2.759-2.233-4.991-4.991-4.991h-39.511v-32.541h39.511c2.759 0 4.991-2.232 4.991-4.991s-2.233-4.991-4.991-4.991h-44.503c-2.759 0-4.991 2.232-4.991 4.991v85.043C267.074 424.501 269.307 426.733 272.066 426.733zM342.159 426.733c2.759 0 4.991-2.232 4.991-4.991v-70.536l57.459 73.607c1.344 1.724 3.608 2.327 5.557 1.648 2.018-.692 3.368-2.588 3.368-4.718v-85.043c0-2.759-2.232-4.991-4.991-4.991s-4.991 2.232-4.991 4.991v70.536l-57.459-73.607c-1.316-1.682-3.553-2.354-5.557-1.648-2.018.692-3.368 2.588-3.368 4.718v85.043C337.167 424.501 339.4 426.733 342.159 426.733z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-dark-blue">
                    Heures d'ouverture
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Lundi - Vendredi: 08:00 - 17:00
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    Samedi: 08:00 - 14:00
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="card p-5 md:p-8 flex-1 bg-transparent bg-opacity-90 rounded shadow-lg max-w-xl">
            <h2 className="text-2xl font-bold text-blue mb-4">
              Remplissez le formulaire
            </h2>
            <form id="contactForm" onSubmit={handleSubmit}>
              <ContactInputBox
                type="text"
                placeholder="Votre nom"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                hasError={errors.name}
              />
              <ContactInputBox
                type="email"
                placeholder="Votre adresse email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                hasError={errors.email}
              />
              <ContactInputBox
                type="text"
                placeholder="Votre numéro de téléphone"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                hasError={errors.phone}
              />
              <ContactSelectBox
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                hasError={errors.subject}
              />
              <ContactTextArea
                row="5"
                placeholder="Écrivez votre message..."
                name="message"
                id="textarea"
                value={formData.message}
                onChange={handleChange}
                hasError={errors.message}
              />
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue text-white px-6 py-3 text-lg rounded-md sm:mb-0 transition-transform transform hover:scale-105"
                >
                  Envoyer le Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
