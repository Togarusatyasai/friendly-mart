import React from "react";
import "./Signup.css"
const Signup= ()=>{
    
    return(
        <>
        <form action="">
        <h3>Add User</h3>
        <label for="">User Role</label><br/>
        <select name="" id="">
            <option value="Select">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
        </select> <br/>
        <label for="">First Name</label><br/>
        <input type="text" name="name"/><br/>
        <label for="">Last Name</label><br/>
        <input type="text" name="name"/><br/>
        <label for="">Email id</label><br/>
        <input type="text" name="Email"/><br/>
        <label for="">Mobile No</label><br/>
        <input type="tel" name="tel" /><br/>
        <label for="">Password</label><br/>
        <input type="password" name="password" required/><br/>
        <label for="">Confirm Password</label><br/>
        <input type="Confirm password" name="Confirm password"/><br/><br/>
        <button>Create Account</button>
        </form>
        
        </>
    );
}
export default Signup;