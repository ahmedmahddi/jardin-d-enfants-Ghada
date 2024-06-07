import React from "react";

const Footer = () => {
  return (
    <footer className="bg-lightPeach font-bubblegum-sans w-screen py-8 ">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col lg:flex-row justify-evenly w-full max-w-8xl space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="text-dark-blue text-center lg:text-left">
            <h4 className="font-bold text-lg">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-orange">
                  Présentation de l'école
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-orange">
                  Vision et Mission
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-orange">
                  Pourquoi Nous choisir ?
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-orange">
                  Nos valeurs
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-orange">
                  Mot du fondateur
                </a>
              </li>
            </ul>
          </div>
          <div className="text-dark-blue text-center lg:text-left">
            <div className="text-dark-blue">
              <h4 className="font-bold text-lg">Équipe pédagogique</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-orange">
                    Programme éducatif
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-orange">
                    Acquis en fin de maternelle
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-orange">
                    Rendez-vous pour visite
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-orange">
                    Inscription
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-orange">
                    Règlement intérieur
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-dark-blue text-center lg:text-left space-y-2">
            <h4 className="font-bold text-lg text-center">Contact</h4>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <svg
                className="w-6 h-6 text-dark-blue"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C8.691 2 6 4.691 6 8C6 14 12 22 12 22C12 22 18 14 18 8C18 4.691 15.309 2 12 2zM12 10.5C10.895 10.5 10 9.605 10 8.5C10 7.395 10.895 6.5 12 6.5C13.105 6.5 14 7.395 14 8.5C14 9.605 13.105 10.5 12 10.5z" />
              </svg>
              <a
                href="https://maps.app.goo.gl/hAjQ2CBaFuwyE7BQ6"
                target="_blank"
                rel="noopener noreferrer"
              >
                138 Av. Errached Sakiet Eddaier - SFAX
              </a>
            </div>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <svg
                className="w-6 h-6 text-dark-blue "
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 22L2 22"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2 11L10.1259 4.49931C11.2216 3.62279 12.7784 3.62279 13.8741 4.49931L22 11"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M4 22V9.5"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 22V9.5"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393C9 14.8787 9 15.5858 9 17V22"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                />
                <path
                  d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                />
              </svg>
              <p>Fixe: +216 74 830 651</p>
            </div>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <svg
                className="w-6 h-6 text-dark-blue"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 2C6.34315 2 5 3.34315 5 5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V5C19 3.34315 17.6569 2 16 2H8ZM7 5C7 4.44772 7.44772 4 8 4H16C16.5523 4 17 4.44772 17 5V19C17 19.5523 16.5523 20 16 20H8C7.44772 20 7 19.5523 7 19V5ZM10 17C9.44772 17 9 17.4477 9 18C9 18.5523 9.44772 19 10 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H10Z"
                />
              </svg>
              <p>Mobile: +216 54 890 621 / +216 99 890 625</p>
            </div>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <svg
                className="w-6 h-6 text-dark-blue"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" />
              </svg>
              <p>Email: jardindenfantghada@gmail.com</p>
            </div>
          </div>
          <div className="text-dark-blue text-center lg:text-left">
            <h4 className="font-bold text-lg text-center">Suivez-nous</h4>
            <ul className="flex space-x-4 justify-center lg:justify-start">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6 text-dark-blue hover:text-orange"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.675C0 23.407 0.593 24 1.325 24H12.814V14.745H9.691V11.087H12.814V8.412C12.814 5.42 14.738 3.926 17.381 3.926C18.67 3.926 19.816 4.066 20.12 4.107V7.12H18.411C17.032 7.12 16.72 7.874 16.72 8.801V11.087H19.976L19.556 14.745H16.72V24H22.675C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6 text-dark-blue hover:text-orange"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.954 4.569C23.177 4.902 22.342 5.116 21.462 5.172C22.368 4.646 23.074 3.804 23.44 2.795C22.605 3.297 21.677 3.684 20.68 3.9C19.891 3.069 18.768 2.587 17.596 2.587C14.841 2.587 12.687 4.743 12.687 7.499C12.687 7.855 12.722 8.201 12.791 8.53C8.434 8.313 4.522 6.193 1.998 3.043C1.526 3.772 1.249 4.643 1.249 5.578C1.249 7.231 2.072 8.681 3.272 9.541C2.576 9.521 1.927 9.313 1.368 8.976C1.368 8.992 1.368 9.011 1.368 9.033C1.368 11.373 2.943 13.284 5.114 13.679C4.711 13.791 4.282 13.855 3.839 13.855C3.517 13.855 3.205 13.83 2.901 13.774C3.533 15.661 5.211 17.045 7.221 17.084C5.616 18.359 3.52 19.125 1.232 19.125C0.815 19.125 0.403 19.101 0 19.054C2.031 20.41 4.434 21.224 7.004 21.224C17.59 21.224 22.69 13.948 22.69 8.048C22.69 7.844 22.687 7.64 22.68 7.439C23.522 6.856 24.259 6.146 24.889 5.329L23.954 4.569Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6 text-dark-blue hover:text-orange"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163C6.49 2.163 2.163 6.49 2.163 12C2.163 17.51 6.49 21.837 12 21.837C17.51 21.837 21.837 17.51 21.837 12C21.837 6.49 17.51 2.163 12 2.163ZM12 19.654C7.614 19.654 4.346 16.386 4.346 12C4.346 7.614 7.614 4.346 12 4.346C16.386 4.346 19.654 7.614 19.654 12C19.654 16.386 16.386 19.654 12 19.654ZM18.846 7.305C18.846 8.179 18.142 8.883 17.268 8.883C16.394 8.883 15.69 8.179 15.69 7.305C15.69 6.431 16.394 5.727 17.268 5.727C18.142 5.727 18.846 6.431 18.846 7.305ZM12 7.927C9.73 7.927 7.927 9.73 7.927 12C7.927 14.27 9.73 16.073 12 16.073C14.27 16.073 16.073 14.27 16.073 12C16.073 9.73 14.27 7.927 12 7.927ZM12 14.645C10.704 14.645 9.555 13.496 9.555 12C9.555 10.704 10.704 9.555 12 9.555C13.496 9.555 14.645 10.704 14.645 12C14.645 13.496 13.496 14.645 12 14.645Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6 text-dark-blue hover:text-orange"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452H16.855V14.787C16.855 13.676 16.838 12.243 15.319 12.243C13.784 12.243 13.562 13.47 13.562 14.701V20.451H9.969V9.545H13.429V10.979H13.487C13.953 10.147 15.029 9.32 16.447 9.32C20.032 9.32 20.447 11.662 20.447 14.197V20.452ZM5.337 7.553C4.194 7.553 3.258 6.617 3.258 5.474C3.258 4.332 4.194 3.396 5.337 3.396C6.48 3.396 7.416 4.332 7.416 5.474C7.416 6.617 6.48 7.553 5.337 7.553ZM7.121 20.451H3.553V9.545H7.121V20.451ZM22.225 0H1.771C0.791 0 0 0.791 0 1.771V22.225C0 23.205 0.791 24 1.771 24H22.225C23.205 24 24 23.205 24 22.225V1.771C24 0.791 23.205 0 22.225 0Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="mt-4">
            &copy; 2024 Daycare Center. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
