const addBtn = document.getElementById("addEventBtn");
const eventContainer = document.getElementById("eventContainer");

console.log("Dashboard Loaded");

addBtn.addEventListener("click", function(){

const title = document.getElementById("eventTitle").value;
const date = document.getElementById("eventDate").value;
const category = document.getElementById("eventCategory").value;
const description = document.getElementById("eventDescription").value;

if(title === "" || date === "" || category === "" || description === ""){
alert("Please fill all fields");
return;
}

const card = document.createElement("div");
card.className = "event-card";

card.innerHTML = `
<h3>${title}</h3>
<p><strong>Date:</strong> ${date}</p>
<p><strong>Category:</strong> ${category}</p>
<p>${description}</p>
<button class="delete-btn">Delete</button>
`;

eventContainer.appendChild(card);

document.getElementById("eventTitle").value = "";
document.getElementById("eventDate").value = "";
document.getElementById("eventCategory").value = "";
document.getElementById("eventDescription").value = "";

console.log("Event Created");

});

eventContainer.addEventListener("click", function(event){

if(event.target.classList.contains("delete-btn")){

const card = event.target.parentElement;

card.remove();

console.log("Event Deleted");

}

});
