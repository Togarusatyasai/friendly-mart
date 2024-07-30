import React from "react";
import "./Login.css"
const Login =()=>{
    return(
        <>
        <form action="">
        <h2>Login in to your account</h2>

        <label for="">User Name</label><br/>
        <input type="text" name="name/Email" placeholder="Enter your name/Email"/><br/>
        <label for="">Password</label><br/>
        <input type="password" name="password" placeholder="enter your password" required/><br/>
        <a href="#" >Forgot your password</a><br/>
        <button>LOGIN</button>
        <br/>
        <br/>
        <h2>Don't have an account?</h2><br/>
        <button>sign up</button>

    </form>
    </>
    );
}
export default Login;