```
client
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ favicon.ico
│  ├─ images
│  │  ├─ gallery-image-1.jpeg
│  │  ├─ gallery-image-2.jpeg
│  │  ├─ gallery-image-3.jpeg
│  │  ├─ logo-JDG-with-background copy no name1.png
│  │  ├─ logo-no-name.png
│  │  ├─ logo-no-name.svg
│  │  └─ playground.png
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
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ attendance.controller.js
│  │  ├─ auth.controller.js
│  │  ├─ child.controller.js
│  │  ├─ communication.controller.js
│  │  ├─ curriculum.controller.js
│  │  ├─ enrollment.controller.js
│  │  ├─ evaluation.controller.js
│  │  ├─ event.controller.js
│  │  ├─ image.controller.js
│  │  ├─ index.js
│  │  ├─ invoice.controller.js
│  │  ├─ noticeboard.controller.js
│  │  ├─ notification.controller.js
│  │  ├─ payment.controller.js
│  │  ├─ report.controller.js
│  │  ├─ staff.controller.js
│  │  └─ user.controller.js
│  ├─ cron
│  │  └─ invoice.cron.js
│  ├─ error.log
│  ├─ invoices
│  │  ├─ invoice-10-ahmed_mahdi.pdf
│  │  ├─ invoice-11-ahmed_mahdi.pdf
│  │  ├─ invoice-12-ahmed_mahdi.pdf
│  │  ├─ invoice-13-ahmed_mahdi.pdf
│  │  ├─ invoice-14-lotfi_dammak.pdf
│  │  ├─ invoice-15-lotfi_dammak.pdf
│  │  ├─ invoice-16-ahmed_mahdi.pdf
│  │  ├─ invoice-17-ahmed_mahdi.pdf
│  │  ├─ invoice-61-lotfi_dammak.pdf
│  │  ├─ invoice-62-lamia_dammak.pdf
│  │  ├─ invoice-63-lamia_dammak.pdf
│  │  ├─ invoice-64-lamia_dammak.pdf
│  │  ├─ invoice-65-lamia_dammak.pdf
│  │  ├─ invoice-66-lamia_dammak.pdf
│  │  ├─ invoice-67-lotfi_dammak.pdf
│  │  ├─ invoice-68-lamia_dammak.pdf
│  │  └─ invoice-9-ahmed_mahdi.pdf
│  ├─ middleware
│  │  ├─ access.log
│  │  ├─ auth.middleware.js
│  │  ├─ error.middleware.js
│  │  ├─ logger.middleware.js
│  │  ├─ protect.middleware.js
│  │  └─ wlogger.middleware.js
│  ├─ mockdata.js
│  ├─ models
│  │  ├─ attendance.model.js
│  │  ├─ children.model.js
│  │  ├─ communication.model.js
│  │  ├─ curriculum.model.js
│  │  ├─ enrollment.model.js
│  │  ├─ evaluation.model.js
│  │  ├─ event.model.js
│  │  ├─ image.model.js
│  │  ├─ index.js
│  │  ├─ invoice.model.js
│  │  ├─ noticeboard.model.js
│  │  ├─ notification.model.js
│  │  ├─ parentPayment.model.js
│  │  ├─ report.model.js
│  │  ├─ staff.model.js
│  │  ├─ staffPayment.model.js
│  │  └─ user.model.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ routes
│  │  ├─ attendance.routes.js
│  │  ├─ auth.routes.js
│  │  ├─ child.routes.js
│  │  ├─ communication.routes.js
│  │  ├─ curriculum.routes.js
│  │  ├─ enrollment.routes.js
│  │  ├─ evaluation.routes.js
│  │  ├─ event.routes.js
│  │  ├─ image.route.js
│  │  ├─ index.js
│  │  ├─ invoice.routes.js
│  │  ├─ noticeboard.routes.js
│  │  ├─ notification.routes.js
│  │  ├─ payment.routes.js
│  │  ├─ report.routes.js
│  │  ├─ staff.routes.js
│  │  └─ user.routes.js
│  ├─ seed.js
│  ├─ server.js
│  ├─ services
│  │  ├─ attendance.service.js
│  │  ├─ auth.service.js
│  │  ├─ child.service.js
│  │  ├─ communication.service.js
│  │  ├─ curriculum.service.js
│  │  ├─ enrollment.service.js
│  │  ├─ evalution.service.js
│  │  ├─ event.service.js
│  │  ├─ image.service.js
│  │  ├─ index.js
│  │  ├─ invoice.service.js
│  │  ├─ noticeboard.service.js
│  │  ├─ notification.service.js
│  │  ├─ payment.service.js
│  │  ├─ report.service.js
│  │  ├─ staff.service.js
│  │  └─ user.service.js
│  ├─ templates
│  │  ├─ invoice.html
│  │  └─ receipt.html
│  └─ utils
│  │  ├─ auth.js
│     ├─ appError.js
│     ├─ dbConnect.js
│     ├─ email.js
│     └─ success.js
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
│  │  │  ├─ Invoice
│  │  │  │  └─ invoice.api.js
│  │  │  └─ Staff
│  │  │     └─ staff.api.js
│  │  ├─ assets
│  │  │  └─ images
│  │  │     ├─ avatar-placeholder.jpg
│  │  │     ├─ avatar-placeholder.png
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
│  │  │  └─ Login.jsx
│  │  ├─ programs
│  │  │  ├─ DailySchedule.jsx
│  │  │  ├─ ExtracurricularActivities.jsx
│  │  │  ├─ ProgramDetails.jsx
│  │  │  ├─ ProgramIntro.jsx
│  │  │  ├─ Programs.jsx
│  │  │  └─ WelcomeSection.jsx
│  │  └─ register
│  │     └─ Register.jsx
│  ├─ App.js
│  ├─ auth
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
