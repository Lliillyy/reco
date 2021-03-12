import React from "react";
import './Login.css'
import axios from "axios";

class ChangePWD extends React.Component {
  constructor(props) {
    super(props);
  }

  change_pwd() {
    let user = localStorage.getItem('userInfo');
    user = JSON.parse(user);
    let new_pwd = document.getElementById("new_pwd").value;
    let User = {
      "username": user.username,
      "password": new_pwd,
      "signature": user.signature,
    };
    axios.patch("http://localhost:5000/users/changePassword/:userID", User);
    
  }

  render() {
    return (
      <div>
        <input type="password" className="change" id="new_pwd" placeholder="Enter New Password" />
        <button className="button"
          onClick={() => this.change_pwd()}>
          submit
        </button>
      </div>
    )
  }

}
export default ChangePWD;
