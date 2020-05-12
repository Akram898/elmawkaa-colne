// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD71TirSoLtyo7cDIQ5VfhKx2-4yG8SIlo",
  authDomain: "almawkaa-clone.firebaseapp.com",
  databaseURL: "https://almawkaa-clone.firebaseio.com",
  projectId: "almawkaa-clone",
  storageBucket: "almawkaa-clone.appspot.com",
  messagingSenderId: "574372635564",
  appId: "1:574372635564:web:5956c2260f420854729009",
  measurementId: "G-80VYTB63R0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//*****Auth */
//Get elements By DOM

// const btnSignup = document.getElementById("signup-btn");
// const btnSignin = document.getElementById("signin-btn");
// const btnLogout = document.getElementById("logout");

//Validate email
// var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

// //Validate if numbers
// var passformat = /[0-9]/g;

const auth = firebase.auth();

function signUp() {
  const txtEmail = document.getElementById("email");
  const txtPassword = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    txtEmail.value,
    txtPassword.value
  );
  promise.catch((e) => alert.log(e.message));

  alert("Signed Up Successfully");
}

function signIn() {
  const txtEmail = document.getElementById("email");
  const txtPassword = document.getElementById("password");

  const promise2 = auth.signInWithEmailAndPassword(
    txtEmail.value,
    txtPassword.value
  );
  promise.catch((e) => alert.log(e.message));

  alert(txtEmail.value + "is Signed In");
}
//   const txtEmail = document.getElementById("email");
//   const txtPassword = document.getElementById("password");

//   const promise2 = auth.signInWithEmailAndPassword(
//     txtEmail.value,
//     txtPassword.value
//   );
//   promise.catch((e) => alert.log(e.message));

//   alert(txtEmail.value + "is Signed In");
// }

// function signOut() {
//   auth.signOut;
//   alert("Signed Out");
// }
// Another try still not working
//const validate = document.getElementById("password-validation");

// if (txtEmail.value != "" && txtPassword.value.length >= 5) {
//   const promise = auth.createUserWithEmailAndPassword(
//     txtEmail.value,
//     txtPassword.value
//   );
//   promise.catch((e) => alert.log(e.message));

//   alert("Signed Up Successfully");
// } else {
//   alert("Wrong Inputs : Wrong Email or password less than 5 characters");
//   //validate.classList.remove("hide");

//}

//Sign Up method
// if (txtEmail.value.match(mailformat) && txtPassword.value.length >= 5) {
//   const promise = auth.createUserWithEmailAndPassword(
//     txtEmail.value,
//     txtPassword.value
//   );
//   promise.catch((e) => alert.log(e.message));

//   alert("Signed Up Successfully");
// } else {
//   alert("Wrong Inputs : Wrong Email or password less than 5 characters");
//   //validate.classList.remove("hide");
// }

//**********Sign UP**************
// btnSignup.addEventListener("click", (e) => {
//   const email = txtEmail.value;
//   const pass = txtPassword.value;

//   //Sign Up method
//   const promise = auth.createUserWithEmailAndPassword(email, pass);
//   promise.catch((e) => alert.log(e.message));

//   alert("Signed Up Successfully");
// });

// //Sngn In Btn Function
// btnSignin.addEventListener("click", (e) => {
//   //get email & password
//   const email = txtEmail.value;
//   const pass = txtPassword.value;

//   //catch from Database
//   const promise = auth.signInWithEmailANdPassword(email, pass);
//   promise.catch((e) => console.log(e.message));
// });

// //Log Out btn
// btnLogout.addEventListener("click", (e) => {
//   firebase.auth().signOut();
// });

// //Add realtime listen
// firebase.auth().onAuthStateChanged((firebaseUser) => {
//   if (firebaseUser) {
//     console.log(firebaseUser);
//     btnLogout.classList.remove("hide");
//   } else {
//     console.log("not Logged In");
//     btnLogout.classList.add("hide");
//   }
// });
