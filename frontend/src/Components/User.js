import React from "react";
//import { useState } from 'react';
import "./User.css"
import eric from "../eric.jpg"
//import axios from "axios";

function User(){

    let user = localStorage.getItem('userInfo');
    user = JSON.parse(user);
    console.log(user)

    let username = "you have not logged in yet!";
    let signature = "";
    if(localStorage.length != 0){
      username = user.username;
      signature = user.signature;
    }
    console.log(username);

    function logout(){
      localStorage.clear();
    }
    
    return (
      <div className="profile">
        <img src={eric} className="profile_pic" />
        <div className="text">
          <h1 className="username">{username}</h1>
          <h2>{signature}</h2>
          <div className="controlPanel">
            <button className="button2" onClick={() => logout()}>log out</button>
            <a className="button2" href="/changesig">change signature</a>
            <a className="button2" href="/changepwd">change password</a>
          </div>
        </div>
      </div>
    );
}
export default User;
