import React , {useState , useEffect}from 'react'
import style from "./auth.module.css"

import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedIcon from '@mui/icons-material/Verified';
import ErrorIcon from '@mui/icons-material/Error';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { pink , green, red} from '@mui/material/colors';

export function Getemail(){
  const [email, setemail] = useState("")
  const formsubmit = (e)=>{
    e.preventDefault()
    console.log({email})
    setemail("")
  }
  return(
    <main className={style.authcompo_container}>
     <form className={style.forgetpass_form} onSubmit={formsubmit}>
      <header>
        <h1>dont'wory, <br /> enter your gmail and we'll send you a verification code</h1>
        <p>check email for code <br />email must be a valid email </p>
      </header>
     <div className={style.inputs}>
            <MailIcon />
            <input type="text" placeholder='enter your email'
            value={email} onChange={(e)=>{setemail(e.target.value)}}/>
          </div>
          <button className={style.auth_btn}>continue </button>
      </form>
    </main>
  )
}


export function Getotp(){
  const [otpfirst, setotpfirst] = useState("")
  const [otpsecond, setotpsecond] = useState("")
  const [otpthird, setotpthird] = useState("")
  const [otpfourth, setotpfourth] = useState("")

  
  const formsubmit = (e)=>{
    e.preventDefault()
    console.log({otpfirst, otpsecond , otpthird , otpfourth})
  }
  return(
    <main className={style.authcompo_container}>
     <form className={style.forgetpass_form} onSubmit={formsubmit}>
      <header>
        <h1>Enter your verification code</h1>
      </header>
      <section className={style.otp_input_container}>
      <input type="text" placeholder='0' value={otpfirst} onChange={(e)=>{setotpfirst(e.target.value)}}/>
      <input type="text" placeholder='0' value={otpsecond} onChange={(e)=>{setotpsecond(e.target.value)}}/>
      <input type="text" placeholder='0' value={otpthird} onChange={(e)=>{setotpthird(e.target.value)}}/>
      <input type="text" placeholder='0' value={otpfourth} onChange={(e)=>{setotpfourth(e.target.value)}}/>
      </section>
          <section className={style.otp_footer}>
            <div className={style.timer_otp}><p>03</p><p>:</p><p>56</p> <p>resend code</p></div>
            <div className={style.otp_info}>
              <p>we send verification code on your email <span>legcy***@gmail.com</span>you can check your inbox</p>
              <small>i didn't recived code ? send again</small>
            </div>
          </section>
          <button className={style.auth_btn}>verify</button>
      </form>
    </main>
  )
}

export function Createpassword(){
  const [passtype, setpasstype] = useState("password")
  const [confirmpasstype, setconfirmpasstype] = useState("password")
  const [password, setpassword] = useState("")
  const [confirmpassword, setconfirmpassword] = useState("")
  const formsubmit = (e)=>{
    e.preventDefault()
    console.log({password , confirmpassword})
    setpassword("")
    setconfirmpassword("")
  }
  return(
    <main className={style.authcompo_container}>
    <form className={style.forgetpass_form} onSubmit={formsubmit}>
     <header>
      <h1>create new password</h1>
      <p>your new password is must be diffrent from your last password</p>
     </header>
     <div className={`${style.inputs} ${style.input_password}`}>
            <LockIcon />
            <input type={passtype} placeholder='password' value={password}
            onChange={(e)=>{setpassword(e.target.value)}}/>
            <div className={style.eye_icon} onClick={()=>{{passtype === "password" ? setpasstype("text"): setpasstype("password")}}}>
            {passtype === "password" ? <VisibilityIcon/>: <VisibilityOffIcon />}
            </div>
          </div>
          <div className={`${style.inputs} ${style.input_password}`}>
            <LockIcon />
            <input type={confirmpasstype}  placeholder='confirm password' value={confirmpassword}
            onChange={(e)=>{setconfirmpassword(e.target.value)}}/>
           <div className={style.eye_icon} onClick={()=>{{confirmpasstype === "password" ? setconfirmpasstype("text"): setconfirmpasstype("password")}}}>
              {confirmpasstype === "password" ? <VisibilityIcon/>: <VisibilityOffIcon />}
            </div>
          </div>
         <button className={style.auth_btn}>create</button>
     </form>
   </main>
  )
}


export function Passwordchanged(){
  return(
    <main className={style.authcompo_container}>
    <section className={style.password_chnaged}>
     <header>
     <VerifiedIcon style={{color:green[700],fontSize: 100}}/>
      <h1>pasword updated</h1>
      <p>your new password is must be diffrent from your last password</p>
     </header>
         <button className={style.auth_btn}>log in</button>
     </section>
   </main>
  )
}
export function Passwordchangedfailed(){
  const [result, setresult] = useState("something went wrong please try again later")
  return(
    <main className={style.authcompo_container}>
    <section className={style.password_chnaged}>
     <header>
     {/* sx={{ color: red[500] , fontSize: 100}} */}
     <NewReleasesIcon style={{color:red[600],fontSize: 100}}/>
      <h1>pasword change failed</h1>
      <p>{result}</p>
     </header>
         <button className={style.auth_btn} style={{backgroundColor:red[500]}} onPointerOver={(e)=>{e.target.style.backgroundColor= red[700]}}
         onPointerLeave={(e)=>{e.target.style.backgroundColor= red[500]}}>go back</button>
     </section>
   </main>
  )
}
export default { Getemail , Getotp ,Createpassword ,Passwordchanged , Passwordchangedfailed}