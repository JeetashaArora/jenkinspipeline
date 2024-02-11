import Input from "./Input"
import Button from "./Button"
import './Header.css'
import { useState } from "react"
import {Link, Navigate} from 'react-router-dom'
import {signInWithGooglePopup,createuserdocfromAuth,userDocRef, signinAuthUserWithEmailAndPassword} from './utils/firebase'
import HomePage from "./routes/HomePage"
import { useContext } from "react"//Because we have to make use of context so we need to import this hook 
import {UserContext} from "./context/user.context"


function Login() {
   const {setuser}=useContext(UserContext)
   const userlogGoogle = async() =>
   {
    const {user} =await signInWithGooglePopup()
    const userDocRef= await createuserdocfromAuth(user)
   }

  const [contact, setcontact] =useState({
    email:'',
    password:''
  })
   const {email,password}= contact
   console.log(contact)
   async function handleClick(event)
  {
    const{setuser} =useContext(user)
    try{
    const {user} = await signinAuthUserWithEmailAndPassword(email,password)
    setuser(user)
    } 
    catch(error){
    console.log('error in login', error.message)
    }
  }
  function handlepass(event)
  {
    const value =event.target.value
    const name =event.target.name
    
     setcontact( (prevalue)=>
     {
      return{
        ...prevalue,
        [name]:value
    }
     })
  }
  return (
    <div className="header">
      <Input
        name = 'email'
        type='email'
        placeholder='email'
        onChange ={handlepass}

      />
      <br></br>
      <Input
        name= 'password'
        type='password'
        placeholder='password'
        onChange ={handlepass}
        />
      <br></br>
      <button onClick={handleClick}>
        Login in
      </button>
      <br></br>
<button onClick ={userlogGoogle}>
  Login with Google
  </button>      
      
      <br></br>
  

<br>

</br>
      <Link to= '/signup'>
        Signup Instead
      </Link>

    </div>
)}
export default Login