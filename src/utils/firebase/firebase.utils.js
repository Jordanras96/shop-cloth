import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9JfwOq7r7KXpNio2P_yNlvzRFnkkd8Lw",
  authDomain: "shop-cloth-db.firebaseapp.com",
  projectId: "shop-cloth-db",
  storageBucket: "shop-cloth-db.appspot.com",
  messagingSenderId: "297269148335",
  appId: "1:297269148335:web:cc829bd7fd3163d51ab25a",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserProfileDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());


  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.error("Erreur lors de la creation du document", error.message);
    }
  }
  return userDocRef;
};
