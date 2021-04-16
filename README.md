## Roadside Reporting App

This app will allow the public to report roadside issues

### To do

- [x] Add separate page routes for Login, Home and About (using [react-router](https://reactrouter.com/web/guides/quick-start))
- [x] Add login page route (`/login`) with login form that allows user to sign in using email and password combination or by using Google sign-in. Build the form fields using [react-hook-form](https://react-hook-form.com/)
- [x] Authenticate the user using Firebase authentication (email/password)
- [x] Redirect the user to the `/home` route if they are logged-in
- [x] Restrict the user from adding new potholes if they are not logged-in
- [x] Update userContext with logged in user information
- [x] Add Firebase Firestore integration to store the location of potholes
- [x] Add new potholes by double-clicking on the map to display a modal which includes a form to add pothole locations. This form built using [react-hook-form](https://react-hook-form.com/) will accept the following user inputs: location of pothole, image of pothole and lat, lng of pothole. The lat,lng coordinates for the pothole will be the same as the location (double) clicked on the map
- [ ] List location of potholes on map (mapbox-gl)
- [ ] List information of potholes in a scrollable list in sidebar
- [x] Display an 'About' page

### Libraries included

1. Firebase
2. Mapbox-gl v2
3. Tailwindcss v2

### Pre-requisites

Setup Firebase project and copy config credentials

### Setup Instructions

- Fork or clone the repo
- Rename `.env.example` to `.env.local`
- Add your Firebase credentials to the `.env.local` file
- Add your mapbox API key to the `.env.local` file
- Install dependencies using `yarn`
- Run locally using `yarn start`

### Submission Instructions

- Fork the repo
- Commit changes to your repo using `git add .` and `git commit -m [commit message]`
- Submit PR to the branch
