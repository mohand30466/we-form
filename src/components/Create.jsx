import React from "react";
import "./Create.css";


const Create = ({
  value,
  onChange,
  isDisabled,
  create,
  
  onChanged,
  valued,
  // valuev,
  // onChangedv,
  valuea,
  onChangeA,
  valuec,
  onChangec,
  valuer,
  onChanger,
}) => {
  return (
    <>
      <div className="titles">
       
        <div className="title"><h1>We Wash</h1> <div className="logo"></div></div>
        <div className="title">The Best App Ever, For Foreign Worker In Isreal</div>
        <br></br>
      </div>
      <div className="create">
      
      {/* <div> */}
        <form action="#">
        
          <div htmlFor="name">Name: </div>
          <input
            className="input"
            type="text"
            id="name"
            placeholder="Please enter your name"
            value={value}
            onChange={onChange}
          />

          <div htmlFor="address">Addrees:</div>
          <input
            className="inputad"
            type="text"
            id="address"
            placeholder="Please enter your address"
            value={valued}
            onChange={onChanged}
          />

          {/* <div
         htmlFor="address">Visa Number:</div
        >
         <input 
         className="inputvn"
          type="text"
          id="name"
          placeholder="please enter your id number"
          value={valuev}
          onChange={onChangedv}
        /> */}

          <div htmlFor="address">Phone</div>
          <input
            className="inputag"
            type="text"
            id="name"
            placeholder="Please enter your phone"
            value={valuea}
            onChange={onChangeA}
          />
          <div htmlFor="address">Country:</div>
          <input
            className="inputco"
            type="text"
            id="name"
            placeholder="Please enter your Country"
            value={valuec}
            onChange={onChangec}
          />
        
          <div htmlFor="address">Resturant:</div>
          <input
            className="inputrs"
            type="text"
            id="name"
            placeholder="In what resturant did you worked"
            value={valuer}
            onChange={onChanger}
          />
          <br></br>
          <br></br>

         
            <input className="submit" disabled={isDisabled} onClick={create} type="submit" />
        
        </form>
        {/* </div> */}
       
      </div>
      
    </>
  );
};
export default Create;
