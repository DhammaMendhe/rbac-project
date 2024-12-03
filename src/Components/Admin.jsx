import React from 'react'
import Allusers from './admin/Allusers'

export default function 
() {
  return (
    <div>
        <p>this is admin</p>
        <p className="border"> this is User</p>
      <form action="">

        <label htmlFor="name"> email</label>
        <input type="text" placeholder="enter email here" />

        <label htmlFor="name">password</label>
        <input type="text" placeholder="enter password here" />

        <label htmlFor="name"> confirm password</label>
        <input type="text" placeholder="enter confirm password here" />
      

      <div>
        <button><input type="submit" /></button>
      </div>
      </form>
        <Allusers/>
    </div>
  )
}
