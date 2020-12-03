import React,{useState} from "react";
import styles from './Main.module.scss';
import { useFetch } from 'use-http';
import { useHistory } from "react-router-dom";
import { useForm} from "react-hook-form";

const Main = () => {
	const { post, response } = useFetch("http://localhost:3001/csup");
	const history = useHistory();
	const [regNo, setRegNo] = useState()
	
	let value = {
        	regNo: ''
    	}

	const { handleSubmit, register, errors } = useForm({
        	mode: "onBlur",
        	defaultValues: value
    	});

	const submitRegNo = async (event) => {
		console.log(event)
		await
		post('/login/admin', event).then(result => {
			if (response.ok) {
				history.push('/adminlogin');
			} else {
				history.push('/register');
			}

		}).catch(err => {
			console.log('error', err);
		})
	};
	
	return (
		<div className="container text-center" >
		  <div className={`${styles.wrapCenter} row justify-content-center align-content-center`} >
			<div className="col ">
			  <h3>Login</h3>
			  <form onSubmit={handleSubmit(submitRegNo)}>
				<input
				  type="text"
				  name="regNo"
				  className={`${styles.inputCenter} form-control`}
				  placeholder="Your Registration Number (Eg: S/XX/XXX)"
				  aria-invalid={errors.email ? "true" : "false"}
				  ref={register({
					required: "email is required"
				  })}
				/>
				<input className="btn btn-primary" type="submit" value="Submit" />
			  </form>
			</div>
		  </div>
		</div>
	  );
};

export default Main;
