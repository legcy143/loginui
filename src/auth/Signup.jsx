import React, { useState, useEffect } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';

import style from "./auth.module.css"
import { Link } from 'react-router-dom';

const Signup = () => {
  const [passtype, setpasstype] = useState("password")
  const [confirmpasstype, setconfirmpasstype] = useState("password")
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmpassword, setconfirmpassword] = useState("")
  const [tandc, settandc] = useState(false)
  const [validation, setvalidation] = useState(false)
  const [autherror, setautherror] = useState("")

  function validname() {
    if (username.length > 5) {
      console.log("not valid")
      validemail()
    }
    else {
      setvalidation(false)
      setautherror("name is to short")
    }
  }
  function validemail() {
  const regemail = /@gmail.com/
    if (email.length >= 5) { 
      validpassword()
    }
    else {
      setautherror("email not valid , please enter valid email")
      setvalidation(false)
    }
  }
  function validpassword() { 
    if (password === confirmpassword) {
      setvalidation(true)
      setautherror("")
    }
    else{
      setautherror("password and confirm password must be same"),
       setvalidation(false)}
  }

  const funcvalidation = () => {
    if (username.length > 0 && email.length > 0 && password.length > 0 && confirmpassword.length > 0 && tandc === true) {
      validname()
    }
    else {
      setautherror("all fields required")
      setvalidation(false)
    }
  }

  const finaldata = { username, email, password, confirmpassword, tandc }
  useEffect(() => {
    funcvalidation()
  }, [finaldata])


  const formsubmit = (e) => {
    e.preventDefault()
    if (validation === true) {
      console.log("fine your data is =>", finaldata)
      setusername(""); setemail(""); setpassword("");
      setconfirmpassword(""), settandc(false), setautherror("")
    }
  }
  return (
    <main className={style.main_container}>
      <main className={style.auth_container}>
        <section className={style.container_top}>
          <img src="/auth_img.svg" alt="img" />
          <form className={style.auth_form} onSubmit={formsubmit}>
            <header>
              <h1>let's get started</h1>
              <p>create account to acess all features</p>
              <span>{autherror}</span>
            </header>
            <div className={style.inputs}>
              <PersonIcon />
              <input type="text" placeholder='enter your name' value={username}
                onChange={(e) => { setusername(e.target.value); }} />
            </div>
            <div className={style.inputs}>
              <MailIcon />
              <input type="text" placeholder='enter your email' value={email}
                onChange={(e) => { setemail(e.target.value) }} />
            </div>
            <div className={`${style.inputs} ${style.input_password}`}>
              <LockIcon />
              <input type={passtype} placeholder='password' value={password}
                onChange={(e) => { setpassword(e.target.value) }} />
              <div className={style.eye_icon} onClick={() => { { passtype === "password" ? setpasstype("text") : setpasstype("password") } }}>
                {passtype === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            <div className={`${style.inputs} ${style.input_password}`}>
              <LockIcon />
              <input type={confirmpasstype} placeholder='confirm password' value={confirmpassword}
                onChange={(e) => { setconfirmpassword(e.target.value) }} />
              <div className={style.eye_icon} onClick={() => { { confirmpasstype === "password" ? setconfirmpasstype("text") : setconfirmpasstype("password") } }}>
                {confirmpasstype === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            <div className={style.tandc}>
              <input type="checkbox" name="tandc" checked={tandc} onChange={(e) => { settandc(e.target.checked); }} />
              <p>agree terms and condition<Link to="">t&c</Link></p>
            </div>
            <button className={style.auth_btn}>Sign up</button>
            <div className={style.switch_method}>already have a account? <Link to="/login">login</Link> </div>
          </form>
        </section>
        <footer>
          <div className={style.or}>  <hr /><span>or</span><hr /> </div>
          <div className={style.login_with}>
            <div><GoogleIcon /> signup with google</div>
            <div><GoogleIcon /> signup with google</div>
            <div><GoogleIcon /> signup with google</div>
          </div>
          <br />
        </footer>
      </main>
    </main>
  )
}

export default Signup