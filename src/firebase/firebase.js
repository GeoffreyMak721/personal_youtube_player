import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDo37mXJt-1QS-qcpi0zAx0xkBU1B7RE8w",
  authDomain: "personal--player.firebaseapp.com",
  projectId: "personal--player",
  storageBucket: "personal--player.appspot.com",
  messagingSenderId: "210718852282",
  appId: "1:210718852282:web:b4a754c50039ea41c4ae83",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(res);
    const accessToken = credential.accessToken;
    console.log("accessToken", accessToken);
    localStorage.setItem("ytc-access-token", accessToken);
  } catch (err) {
    console.error(err);
  }
};

const logout = () => {
  localStorage.removeItem("ytc-access-token");
  signOut(auth);
};
export { auth, signInWithGoogle, logout };
