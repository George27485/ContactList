import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState({});

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    }
    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  return (
    <div>
      {contact ? (
        <div>
          <h2>Contact Details</h2>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{contact.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{contact.email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{contact.phone}</td>
              </tr>
              <tr>
                <td>email</td>
                <td>{contact.email}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => setSelectedContactId(null)}>Go Back</button>
        </div>
      ) : null}
    </div>
  );
}


