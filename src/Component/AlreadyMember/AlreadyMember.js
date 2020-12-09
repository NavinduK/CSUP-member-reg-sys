import React from 'react'
import styles from "./AlreadyMember.module.scss";
import { useLocation } from "react-router-dom";

function AlreadyMember() {
	const location = useLocation();
    const name = location.state.name;
	
    return (
        <div className="container text-center" >
        <div className={`${styles.wrapCenter} row justify-content-center align-content-center`} >
          <div className="col ">
            <h1>Hello, {name}</h1>
            <h3>You are already a member of CSUP</h3>
              <form className ={`${styles.innerclass}`}>
                  <h4 className ={`${styles.innertext}`}>To update your details click the Update button .....</h4>
              <input className="btn btn-primary" type="Submit" value="Update" />
            </form>
          </div>
        </div>
      </div>
    )
}

export default AlreadyMember;
