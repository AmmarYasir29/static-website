let db = firebase.firestore();
const email = document.querySelector("#email");

db.collection("Studnets")
  .get()
  .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      email.innerHTML = doc.data().email;
    });
  });
