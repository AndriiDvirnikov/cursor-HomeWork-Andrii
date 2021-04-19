import React from 'react';
import maleImg from "../img/male.png";
import femaleImg from "../img/female.png";


export default function Contact({props}) {
console.log (props.gender)
  function isGender(gender) {
        if (gender && gender === "male"){
          return <img className="gender-icon" src={maleImg} alt="male" ></img>;
          } else if (gender && gender === "female") {
            return <img className="gender-icon" src={femaleImg} alt="female" ></img>;
        
    }}
        

    return(
        <div className="contact_hold">
           
           <div className="name">{props.firstName} {props.lastName}</div>
           <div className="phone">{props.phone}</div>
           {props.gender ? isGender(props.gender) : <div className="gender-icon"></div>}
        </div>

    )
}