import React from 'react'

export default function AddUser({id, name, email, setId, setName, setEmail, handleAddUserForm}) {
  return (
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
  )
}