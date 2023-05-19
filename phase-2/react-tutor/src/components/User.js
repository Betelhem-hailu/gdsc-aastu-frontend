import React from 'react'
import { user } from '../utils/Data';
import {isLoggedIn} from '../utils/Data';

function User() {
  return (
    (isLoggedIn)?
    <div>
      <h1>{user.fullname}</h1>
      <p>{user.email}</p>
    </div>:<></>
  )
}

export default User