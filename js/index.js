//*****DataBase ******** */

// Get Value of the objects using DOM
const name = document.getElementById("customerName");
const element = document.getElementById("element");
const mobile = document.getElementById("mobile");
const orderBtn = document.getElementById("order-btn");

const database = firebase.database();
const rootRef = database.ref("orders");

// ADD Order to Databas
orderBtn.addEventListener("click", (e) => {
  if (
    name.value != "" &&
    element.value != "" &&
    mobile.value != "" &&
    confirm(
      "طلبك هو : \n الاسم :" +
        name.value +
        ",\n الصنف: " +
        element.value +
        ",\n الرقم: " +
        mobile.value
    )
  ) {
    e.preventDefault();

    const autoID = rootRef.push().key;
    rootRef.child(autoID).set({
      customer_name: name.value,
      Element_type: element.value,
      mobile_number: mobile.value,
    });

    window.location.reload();
    alert("شكرا, تم استلام طلبك سنتواصل معك قريبا");
  } else {
    alert("من فضلك استكمل البيانات");
  }
});
//******************* */

// // Get Data from data base
// const orderId = document.getElementById("order-id");
// const getName = document.getElementById("get-name");
// const getElement = document.getElementById("get-element");
// const getMob = document.getElementById("get-mob");

// const preObj = document.getElementById("object");

// rootRef.on("value", (snap) => {
//   // console.log(snap.val());

//   object.innerText = JSON.stringify(snap, null, 3);
// });
