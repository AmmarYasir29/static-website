var firebaseConfig = {
  apiKey: "AIzaSyBiVvENyk4UpEO9gGBU10rLc0gV51scRM4",
  authDomain: "graduation-project-1ee83.firebaseapp.com",
  databaseURL: "https://graduation-project-1ee83.firebaseio.com",
  projectId: "graduation-project-1ee83",
  storageBucket: "graduation-project-1ee83.appspot.com",
  messagingSenderId: "808596897196",
  appId: "1:808596897196:web:0d24df05594ad4def6ce09",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const email = document.querySelector("#email");
const Department = document.querySelector("#department");
const Permmission = document.querySelector("#permmission");
const Username = document.querySelector("#username");
const JoinDate = document.querySelector("#joinDate");
const out = document.getElementById("logout");
const addNewStudent = document.getElementById("add");
const delStudent = document.getElementById("del");
const studyList = document.querySelector(".studentList");
let i = 1;
db.collection("Studnets")
  .get()
  .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      email.innerHTML = doc.data().email;
      Username.innerHTML = doc.data().name;
    });
  });
out.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("logOut!");
  });
});

addNewStudent.addEventListener("click", (i) => {
  i++;
  const student = document.createElement("tr");
  const num = document.createElement("td");
  num.innerText = i;
  const email = document.createElement("td");
  email.classList.add("email");
  email.innerText = "email!";
  const department = document.createElement("td");
  department.innerText = "department!";
  const permmission = document.createElement("td");
  permmission.innerText = "permmission!";
  const username = document.createElement("td");
  username.innerText = "username!";
  const joinDate = document.createElement("td");
  joinDate.innerText = "joinDate!";
  student.appendChild(num);
  student.appendChild(email);
  student.appendChild(department);
  student.appendChild(permmission);
  student.appendChild(username);
  student.appendChild(joinDate);
  studyList.appendChild(student);
});

delStudent.addEventListener("click", (e) => {
  const rawStudent = e.target;
  const raw = rawStudent.parentElement;
  console.log(raw);
  raw.remove();
});
