// Get Value of the objects using DOM
const name = document.getElementById("customerName");
const element = document.getElementById("element");
const mobile = document.getElementById("mobile");
const orderBtn = document.getElementById("order-btn");

const database = firebase.database();
const rootRef = database.ref("orders");

orderBtn.addEventListener("click", (e) => {
  if (name.value != "" && element.value != "" && mobile.value != "") {
    e.preventDefault();
    const autoID = rootRef.push().key;
    rootRef.child(autoID).set({
      customer_name: name.value,
      Element_type: element.value,
      mobile_number: mobile.value,
    });
    // rootRef.child.on("child_added", (snapshot) => {
    //   alert("Ref Number : " + snapshot.autoID.val());
    // });
    location.reload();
    alert("شكرا, تم استلام طلبك سنتواصل معك قريبا");
  } else {
    alert("من فضلك استكمل البيانات");
  }
});

// (function () {
//   // Intialize firebase
//   var config = {
//     apiKey: "AIzaSyD71TirSoLtyo7cDIQ5VfhKx2-4yG8SIlo",
//     authDomain: "almawkaa-clone.firebaseapp.com",
//     databaseURL: "https://almawkaa-clone.firebaseio.com/",
//     storageBucket: "almawkaa-clone.appspot.com",
//   };

//   firebase.initializeApp(config);

//   // Get a reference to the database service
//   var firebaseRef = firebase.database();

//   // Get Value of the objects using DOM
//   var name = document.getElementById("customerName").value;
//   var element = document.getElementById("element").value;
//   var mobile = document.getElementById("mobile").value;

//   // Create Reference
//   const dbRefObject = firebase.database().ref().child("object");

//   // Make Function when submit the button**************************
//   function submitData(name, element, mobile) {
//     //Insert the Data in the DataBase
//     firebase.database().ref().set({
//       name: this.name,
//       order: this.element,
//       mobile: this.mobile,
//     });
//   }
// })();
