// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd_XEkr0Ma9EoVzn1XK91jmaLrbTj-McQ",
  authDomain: "todoapp-52385.firebaseapp.com",
  projectId: "todoapp-52385",
  storageBucket: "todoapp-52385.appspot.com",
  messagingSenderId: "717300900159",
  appId: "1:717300900159:web:dbfb70d41215e1f687f38a",
  measurementId: "G-BJ9FB0JSP6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
var a = document.getElementById("inputtask");

window.addElem = function () {
  var obj = {
    task: a.value,
  };
  obj.id = Math.random().toString().slice(2);
  let reference = ref(db, `tasks/${obj.id}/`);
  set(reference, obj);
  console.log(obj);
  var li = document.createElement("Li");
  var b = document.createTextNode(a.value);
  li.appendChild(b);
  var delbtn = document.createElement("button");

  var deltext = document.createTextNode("Delete");
  delbtn.appendChild(deltext);
  li.appendChild(delbtn);
  delbtn.setAttribute("class", "stylebutton");
  delbtn.setAttribute("onclick", "deletetask(this)");

  // mainlist.appendChild(li);
  // edit button
  var editbutton = document.createElement("button");
  var edittext = document.createTextNode("edit");
  editbutton.appendChild(edittext);
  li.appendChild(editbutton);
  mainlist.appendChild(li);
  // set setAttribute
  editbutton.setAttribute("class", "stylebutton");
  editbutton.setAttribute("onclick", "edittask(this)");
  console.log(li);
};

// function getData() {
//   let reference = ref(database, "task/");
//   let arr = [];
//   onChildAdded(reference, function (dt) {
//     arr.push(dt.val());
//     console.log(arr);
//     parent.innerHTML = "";
//     for (var i = 0; i < arr.length; i++) {
//       parent.innerHTML += `<li>${arr[i].task} </li>`;
//     }
//   });
// }

// getData();

var mainlist = document.getElementById("mainList");
// var inp = document.getElementById("text");
var mainlist = document.getElementById("mainList");
// function addElem() {}
window.deletetask = function (element) {
  element.parentNode.remove();
};
window.edittask = function (element) {
  console.log(element.parentNode);
  element.parentNode.firstChild.nodeValue = prompt();
};
window.deleteAll = function () {
  mainlist.innerHTML = "";
  inp.value = "";
};
