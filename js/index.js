(function () {
  // Intialize firebase
  var config = {
    apiKey: "AIzaSyD71TirSoLtyo7cDIQ5VfhKx2-4yG8SIlo",
    authDomain: "almawkaa-clone.firebaseapp.com",
    databaseURL: "https://almawkaa-clone.firebaseio.com/",
    storageBucket: "almawkaa-clone.appspot.com",
  };

  firebase.initializeApp(config);

  // Get a reference to the database service
  var firebaseRef = firebase.database();

  // Get Value of the objects using DOM
  var name = document.getElementById("customerName").value;
  var element = document.getElementById("element").value;
  var mobile = document.getElementById("mobile").value;

  // Create Reference
  const dbRefObject = firebase.database().ref().child("object");

  // Make Function when submit the button**************************
  function submitData(name, element, mobile) {
    //Insert the Data in the DataBase
    firebase.database().ref().set({
      name: this.name,
      order: this.element,
      mobile: this.mobile,
    });
  }
})();
