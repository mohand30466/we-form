import React from "react";
import API from "../api";
import "./getdata.css";

class Getdata extends React.Component {
  state = { data: [], num: 0 };

  async componentDidMount() {
    const res = await API.get("./products");
    this.setState({ data: res.data });
    console.log(this.state.data);
  }

  render() {
    return (
      <div>
        <h1>Wellcome to employe data page</h1>

        <div className="datacontainer">
          {this.state.data.map((db) => {
            return (
              <div key={db.id} className="card">
              
                  
                  
              
                <div className="infoName">
                  {/* <span>{db.id}:</span> */}
                  {db.name}
                </div>
                <div className="info">
                  <span>PHONE:</span>
                  {db.phone}
                </div>

                <div className="info">
                  <span>COUNTRY:</span>
                  {db.country}
                </div>
                <div className="info">
                  <span>ADDRESS:</span>
                  {db.address}
                </div>
                <div className="info">
                  <span>RESTURANT:</span>
                  {db.resturant}
                </div>
                <div className="dlt">
                  <img className="iimg" src="https://www.urbanlivingfestival.com/media/1259/wewashlogo.jpg?anchor=center&mode=crop&width=220&height=160&rnd=132431017940000000"></img>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Getdata;
