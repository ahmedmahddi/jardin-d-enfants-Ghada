```
client
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ android-chrome-192x192.png
│  ├─ android-chrome-512x512.png
│  ├─ apple-touch-icon.png
│  ├─ favicon-16x16.png
│  ├─ favicon-32x32.png
│  ├─ favicon.ico
│  ├─ favicon1.ico
│  ├─ images
│  │  ├─ gallery-image-1.jpeg
│  │  ├─ gallery-image-2.jpeg
│  │  ├─ gallery-image-3.jpeg
│  │  ├─ logo-JDG-with-background copy no name1.png
│  │  ├─ logo-no-name.png
│  │  ├─ logo-no-name.svg
│  │  ├─ playground.png
│  │  ├─ playground1.png
│  │  ├─ playground2.jpg
│  │  ├─ playground2.png
│  │  ├─ playground3.jpg
│  │  └─ playground4.jpeg
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ server
│  ├─ .gitignore
│  ├─ app.js
│  ├─ assets
│  │  └─ logo-JDG.png
│  ├─ combined.log
│  ├─ config
│  │  ├─ config.json
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ auth.controller.js
│  │  ├─ child.controller.js
│  │  ├─ contactus.controller.js
│  │  ├─ enrollment.controller.js
│  │  ├─ event.controller.js
│  │  ├─ invoice.controller.js
│  │  ├─ staff.controller.js
│  │  └─ user.controller.js
│  ├─ cron
│  │  └─ invoice.cron.js
│  ├─ error.log
│  ├─ invoices
│  │  └─ invoice-10-lamia_dammak.pdf
│  ├─ middleware
│  │  ├─ access.log
│  │  ├─ error.middleware.js
│  │  ├─ logger.middleware.js
│  │  ├─ protect.middleware.js
│  │  └─ wlogger.middleware.js
│  ├─ models
│  │  ├─ children.model.js
│  │  ├─ contactUs.model.js
│  │  ├─ enrollment.model.js
│  │  ├─ event.model.js
│  │  ├─ index.js
│  │  ├─ invoice.model.js
│  │  ├─ staff.model.js
│  │  └─ user.model.js
│  ├─ package.json
│  ├─ README.md
│  ├─ routes
│  │  ├─ auth.routes.js
│  │  ├─ child.routes.js
│  │  ├─ contactus.routes.js
│  │  ├─ enrollment.routes.js
│  │  ├─ event.routes.js
│  │  ├─ index.js
│  │  ├─ invoice.routes.js
│  │  ├─ staff.routes.js
│  │  ├─ token.routes.js
│  │  └─ user.routes.js
│  ├─ server.js
│  ├─ services
│  │  ├─ auth.service.js
│  │  ├─ child.service.js
│  │  ├─ contactUs.service.js
│  │  ├─ enrollment.service.js
│  │  ├─ event.service.js
│  │  ├─ index.js
│  │  ├─ invoice.service.js
│  │  ├─ staff.service.js
│  │  └─ user.service.js
│  ├─ templates
│  │  ├─ invoice.html
│  │  └─ receipt.html
│  ├─ token.json
│  ├─ utils
│  │  ├─ appError.js
│  │  ├─ auth.js
│  │  ├─ dbConnect.js
│  │  ├─ email.js
│  │  └─ success.js
│  └─ yarn.lock
├─ src
│  ├─ (authenticated)
│  │  ├─ adminPortal
│  │  │  ├─ AdminPortal.jsx
│  │  │  ├─ Children
│  │  │  │  ├─ AddChild.jsx
│  │  │  │  ├─ ChildrenList.jsx
│  │  │  │  ├─ UpdateChild.jsx
│  │  │  │  └─ ViewChild.jsx
│  │  │  ├─ Dashboard
│  │  │  │  ├─ ChildrenByGenderChart.jsx
│  │  │  │  ├─ Dashboard.jsx
│  │  │  │  ├─ SummaryCard.jsx
│  │  │  │  └─ UpcomingEvents.jsx
│  │  │  ├─ Enrollment
│  │  │  │  ├─ EnrollmentDetailsModal.jsx
│  │  │  │  └─ EnrollmentList.jsx
│  │  │  ├─ Event
│  │  │  │  ├─ addEvent.jsx
│  │  │  │  ├─ CalendarView.jsx
│  │  │  │  ├─ Event.jsx
│  │  │  │  ├─ UpdateEvent.jsx
│  │  │  │  └─ ViewEvent.jsx
│  │  │  ├─ Invoice
│  │  │  │  ├─ CreateInvoice.jsx
│  │  │  │  ├─ GenerateReport.jsx
│  │  │  │  ├─ InvoiceDetailsModal.jsx
│  │  │  │  └─ InvoiceList.jsx
│  │  │  └─ Staff
│  │  │     ├─ AddStaff.jsx
│  │  │     ├─ StaffList.jsx
│  │  │     ├─ UpdateStaff.jsx
│  │  │     └─ ViewStaff.jsx
│  │  ├─ api
│  │  │  ├─ Children
│  │  │  │  └─ children.api.js
│  │  │  ├─ Enrollment
│  │  │  │  └─ enrollment.api.js
│  │  │  ├─ Event
│  │  │  │  └─ event.api.js
│  │  │  ├─ Invoice
│  │  │  │  └─ invoice.api.js
│  │  │  └─ Staff
│  │  │     └─ staff.api.js
│  │  ├─ assets
│  │  │  └─ images
│  │  │     ├─ avatar-placeholder.jpg
│  │  │     ├─ avatar-placeholder.png
│  │  │     ├─ Enrollment.png
│  │  │     ├─ facture.png
│  │  │     ├─ logo-JDG-with-background copy no name1.png
│  │  │     ├─ logo-JDG.png
│  │  │     ├─ students-svg.svg
│  │  │     └─ teachers-svg.svg
│  │  ├─ common
│  │  │  ├─ ConfirmationModal.jsx
│  │  │  ├─ Header.jsx
│  │  │  ├─ Notification.jsx
│  │  │  ├─ PrivateRoute.jsx
│  │  │  └─ Sidebar.jsx
│  │  ├─ parentPortal
│  │  │  ├─ ChildProfile.jsx
│  │  │  ├─ CommunicationTools.jsx
│  │  │  ├─ Dashboard.jsx
│  │  │  ├─ ParentPortal.jsx
│  │  │  ├─ PaymentSection.jsx
│  │  │  └─ StudentPortfolio.jsx
│  │  └─ staff
│  ├─ (non-authenticated)
│  │  ├─ about
│  │  │  ├─ About.jsx
│  │  │  ├─ AboutContent.jsx
│  │  │  ├─ PhotoGallery.jsx
│  │  │  └─ Testimonials.jsx
│  │  ├─ api
│  │  │  └─ ContactUs.api.js
│  │  ├─ assets
│  │  │  └─ images
│  │  │     ├─ background-img.png
│  │  │     ├─ childrenIMG.png
│  │  │     ├─ logo-JDG-with-background copy no name1.png
│  │  │     ├─ logo-JDG.png
│  │  │     ├─ pattern-bg.webp
│  │  │     ├─ playful-bg.webp
│  │  │     └─ playground.png
│  │  ├─ common
│  │  │  ├─ ErrorBoundary.jsx
│  │  │  ├─ Footer.jsx
│  │  │  └─ Header.jsx
│  │  ├─ conditions
│  │  │  ├─ condtion_genrale.jsx
│  │  │  ├─ licence.jsx
│  │  │  └─ policy.jsx
│  │  ├─ contact
│  │  │  ├─ ContactForm.jsx
│  │  │  └─ ContactUs.jsx
│  │  ├─ enrollment
│  │  │  ├─ Enrollment.jsx
│  │  │  └─ EnrollmentForm.jsx
│  │  ├─ home
│  │  │  ├─ Home.jsx
│  │  │  ├─ ImageCarousel.jsx
│  │  │  ├─ PointsForts.jsx
│  │  │  ├─ PourquoiNousChoisir.jsx
│  │  │  ├─ Services.jsx
│  │  │  ├─ staff.jsx
│  │  │  └─ WelcomeSection.jsx
│  │  ├─ login
│  │  │  ├─ Login.jsx
│  │  │  ├─ newPassword.jsx
│  │  │  └─ reset-password.jsx
│  │  ├─ programs
│  │  │  ├─ DailySchedule.jsx
│  │  │  ├─ ExtracurricularActivities.jsx
│  │  │  ├─ ProgramDetails.jsx
│  │  │  ├─ ProgramIntro.jsx
│  │  │  ├─ Programs.jsx
│  │  │  └─ WelcomeSection.jsx
│  │  └─ register
│  │     └─ Register.jsx
│  ├─ .htaccess
│  ├─ App.js
│  ├─ contexts
│  │  ├─ AuthContext.jsx
│  │  └─ ThemeContext.jsx
│  ├─ hooks
│  │  ├─ useDebounce.js
│  │  ├─ useModal.js
│  │  ├─ usePagination.js
│  │  ├─ useSearch.js
│  │  └─ useSort.js
│  ├─ index.js
│  ├─ layouts
│  │  ├─ AuthLayout.jsx
│  │  └─ NonAuthLayout.jsx
│  ├─ queryClient.js
│  ├─ README.md
│  ├─ routes
│  ├─ styles
│  │  ├─ globals.css
│  │  └─ tailwind.css
│  └─ utils
│     └─ axiosInstance.js
└─ tailwind.config.js

```
