import React, { useState, useEffect } from 'react'
import DeleteUser from './DeleteUser';

export default function Users() { 
  const [apiResponse, setApiResponse] = useState("");
  const [users, setUsers] = useState("");

  useEffect(() => {
    const getUsers = () => {
      return fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(res => setApiResponse(res))   
    };
    getUsers();
  }, []);

  useEffect(() => setUsers(apiResponse), [apiResponse]);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const handleAddUserForm = (userFormSubmit) => {
    userFormSubmit.preventDefault();
    const newUser = {
      id: id,
      name: name,
      email: email
    };
    fetch("http://localhost:3000/users/add", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    setUsers(() => [...users, newUser])
    setId("");
    setName("");
    setEmail("");
  }

  const handleDeleteUserForm = deleteIdSubmit => {
    deleteIdSubmit.preventDefault();
    const newUsers = users.filter(user => user.id !== deleteId);
    setUsers(newUsers);
    setDeleteId("");
  }

  return (
    <section className="user-management">
      <h2>User Management</h2>
      <ul id="users-list">
        {users && users.map(user => 
          <li key={user.id}>
            User ID: {user.id}<br/>
            Name: {user.name}<br/>
            Email: {user.email}
          </li>
        )}
      </ul>
      <div>
        <h3>Add User</h3>
        <form id="add-user" action="#" onSubmit={handleAddUserForm}>
          <fieldset>
          <label>User ID&nbsp;
              <input 
                type="number" 
                id="add-user-id"
                min="0"
                value={id}
                onChange={(enterId) => setId(enterId.target.value)} 
                required/>
            </label><br/><br/>
            <label>Name&nbsp;
              <input 
                type="text" 
                id="add-user-name"
                value={name}
                onChange={(enterName) => setName(enterName.target.value)}
                required />
            </label><br/><br/>
            <label>Email&nbsp;
              <input 
                type="email" 
                id="add-user-email"
                value={email}
                onChange={(enterEmail) => setEmail(enterEmail.target.value)}
                required />
            </label>
          </fieldset>
          <input type="submit" value="Add" />
        </form>
      </div>
      <div>
        <DeleteUser deleteId={deleteId} setDeleteId={setDeleteId} handleDeleteUserForm={handleDeleteUserForm}/>
      </div>
    </section>
  )
}
