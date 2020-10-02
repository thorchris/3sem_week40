import "./style.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import SERVER_URL from "./constants.js"
import personFacade from "./personFacade"

/* LOAD PERSONS */
function loadPersons(){
personFacade.getPersons()
.then(data => {
  const persons = data.all;
  const personRows = persons.map(person => `
  <tr>
   <td>${person.id}</td>
   <td>${person.fName}</td>
   <td>${person.lName}</td>
   <td>${person.phone}</td>
   <td>${person.street}</td>
   <td>${person.zip}</td>
   <td>${person.city}</td>
   <td><a href="#" class="btnDelete" id=${person.id} >delete</a>
  </tr>
 `)
 const personRowsAsString = personRows.join("");
 document.getElementById("tbody").innerHTML = personRowsAsString;
})
}
loadPersons()
document.getElementById("reload").addEventListener("click", loadPersons)

document.getElementById("tbody").addEventListener("click", (event) => {
  personFacade.deletePerson(event.target.id)
});

  
/* ADD NEW PERSON */
function addNewPerson(){
  let newPerson = {
    "fName" : document.getElementById("personFname").value,
    "lName" : document.getElementById("personLname").value,
    "phone" : document.getElementById("personPhone").value,
    "street" : document.getElementById("personStreet").value,
    "zip" : document.getElementById("personZip").value,
    "city" : document.getElementById("personCity").value,
  }
  personFacade.addPerson(newPerson)
}
document.getElementById("savebtn").addEventListener("click", addNewPerson)
