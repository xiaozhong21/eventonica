import React, { useState} from 'react'
import DeleteUser from './DeleteUser';

export default function Users() {
  const mockUsers = [
    {
      id:"1",
      name: "Marlin", 
      email: "marlin@gmail.com"
    },
    {
      id: "2",
      name: "Nemo",
      email: "nemo@gmail.com" 
    },
    {
      id: "3",
      name: "Dory",
      email: "dory@gmail.com"  
    }
  ]

  const [users, setUsers] = useState(mockUsers);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [deleteId, setDeleteId] = useState('');

  const handleAddUserForm = (userFormSubmit) => {
    userFormSubmit.preventDefault();
    const newUser = {
      id: id,
      name: name,
      email: email
    }
    setUsers(() => [...users, newUser])
    setId('');
    setName('');
    setEmail('');
  }

  const handleDeleteUserForm = deleteIdSubmit => {
    deleteIdSubmit.preventDefault();
    const newUsers = users.filter(user => user.id !== deleteId);
    setUsers(newUsers);
    setDeleteId('');
  }

  return (
    <div>
      <h2>User Management</h2>
      <ul id="users-list">
        {users.map(user => 
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
    </div>
  )
}