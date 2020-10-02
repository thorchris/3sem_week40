import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import userFacade from "./userFacade"
import jokeFacade from "./jokeFacade"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
function makeListItems(){
const jokes = jokeFacade.getJokes();
let jokeLis = jokes.map(joke => `<li>${joke}</li>`);
const listItemAsStr = jokeLis.join("");
document.getElementById("jokes").innerHTML = listItemAsStr;
}
makeListItems()

function getJokeById(){
  let jokeId = document.getElementById("jokeId").value;
  const joke = jokeFacade.getJokeById(jokeId);
  document.getElementById("jokeHere").innerHTML = joke;
}
document.getElementById("getJokeBtn").addEventListener("click", getJokeById);

function addNewJoke(){
  let newJoke = document.getElementById("newJokeId").value;
  jokeFacade.addJoke(newJoke);
  makeListItems();
}
document.getElementById("addJokeBtn").addEventListener("click", addNewJoke);

/* JS For Exercise-2 below */

function fetchQuote(){
  fetch('https://studypoints.info/jokes/api/jokes/period/hour')
    .then(response => response.json())
    .then(json =>{
      var data = JSON.stringify(json)
      document.getElementById("quoteOfHour").innerHTML = data;
    })
}

document.getElementById("qouteBtn").addEventListener("click", fetchQuote);


/* JS For Exercise-3 below */
/* GET ALL USERS */
function updateUsers() {
userFacade.getUsers()
  .then(users => {
  const userRows = users.map(user => `
   <tr>
    <td>${user.id}</td>
    <td>${user.age}</td>
    <td>${user.name}</td>
    <td>${user.gender}</td>
    <td>${user.email}</td>
   </tr>
  `)
  const userRowsAsString = userRows.join("");
  document.getElementById("allUserRows").innerHTML = userRowsAsString;
  
})
}
updateUsers()

/* GET 1 USER BY ID */
function getUser(){
  let userId = document.getElementById("userId").value;
  const user = userFacade.getUser(userId)
  .then(json =>{
    var data = JSON.stringify(json)
    document.getElementById("findUserOutput").innerHTML = data;
  })
}
document.getElementById("findUserBtn").addEventListener("click", getUser);

/* DELETE USER */
function userDelete() {
  let deleteId = document.getElementById("deleteValue").value;
  userFacade.deleteUser(deleteId)
  .then(() => {
    console.log("removed");
  })
}
document.getElementById("deleteBtn").addEventListener("click", userDelete);


/* ADD NEW USER */
function addNewUser(){
  let newUser = {
    "age":document.getElementById("userAge").value,
    "name":document.getElementById("userName").value,
    "gender":document.getElementById("userGender").value,
    "email":document.getElementById("userEmail").value
  }
  userFacade.addUser(newUser)
  updateUsers()
}
document.getElementById("addUserBtn").addEventListener("click", addNewUser)



/* EDIT USER */
function editUser() {
  let userToEdit = document.getElementById("userToEditID").value;
  let user = userFacade.getUser(userToEdit)
  
    user = {
      id: document.getElementById("userToEditID").value,
      age: document.getElementById("editUserAge").value,
      name: document.getElementById("editUserName").value,
      gender: document.getElementById("editUserGender").value,
      email: document.getElementById("editUserEmail").value
    }
  
    userFacade.editUser(user)
  }
  document.getElementById("editUserBtn").addEventListener("click", editUser)
  document.getElementById("updateUsersBtn").addEventListener("click", updateUsers);

/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



