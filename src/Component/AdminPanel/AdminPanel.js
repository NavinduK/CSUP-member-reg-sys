import React from "react";
import Navbar from "./Navbar";

const AdminPanel = () => {
    const cardsArray = [];

    let cards = ()=>{
        for(var i = 1; i<8; i++){
            cardsArray.push(
            <div className="card mb-2">
                <div className="card-header p-0"  style={{cursor:'pointer',backgroundColor:'#fff'}} id={`h${i}`}>
                    <div 
                        className="justify-content-between"
                        style={{padding:'.75rem 1.25rem',display:'flex'}}
                        role="button"
                        data-toggle="collapse"
                        data-target={`#c${i}`}
                        aria-expanded="false"
                        aria-controls={`c${i}`}>
                            <h5 className="mb-0" >Member Name {`${i}`}</h5>
                            <p className="mb-0">Date : Time</p>
                    </div>
                </div>
                <div
                    id={`c${i}`}
                    className="collapse"
                    aria-labelledby={`h${i}`}
                    data-parent="#accordion">
                    <div className="card-body">
                        Member Details
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
        )
        }
        return cardsArray;
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
