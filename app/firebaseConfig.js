// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBcER4ZTgMqxam10yGxsku_L_pCqSbVpjs',
  authDomain: 'esp8266test-f058e.firebaseapp.com',
  databaseURL: 'https://esp8266test-f058e-default-rtdb.firebaseio.com',
  projectId: 'esp8266test-f058e',
  storageBucket: 'esp8266test-f058e.appspot.com',
  messagingSenderId: '949162809714',
  appId: '1:949162809714:web:d4b883b35a8dbee48865eb',
  measurementId: 'G-4982ESX6MY',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)
