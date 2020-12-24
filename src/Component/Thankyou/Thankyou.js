import React, { useState,useEffect } from "react";
import styles from "./Thankyou.module.scss";
import {useHistory,useLocation} from 'react-router-dom';
import { useFetch } from 'use-http';

function Thankyou() {
  const history = useHistory();
  const location = useLocation();
  const name = location.state.name;
  const regNo = location.state.regNo;
  const { get, response } = useFetch(process.env.REACT_APP_SERVER_BASE_URL);
  const [values, setValues] = useState('');
  
  useEffect(() => {
		if(sessionStorage.getItem('formSubmit')){
			console.log('session exist');
			setValues(JSON.parse(sessionStorage.getItem('formSubmit')));
		}else{
			console.log('session not exist');
			const loadTOUpdate = async () => {
				const regNoWithDash = regNo.replace(/\//g, '-');
				const result = await get(`/pendings/${regNoWithDash}`)
				if (response.ok) setValues(result)
			}
			loadTOUpdate();
		}
  }, []);
	
  const onUpdate =  () =>{
	  history.push('/register',{regNo:regNo,update:values});
  }

  return (
    <div className="container text-center" >
      <div className={`${styles.wrapCenter} row justify-content-center align-content-center`} >
        <div className="col ">
          <h2>Hello, {name}</h2>
          <h4>THANKYOU FOR BEING WITH CSUP</h4>
          <h5>Your request reviewing by Admin</h5>
		  <h6 className={`${styles.innertext}`}>To update your details click the Update button</h6>
          <form className={`${styles.innerclass}`}>
            <input className="btn btn-primary" type="Submit" value="Update" onClick={onUpdate} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Thankyou;
