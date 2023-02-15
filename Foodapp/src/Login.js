import React from 'react'
import "./App.css";

function Login() {
  return (
    <>
    <div class="container-fluid"/>
        <div class="m-5 h2  text-light fw-bold" style="background-color: rgb(47, 47, 211); color: white;  height: 70px; padding: 20px;"/><div/>
        <div style="{margin: auto; height: 300px; width: 450px; border-radius: 15px; box-shadow: 4px 4px 4px 4px rgb(120, 108, 108);
        padding: 20px;}"/>
              <div class="h1 text-center" id='div3'/>
                <h1>SignUp</h1>
            <div/> <br/> 
            <div class="text-center"/>
            Email : &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; <input type="text" placeholder="Enter Email Id Here"/> <br/> <br/>
            Password : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;<input type="text" id="div1"  placeholder="Enter Password Here" /> <br/> <br/>
           <button type="submit" style="height: 30px; width: 100px; margin-left: 130px;" class="btn btn-primary text-light fw-bold ">Submit</button>
        <div/>
       
        <div/>
    <div/>
    <div/>
    </>
  )
}

export default Login;