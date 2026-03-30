let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("leads-list");
ulEl.style.display = "block";
const saveBtn = document.getElementById("save-btn");

const localStorageFromStorage = JSON.parse(localStorage.getItem("myLeads"));
myLeads = [];
render(myLeads);
console.log(myLeads);

if (localStorageFromStorage) {
  myLeads = localStorageFromStorage;
  render(myLeads);
}

function render(leads) {
  let lestItem = "";
  for (let i = 0; i < leads.length; i++) {
    let url = leads[i];
    if (!url.startsWith("http")) {
      url = "https://" + url;
    }
    // temple string writing stayle used here below
    lestItem += `<li>
                      <a href='${url}' target='_blank'>
                      ${leads[i]}
                      </a>
                </li>`;
  }
  ulEl.innerHTML = lestItem;
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);

  console.log(
    myLeads,
    "this is the array after pushing the value in the local storage",
  );
});

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete All";
deleteBtn.style.backgroundColor = "red";
deleteBtn.style.color = "white";
const contaner = document.getElementById("contaner");
contaner.append(deleteBtn);
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

saveBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
