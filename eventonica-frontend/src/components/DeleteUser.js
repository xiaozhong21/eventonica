import React from 'react'

export default function DeleteUser({deleteId, setDeleteId, handleDeleteUserForm}) {
  return (
    <div>
      <h3>Delete User</h3>
      <form id="delete-user" action="#" onSubmit={handleDeleteUserForm}>
        <fieldset>
          <label>User ID&nbsp;
            <input 
              type="number" 
              id="delete-user-id"
              min="0"
              value={deleteId}
              onChange={(e) => setDeleteId(e.target.value)} />
          </label>
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  )
}
