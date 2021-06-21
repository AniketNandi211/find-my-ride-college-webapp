import firebase from 'firebase/app';
import 'firebase/firestore'; // for firestore database
import UserService from './services/UserService';
import VehicleService from './services/VehicleService';
import 'firebase/auth' // for user Authentication

const firebaseDebug = false

const firebaseConfig = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSend: process.env.VUE_APP_messagingSenderId,
  appId: process.env.VUE_APP_appId
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initiate the firestore
const database = app.firestore()
// collection access

/** reference to the users collection  */
export const usersCollection = database.collection('users')

/** reference to the Vehicles collection  */
export const vehiclesCollection = database.collection('vehicles')

// for testing stuff
const checkFeature = async () => {
  // custom checking of a feature goes here
  console.log(await VehicleService.getAllVehicles())
}

if (firebaseDebug) checkFeature()
// testing stuff end ->
