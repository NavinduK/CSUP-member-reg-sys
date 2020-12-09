import React,{useEffect,useState} from "react";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
import useFetch from "use-http";

const AdminPanel = () => {
	const { get, response } = useFetch(process.env.REACT_APP_SERVER_BASE_URL);
	const history = useHistory();
	const [pendings, setPendings] = useState([])
	
	useEffect(() => { 
		loadPendings()
		console.log(pendings)
    },[]);
	
	const loadPendings = async () => {
		
		const result = await get('/pendings')
		if (response.ok) setPendings(result)
	}

    let cards = ()=>{
		return (
            pendings?.map((item,i) => (
				<div key={i} className="card mb-2">
					<div className="card-header p-0"  style={{cursor:'pointer',backgroundColor:'#fff'}} id={`h${i}`}>
						<div 
							className="justify-content-between"
							style={{padding:'.75rem 1.25rem',display:'flex'}}
							role="button"
							data-toggle="collapse"
							data-target={`#c${i}`}
							aria-expanded="false"
							aria-controls={`c${i}`}>
								<h5 className="mb-0" >{item.fname} {item.lname}</h5>
								<p className="mb-0">{item.regNo}</p>
						</div>
					</div>
					<div
						id={`c${i}`}
						className="collapse"
						aria-labelledby={`h${i}`}
						data-parent="#accordion">
						<div className="card-body">
							Email : {item.email}<br/>
							Phone Number : {item.phone}<br/>
							Skills : {item.skills}<br/>
							<div style={{float:'right'}} className="btn-toolbar" role="toolbar">
								<div className="btn-group mr-2" role="group">
									<button type="button" className="btn btn-secondary">Accept</button>
								</div>
								<div className="btn-group mr-2" role="group">
									<button type="button" className="btn btn-secondary">Reject</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			))
        )
    }

    return (
        <div>
            <Navbar/>
            <div  className="text-center">
                <h5 className="mt-5 mb-4" >Pending Requests</h5>
            </div>
            <div className="container" id="accordion">
                {cards()}
            </div>
        </div>
    );
};

export default AdminPanel;
