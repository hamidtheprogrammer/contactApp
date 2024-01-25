import { useState } from "react";
import Contact from "./Contact";

function ManageContact() {
  const [id, setId] = useState(1);
  const contact1 = new Contact(1, "Hamid", "2037365");
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    id: "",
    name: "",
    number: "",
  });

  function addContact() {
    setNewContact({ ...newContact, id: id });
    setContacts([...contacts, newContact]);
    setId((id) => id + 1);
  }

  function editContact() {}

  function deleteContact(event) {
    const id = event.target.getAttribute("keyid");

    const newfilteredList = contacts.filter((contact) => {
      return contact.id != id;
    });
    setContacts(newfilteredList);
  }

  function searchContact() {}

  function holdNewContactName(event) {
    setNewContact({ ...newContact, name: event.target.value });
  }

  function holdNewContactNumber(event) {
    setNewContact({ ...newContact, number: event.target.value });
  }

  return (
    <>
      <div className="contact-page">
        <header>
          <h1>Contacts</h1>
          <button>+</button>
        </header>
        <input type="text" />
        <div className="contact-list">
          <ul>
            {contacts.map((contact) => {
              return (
                <li onClick={deleteContact} key={contact.id} keyid={contact.id}>
                  {contact.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="addContact-page">
        <button onClick={addContact}>save</button>
        <input type="text" placeholder="name" onChange={holdNewContactName} />
        <input
          type="text"
          placeholder="number"
          onChange={holdNewContactNumber}
        />
      </div>
    </>
  );
}

export default ManageContact;
