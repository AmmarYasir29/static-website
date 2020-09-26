var firebaseConfig = {
  apiKey: "AIzaSyBiVvENyk4UpEO9gGBU10rLc0gV51scRM4",
  authDomain: "graduation-project-1ee83.firebaseapp.com",
  databaseURL: "https://graduation-project-1ee83.firebaseio.com",
  projectId: "graduation-project-1ee83",
  storageBucket: "graduation-project-1ee83.appspot.com",
  messagingSenderId: "808596897196",
  appId: "1:808596897196:web:0d24df05594ad4def6ce09",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const email = document.getElementById("emailFild");
const password = document.getElementById("passwordFild");
const signin = document.getElementById("btnSignin");

signin.addEventListener("click", (e) => {
  const mail = email.value;
  const pass = password.value;
  if (mail != "" && pass != "") {
    const promise = auth.signInWithEmailAndPassword(mail, pass);
    promise.catch((e) => window.alert(e.message));
  } else window.alert("fill All Fields!");
});
