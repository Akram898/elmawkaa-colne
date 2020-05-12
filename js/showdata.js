// Get Data from data base
// Get Value of the objects using DOM
const name = document.getElementById("customerName");
const element = document.getElementById("element");
const mobile = document.getElementById("mobile");
const orderBtn = document.getElementById("order-btn");

const database = firebase.database();
const rootRef = database.ref("orders");
const orderId = document.getElementById("order-id");
const getName = document.getElementById("get-name");
const getElement = document.getElementById("get-element");
const getMob = document.getElementById("get-mob");

const preObj = document.getElementById("object");

rootRef.on("value", (snap) => {
  // console.log(snap.val());

  object.innerText = JSON.stringify(snap, null, 3);
});
