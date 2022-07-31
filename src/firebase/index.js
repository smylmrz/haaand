import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebase/config";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

// Initialize Firebase
initializeApp(firebaseConfig);
import { ref } from "vue";
const db = getFirestore();
const colRef = collection(db, "users");
const users = ref([]);

export const getUsers = () => {
  reset();

  getDocs(colRef).then((snapshot) => {
    snapshot.docs.map((doc) => {
      users.value.push(doc.data());
    });
  });

  return users;
};

const reset = () => {
  users.value = [];
};

export const addUser = (email) => {
  addDoc(colRef, {
    email: email,
  });
};
