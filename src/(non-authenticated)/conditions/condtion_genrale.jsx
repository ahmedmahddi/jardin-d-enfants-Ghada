import React, { useState } from "react";

const ConditionPage = () => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-r from-yellow-50 to-pink-50">
      <h2
        className={`text-3xl md:text-5xl font-extrabold text-center mb-12 text-orange`}
      >
        Règlement Intérieur
      </h2>
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 bg-white bg-opacity-80 rounded-3xl shadow-2xl p-10 space-y-12 relative">
        <button
          onClick={toggleLanguage}
          className="absolute top-4 right-4 px-4 py-2 bg-orange-500 text-white rounded-lg focus:outline-none"
        >
          {isArabic ? "Français" : "العربية"}
        </button>
        <div
          className={`space-y-6 text-gray-700 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <p className="font-bold text-lg md:text-xl text-orange-500">
            {isArabic ? "أولياء الأمور الأعزاء،" : "Chers parents,"}
          </p>
          <p className="leading-relaxed text-sm md:text-base">
            {isArabic
              ? "نشكركم جزيل الشكر على اختياركم روضة الأطفال غادة لتعليم ورعاية طفلكم."
              : "Nous vous remercions chaleureusement d’avoir choisi le Jardin d'enfants Ghada pour l'éducation et le bien-être de votre enfant."}
          </p>
          <p className="leading-relaxed text-sm md:text-base">
            {isArabic
              ? "منذ افتتاحنا في سبتمبر 2000، نحن ملتزمون بتقديم بيئة تعليمية من الدرجة الأولى، تجمع بين الحب والرعاية والتعليم عالي الجودة. على مر السنين، تطورت مؤسستنا لتضمين طرق تعليمية مبتكرة والتكيف مع الاحتياجات المتغيرة لأطفالنا وعائلاتهم. نحن نسعى باستمرار لتوفير بيئة تلبي المعايير التعليمية العالية، وتدعم أيضًا التطور الفردي لكل طفل في بيئة آمنة ومرحبة."
              : "Depuis notre ouverture en Septembre 2000, nous nous engageons à offrir un environnement éducatif de premier choix, combinant amour, soin et éducation de qualité supérieure. Au fil des années, notre établissement a évolué pour intégrer des méthodes pédagogiques innovantes et s'adapter aux besoins changeants de nos enfants et de leurs familles. Nous nous efforçons constamment de fournir un cadre qui non seulement répond aux standards éducatifs élevés, mais qui soutient également le développement individuel de chaque enfant dans un environnement sécurisé et accueillant."}
          </p>
          <p className="leading-relaxed text-sm md:text-base">
            {isArabic
              ? "مؤسستنا مرخصة من قبل وزارة المرأة والأسرة والطفولة "
              : "Notre institution est autorisée à exercer par le ministère de la Femme, de la Famille et de l’Enfance "}
            <strong>
              {isArabic
                ? "تحت الرقم 2287 و 2289 بتاريخ 22 يوليو 2009."
                : "reçu de dépôt du cahier des charges no 2287 et 2289 en date du 22 juillet 2009."}
            </strong>
          </p>
          <p className="leading-relaxed text-sm md:text-base">
            {isArabic
              ? "بالإضافة إلى ذلك، فإن فريقنا مؤهل ومتحمس وملتزم بتوفير أفضل بيئة ممكنة لتطوير طفلك وازدهاره."
              : "De plus, notre équipe est compétente, motivée et qualifiée, s'engageant à offrir le meilleur environnement possible pour le développement et l'épanouissement de votre enfant."}
          </p>
          <p className="leading-relaxed text-sm md:text-base">
            {isArabic
              ? "نأخذ ثقتكم على محمل الجد ونتعهد بمرافقة طفلكم في تعليمه وازدهاره الشخصي. روضة الأطفال غادة ليست مجرد حضانة؛ إنها مجتمع يتعلم فيه الأطفال ويلعبون وينمون معًا، ويطورون المهارات الأساسية لعالم الغد. شكراً مرة أخرى على ثقتكم. نحن نتطلع إلى رؤية جميع التقدم الرائع الذي سيحققه طفلكم."
              : "Nous prenons votre confiance au sérieux et nous nous engageons à accompagner votre enfant dans son apprentissage et son épanouissement personnel. Le Jardin d'enfants Ghada est plus qu'une simple garderie; c'est une communauté où les enfants apprennent, jouent et grandissent ensemble, développant des compétences essentielles pour le monde de demain. Merci encore pour votre confiance. Nous sommes impatients de voir tous les merveilleux progrès que votre enfant va réaliser."}
          </p>
          <p className="font-bold text-lg md:text-xl text-orange-500">
            {isArabic ? "مع تحياتنا،" : "Cordialement,"}
            <br />
            {isArabic
              ? "فريق روضة الأطفال غادة"
              : "L'équipe du Jardin d'enfants Ghada"}
          </p>
        </div>
        <hr className="border-gray-300" />
        <div className="space-y-10">
          <div>
            <h3
              className={`text-xl md:text-2xl font-bold mb-4 text-blue-600 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic ? "ساعات العمل" : "Horaires d'Ouverture"}
            </h3>
            <p
              className={`text-gray-700 leading-relaxed text-sm md:text-base ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic
                ? "تفتح الحضانة أبوابها في الساعة 7:00 صباحًا وتغلق في الساعة 6:00 مساءً."
                : "La garderie ouvre ses portes à 7h00 et ferme à 18h00."}
              <br />
              {isArabic
                ? "يوم السبت، تغلق الحضانة في الساعة 2:00 ظهرًا."
                : "Le samedi, la garderie ferme à 14h00."}
            </p>
          </div>
          <div>
            <h3
              className={`text-xl md:text-2xl font-bold mb-4 text-blue-600 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic ? "العمر المؤهل" : "Âge Admissible"}
            </h3>
            <p
              className={`text-gray-700 leading-relaxed text-sm md:text-base ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic
                ? "تستقبل الحضانة الأطفال الذين تتراوح أعمارهم بين عامين ونصف وخمسة أعوام."
                : "La garderie accueille les enfants âgés de deux ans et demi à cinq ans."}
            </p>
          </div>
          <div>
            <h3
              className={`text-xl md:text-2xl font-bold mb-4 text-blue-600 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic ? "الخدمات المقدمة" : "Services Offerts"}
            </h3>
            <p
              className={`text-gray-700 leading-relaxed text-sm md:text-base ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic
                ? "تنشيط وترفيه الأطفال من خلال الأساليب التربوية؛ توفير ألعاب داخلية وخارجية تناسب أعمار الأطفال."
                : "Activation et divertissement des enfants avec des approches pédagogiques; fourniture de jeux intérieurs et extérieurs adaptés à l'âge des enfants."}
              <br />
              {isArabic
                ? "مراقبة دائمة لسلامة الأطفال أثناء وجودهم في الحضانة."
                : "Vigilance constante pour la sécurité des enfants pendant leur présence à la garderie."}
            </p>
          </div>
          <div>
            <h3
              className={`text-xl md:text-2xl font-bold mb-4 text-blue-600 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic
                ? "التشغيل خلال العطلات المدرسية"
                : "Fonctionnement Pendant les Vacances Scolaires"}
            </h3>
            <p
              className={`text-gray-700 leading-relaxed text-sm md:text-base ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic
                ? "خلال عطلات الشتاء والربيع، تفتح الحضانة أبوابها في الأسبوع الأول وتغلق في الأسبوع الثاني للراحة."
                : "Pendant les vacances d'hiver et de printemps, la garderie est ouverte la première semaine et fermée la deuxième semaine pour repos."}
            </p>
          </div>
          <div>
            <h3
              className={`text-xl md:text-2xl font-bold mb-4 text-blue-600 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic ? "التكاليف" : "Coûts"}
            </h3>
            <p
              className={`text-gray-700 leading-relaxed text-sm md:text-base ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic
                ? "رسوم الخدمة بدون حضانة: 150 دينار تونسي."
                : "Frais pour service sans garderie : 150 TND."}
              <br />
              {isArabic
                ? "رسوم الخدمة مع حضانة: 180 دينار تونسي."
                : "Frais pour service avec garderie : 180 TND."}
              <br />
              {isArabic
                ? "رسوم التسجيل: 150 دينار تونسي."
                : "Frais d'inscription : 150 TND."}
            </p>
          </div>
          <div>
            <h3
              className={`text-xl md:text-2xl font-bold mb-4 text-blue-600 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic ? "إجراءات الطوارئ" : "Procédures d'Urgence"}
            </h3>
            <p
              className={`text-gray-700 leading-relaxed text-sm md:text-base ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic
                ? "تلتزم المديرة بإبلاغ الوالدين بأي حالة طارئة قد تؤثر على سلامة الطفل."
                : "La directrice s'engage à informer les parents de toute urgence pouvant affecter la sécurité de l'enfant."}
              <br />
              {isArabic
                ? "في حالة وقوع حادث أو مرض مفاجئ لطفل، ستتخذ المديرة الإجراءات التالية:"
                : "En cas d'accident ou de maladie soudaine d'un enfant, la directrice prendra les mesures suivantes:"}
              <br />
              {isArabic ? "- إبلاغ الوالدين." : "- Informer les parents."}
              <br />
              {isArabic
                ? "- استدعاء الطبيب التابع للمؤسسة إذا كان ذلك ممكنًا."
                : "- Faire appel au médecin affilié à l'établissement si possible."}
              <br />
              {isArabic
                ? "- إذا كانت هناك حاجة إلى تدخل طارئ، ستقوم المؤسسة بنقل الطفل إلى الطوارئ الطبية بعد الحصول على إذن الوالدين."
                : "- Si une intervention d'urgence est nécessaire, l'institution transportera l'enfant aux urgences médicales après avoir obtenu l'autorisation des parents."}
              <br />
              {isArabic
                ? "لا يُقبل أي طفل مصاب بأمراض معدية دون شهادة طبية تؤكد شفائه."
                : "Aucun enfant atteint de maladies infectieuses n'est accepté sans un certificat médical confirmant sa guérison."}
            </p>
          </div>
          <div>
            <h3
              className={`text-xl md:text-2xl font-bold mb-4 text-blue-600 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic ? "المدفوعات" : "Paiements"}
            </h3>
            <p
              className={`text-gray-700 leading-relaxed text-sm md:text-base ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic
                ? "يجب دفع الرسوم الشهرية خلال الأسبوع الأول من كل شهر؛ سيتم استبعاد أي طفل لم يتم دفع رسومه الشهرية في الشهر التالي."
                : "Les frais mensuels doivent être payés durant la première semaine de chaque mois; tout enfant dont les frais n'ont pas été payés sera exclu le mois suivant."}
            </p>
          </div>
          <div>
            <h3
              className={`text-xl md:text-2xl font-bold mb-4 text-blue-600 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic ? "متطلبات الحضور" : "Exigences de Présence"}
            </h3>
            <p
              className={`text-gray-700 leading-relaxed text-sm md:text-base ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic
                ? "يجب أن يصل الأطفال إلى الحضانة بملابس نظيفة وشعر مقصوص."
                : "Les enfants doivent arriver à la garderie vêtus proprement et avec les cheveux coupés."}
              <br />
              {isArabic
                ? "يجب على الوالدين حضور الاجتماعات الدورية التي تنظمها الحضانة."
                : "Les parents doivent assister aux réunions périodiques organisées par la garderie."}
            </p>
          </div>
          <div>
            <h3
              className={`text-xl md:text-2xl font-bold mb-4 text-blue-600 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic ? "قبول الأطفال" : "Admission des Enfants"}
            </h3>
            <p
              className={`text-gray-700 leading-relaxed text-sm md:text-base ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic
                ? "تقبل روضة الأطفال الأطفال الذين تتراوح أعمارهم بين 2.5 إلى 5 سنوات."
                : "Le jardin d'enfants accepte les enfants dont l'âge est de 2,5 à 5 ans."}
              <br />
              {isArabic
                ? "لقبول الأطفال في مؤسستنا، يُطلب من الوالدين تقديم المستندات التالية:"
                : "Pour accepter les enfants dans notre institution, les parents sont priés de présenter les documents suivants:"}
              <br />
              {isArabic
                ? "- شهادة طبية تثبت صحة الطفل وقدرته على العيش في مجموعة."
                : "- Un certificat médical prouvant la bonne santé de l'enfant et sa capacité de vivre en groupe."}
              <br />
              {isArabic
                ? "- نسخة من دفتر التطعيمات."
                : "- Une copie du carnet de vaccinations."}
              <br />
              {isArabic
                ? "- نسخة من شهادة الميلاد."
                : "- Un extrait de naissance."}
              <br />
              {isArabic ? "- 6 صور شخصية." : "- 6 photos d'identité."}
              <br />
              {isArabic
                ? "- استمارة المعلومات مكتملة بشكل صحيح("
                : "- La fiche de renseignements dûment remplie("}
              <a href="/enrollment" className="text-blue-500 underline">
                {isArabic ? "على الموقع" : "sur le site"}
              </a>
              {isArabic ? ")." : ")."}
              <br />
              {isArabic
                ? "- النظام الداخلي لروضة الأطفال غادة موقع من قبل أحد الوالدين."
                : "- Le règlement intérieur de Jardin d'enfant Ghada signé par l'un des parents de l'enfant."}
              <br />
              {isArabic
                ? "- نسخة من بطاقة هوية أحد الوالدين."
                : "- Une photocopie de carte d'identité de l'un des parents."}
              <br />
              <u>
                {isArabic
                  ? "لا يصبح قبول الطفل نهائيًا إلا عندما تكون المعلومات والمستندات الداعمة لملف طلب التسجيل بحوزة الإدارة، وتكون الرسوم الدراسية مدفوعة، وتكون اللوائح الداخلية موقعة بشكل صحيح من قبل والدي الطفل (الأب والأم، أو الوصي القانوني إذا لزم الأمر)."
                  : "L'admission d'un enfant ne devient définitive que lorsque les renseignements et pièces justificatives du dossier de demande d'inscription sont en la possession de l'administration, les droits de scolarité acquittés et le présent règlement dûment signé par les parents de l'enfant (le père et la mère, le cas échéant le tuteur légal)."}
              </u>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConditionPage;
