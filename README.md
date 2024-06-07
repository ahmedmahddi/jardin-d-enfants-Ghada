# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Project Structure


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
│  ├─ .env
│  ├─ .gitignore
│  ├─ app.js
│  ├─ controllers
│  │  ├─ assignStaff.controller.js
│  │  ├─ bill.controller.js
│  │  ├─ child.controller.js
│  │  ├─ employeeReg.controller.js
│  │  ├─ enrollment.controller.js
│  │  ├─ event.controller.js
│  │  ├─ index.js
│  │  ├─ medicine.controller.js
│  │  ├─ payment.controller.js
│  │  ├─ paymentInquery.controller.js
│  │  ├─ schedule.controller.js
│  │  └─ user.controller.js
│  ├─ middleware
│  │  └─ auth.middleware.js
│  ├─ models
│  │  ├─ assignStaff.models.js
│  │  ├─ bill.models.js
│  │  ├─ child.models.js
│  │  ├─ employeeReg.models.js
│  │  ├─ enrollment.model.js
│  │  ├─ event.models.js
│  │  ├─ index.js
│  │  ├─ medicine.models.js
│  │  ├─ payment.models.js
│  │  ├─ paymentInquery.models.js
│  │  ├─ schedule.models.js
│  │  └─ user.models.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ repository
│  │  ├─ assignStaff.repository.js
│  │  ├─ bill.repository.js
│  │  ├─ child.repository.js
│  │  ├─ employeeReg.repository.js
│  │  ├─ enrollment.repository.js
│  │  ├─ event.repository.js
│  │  ├─ index.js
│  │  ├─ medicine.repository.js
│  │  ├─ payment.repository.js
│  │  ├─ paymentInquery.repository.js
│  │  ├─ schedule.repository.js
│  │  └─ user.repository.js
│  ├─ routes
│  │  ├─ assignStaff.route.js
│  │  ├─ bill.route.js
│  │  ├─ child.route.js
│  │  ├─ employeeReg.route.js
│  │  ├─ enrollment.route.js
│  │  ├─ event.route.js
│  │  ├─ index.js
│  │  ├─ medicine.route.js
│  │  ├─ payment.route.js
│  │  ├─ paymentInquery.route.js
│  │  ├─ schedule.route.js
│  │  └─ user.route.js
│  ├─ server.js
│  ├─ services
│  │  ├─ assignStaff.service.js
│  │  ├─ bill.service.js
│  │  ├─ child.service.js
│  │  ├─ employeeReg.service.js
│  │  ├─ enrollment.service.js
│  │  ├─ event.service.js
│  │  ├─ index.js
│  │  ├─ medicine.service.js
│  │  ├─ payment.service.js
│  │  ├─ paymentInquery.service.js
│  │  ├─ schedule.service.js
│  │  └─ user.service.js
│  └─ utils
│     ├─ appError.js
│     ├─ db.js
│     ├─ dbConnect.js
│     ├─ email.js
│     └─ success.js
├─ src
│  ├─ (authenticated)
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
│  │  └─ ThemeContext.jsx
│  ├─ index.js
│  ├─ routes
│  ├─ styles
│  │  ├─ globals.css
│  │  └─ tailwind.css
│  └─ utils
│     └─ axiosInstance.js
└─ tailwind.config.js

```