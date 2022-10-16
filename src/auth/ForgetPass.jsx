import React from 'react'
import { Createpassword, Getemail, Getotp, Passwordchanged , Passwordchangedfailed } from "./Authcompo.jsx"

const ForgetPass = () => {
  return (
    <main>
        <Getemail />
        <Getotp />
        <Createpassword />
        <Passwordchanged />
        <Passwordchangedfailed />
    </main>
  )
}

export default ForgetPass