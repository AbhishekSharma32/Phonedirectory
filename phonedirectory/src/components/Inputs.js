import React, { useRef } from 'react'
import {store} from "../models/store";
import { contactaction } from '../action/contactaction';
export const Input=()=>{
    const firstname=useRef("");
    const lastname=useRef("");
    const officenumber=useRef(0);
    const residencenumber=useRef(0);
    const city=useRef("");
    const country=useRef("");
    const street=useRef("");
    const add=()=>{
        const data={
         "firstname": firstname.current.value,
         "lastname": lastname.current.value,
        "officenumber": officenumber.current.value,
            "residencenumber": residencenumber.current.value,
             "city": city.current.value,
              "country": country.current.value,
               "street":street.current.value,
        }
        store.dispatch(contactaction(data,"ADD"));
    }
    return (
        <>
        <div className="form-group">
            <label> First Name</label>
            <input className="form-control" type="text" placeholder="Type FirstName" ref={firstname}/>
        </div>
          <div className="form-group">
            <label> Last Name</label>
            <input className="form-control" type="text" placeholder="Type Last Name" ref={ lastname}/>
        </div>
          <div className="form-group">
            <label> Office Number</label>
            <input className="form-control" type="text" placeholder="Type OfficeNumber" ref={officenumber}/>
        </div>
          <div className="form-group">
            <label> Residence Number</label>
            <input className="form-control" type="text" placeholder="Type ResidenceNumber" ref={residencenumber}/>
        </div>
          <div className="form-group">
            <label> City</label>
            <input   className="form-control" type="text" placeholder="Type City" ref={city }/>
        </div>
          <div className="form-group">
            <label> Country</label>
            <input  className="form-control"  type="text" placeholder="Type Country" ref={country}/>
        </div>
          <div className="form-group">
            <label> Street</label>
            <input   className="form-control"  type="text" placeholder="Type Street" ref={street}/>
        </div>
          <div>
              <button className="btn btn-primary"> Add</button>
          </div>
        </>
    )


}