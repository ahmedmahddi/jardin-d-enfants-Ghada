import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-yellow-50 to-pink-50">
      <h1
        className={`text-3xl md:text-5xl font-extrabold text-center mb-12 text-orange`}
      >
        Politique de Confidentialité
      </h1>
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 bg-white bg-opacity-80 rounded-3xl shadow-2xl p-10 space-y-12 relative">
        <div className="space-y-6 text-gray-700">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              1. Collecte des Informations
            </h2>
            <p>
              Nous collectons des informations personnelles lors de
              l'inscription de votre enfant dans notre établissement. Les types
              d'informations que nous recueillons incluent :
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Nom et prénom de l'enfant</li>
              <li>Date de naissance de l'enfant</li>
              <li>
                Coordonnées des parents ou tuteurs légaux (adresse, numéro de
                téléphone, email)
              </li>
              <li>
                Informations médicales pertinentes, y compris les allergies, les
                besoins particuliers, etc.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              2. Utilisation des Informations
            </h2>
            <p>Les informations recueillies sont utilisées pour :</p>
            <ul className="list-disc list-inside ml-4">
              <li>Fournir les services éducatifs et de soins à votre enfant</li>
              <li>Assurer la sécurité et le bien-être de votre enfant</li>
              <li>
                Communiquer avec les parents au sujet des activités, des
                événements, et des mises à jour importantes
              </li>
              <li>Respecter les obligations légales et réglementaires</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              3. Protection des Informations
            </h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour
              protéger les informations personnelles de votre enfant contre tout
              accès non autorisé, toute divulgation ou toute destruction. Ces
              mesures comprennent :
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Le stockage sécurisé des dossiers et des données numériques
              </li>
              <li>
                La limitation de l'accès aux informations aux seuls membres du
                personnel ayant un besoin légitime
              </li>
              <li>
                La formation continue du personnel sur les bonnes pratiques en
                matière de protection des données
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              4. Partage des Informations
            </h2>
            <p>
              Nous ne partageons pas les informations personnelles de votre
              enfant avec des tiers, sauf dans les cas suivants :
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Si cela est requis par la loi ou par une demande gouvernementale
              </li>
              <li>
                Si vous avez donné votre consentement explicite pour un tel
                partage
              </li>
              <li>
                Pour répondre à des situations d'urgence où la santé ou la
                sécurité de votre enfant est en jeu
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">5. Droits des Parents</h2>
            <p>En tant que parent ou tuteur légal, vous avez le droit de :</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Accéder aux informations personnelles que nous détenons sur
                votre enfant
              </li>
              <li>Demander la correction de toute information inexacte</li>
              <li>
                Demander la suppression des informations dans certaines
                circonstances, par exemple si elles ne sont plus nécessaires
                pour les fins pour lesquelles elles ont été collectées
              </li>
              <li>
                Vous opposer à certains traitements de données, comme le
                marketing direct
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              6. Conservation des Données
            </h2>
            <p>
              Les informations personnelles de votre enfant sont conservées
              aussi longtemps que nécessaire pour fournir les services pour
              lesquels elles ont été collectées, ou pour respecter nos
              obligations légales. Une fois que ces informations ne sont plus
              nécessaires, elles sont supprimées ou anonymisées de manière
              sécurisée.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              7. Modifications de la Politique de Confidentialité
            </h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Toute modification sera communiquée
              via notre site web ou par d'autres moyens appropriés pour
              s'assurer que vous êtes informé des changements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">8. Contactez-Nous</h2>
            <p>
              Si vous avez des questions ou des préoccupations concernant cette
              politique de confidentialité ou la manière dont nous traitons les
              informations personnelles de votre enfant, veuillez nous contacter
              à :
            </p>
            <p>
              <strong>Adresse :</strong> 138 Av. Errached Sakiet Eddaier - SFAX
              <br />
              <strong>Email :</strong> jardindenfantsghada@gmail.com
              <br />
              <strong>Téléphone :</strong> +216 58 890 621 / +216 99 890 625
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
