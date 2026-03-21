let myLeads = [
  "www.ray2.com",
  "www.ray1.com",
  "www.ray3.com",
  "www.ray4.com",
  "www.ray5.com",
];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("leads-list");
const container = document.getElementById("contaner");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  //   console.log(myLeads);
});

inputEl.addEventListener("click", function () {
  //   console.log(inputEl.value);
});

function renderLeads() {
  ulEl.innerHTML = "";
  for (let i = 0; i < myLeads.length; i++) {
    // console.log(myLeads[i]);
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
  }
}
renderLeads();
let newmyLeads = [...myLeads];

container.innerHTML = "<button id='input-btn'>SAVE INPUT</button>";

//delete button
const newBtn = document.createElement("button");
newBtn.id = "new-btn";
newBtn.textContent = "delete";
container.append(newBtn);

newBtn.addEventListener("click", function () {
  myLeads.pop();
});

//create new container for displaying updated leads

const newContainer = document.createElement("div");
newContainer.id = "new-container";
container.append(newContainer);
newContainer.innerHTML = "myLeads: " + myLeads;

newBtn.addEventListener("click", function () {
  //   console.log("new container");

  newContainer.innerHTML = "myLeads: " + myLeads;
});
