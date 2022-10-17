import React, { useState, useEffect } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';

import style from "./auth.module.css"
import { Link } from 'react-router-dom';

const Login = () => {
  const [passtype, setpasstype] = useState("password")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [validation, setvalidation] = useState(false)
  const [autherror, setautherror] = useState("")


const funcvalidation = () => {
    if (email.length > 0 && password.length > 0) {
      const regemail = /@gmail.com/
      if (regemail.test(email) === true) {
        setvalidation(true)
        setautherror("")
      }
      else{
        setvalidation(false)
        setautherror("please enter valid email")
      }
    }
    else {
      setautherror("all fields required")
      setvalidation(false)
    }
  }

  const finaldata = { email, password}
  useEffect(() => {
    funcvalidation()
  }, [finaldata])


  const formsubmit = (e) => {
    e.preventDefault()
    if (validation === true) {
      console.log("fine your data is =>", finaldata)
       setemail(""); setpassword("");setautherror("")
    }
  }
  return (
    <main className={style.main_container}>
      <main className={style.auth_container}>
        <section className={style.container_top}>
          <img src="/auth_img.svg" alt="img" />
          <form className={style.auth_form} onSubmit={formsubmit}>
            <header>
              <h1>welcom again </h1>
              <p>login to acces you account</p>
              <span>{autherror}</span>
            </header>
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
            <div className={style.tandc}>
              <p><Link to="/forgetpassword">forget password</Link></p>
            </div>
            <button className={style.auth_btn}>log in</button>
            <div className={style.switch_method}>new user ? <Link to="/signup">create account</Link> </div>
          </form>
        </section>
        <footer>
          <div className={style.or}>  <hr /><span>or</span><hr /> </div>
          <div className={style.login_with}>
            <div><GoogleIcon /> login with google</div>
            <div><GoogleIcon /> login with google</div>
            <div><GoogleIcon /> login with google</div>
          </div>
          <br />
        </footer>
      </main>
    </main>
  )
}



export default Login
