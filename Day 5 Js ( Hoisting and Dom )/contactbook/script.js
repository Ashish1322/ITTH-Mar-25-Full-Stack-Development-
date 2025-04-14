var contacts = [];

function addToContact(name, phone) {
  let contact = {
    name: name,
    phone: phone,
  };
  contacts.push(contact);
  displayAllContactsOnScreen();

  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function deleteContact(index) {
  contacts.splice(index, 1);
  displayAllContactsOnScreen();
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function displayAllContactsOnScreen() {
  document.getElementById("contacts").innerHTML = "";
  for (let index = 0; index < contacts.length; index++) {
    let name = contacts[index]["name"];
    let phone = contacts[index]["phone"];

    /* 
    Create the following structure with js
    <tr>
        <td>1</td>
        <td>Ashish</td>
        <td>343434</td>
        <td>
            <button>delete</button>
        </td>
    </tr>
    */

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = index + 1;
    let td2 = document.createElement("td");
    td2.innerText = name;
    let td3 = document.createElement("td");
    td3.innerText = phone;
    let td4 = document.createElement("td");
    let button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click", () => {
      deleteContact(index);
    });
    td4.appendChild(button);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    document.getElementById("contacts").appendChild(tr);
  }
}

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault(); // stop the html form from reload
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  addToContact(name, phone);
});

window.addEventListener("load", () => {
  let stored_contacts = localStorage.getItem("contacts");
  if (stored_contacts) {
    contacts = JSON.parse(stored_contacts);
    displayAllContactsOnScreen();
  }
});
