# Donor Management application - Client and cloud functions

The application revolves around donor to donate money to NGOs, view donor details.
## Tech stack
- [React JS] - Frontend library
- [Express] inside cloud functions
- [Firebase] - Authentication, Cloud functions
- [Firestore] - Data storage
- [RazorPay] - Payment integration
 
## Installation
Donor Management App requires [Node.js](https://nodejs.org/) v12+ to run.
Install the dependencies and devDependencies and start the server.
#### Client Installation (Root folder)
```sh
npm i
```
#### Server Installation (Functions folder)
```sh
cd functions
npm i
```
## To run the application in dev environment
```sh
npm run dev
```
#### For bundling the client application
```sh
npm run build
```
## Deployment (Hosting and functions)
```sh
firebase deploy
```

## Deployment (Hosting)
```sh
firebase deploy --only hosting
```

## Deployment (Functions)
```sh
firebase deploy --only functions
```


   [React JS]: <https://reactjs.org/>
   [express]: <http://expressjs.com>
   [Firebase]: <https://firebase.google.com>
   [express]: <https://firebase.google.com>
   [express]: <https://razorpay.com/>
