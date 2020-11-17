import React from "react";
import "./Card.css"
const Card = ({ name, avatar,address,visaId ,Age,country,resturant,id}) => {
  return (
    <>
    <div className="containerCard">
     <span className="tittle">Employer Info <span>{id}</span></span>
      
      <div>Name:<span className="title">{" ",name}</span></div>
      <div>Address:<span className="title">{" ",address}</span></div>
      <div>country:<span className="title">{" ",country}</span></div>

      <div>Visa:<span className="title">{" ",visaId}</span></div>
      <div>Age:<span className="title">{" ",Age}</span></div>
      <div>Resturant:<span className="title">{resturant}</span></div>
      <div>
        <img src={avatar} alt={name} />
      </div>
      </div>
    </>
  );
};
export default Card;
