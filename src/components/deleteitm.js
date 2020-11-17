import React from "react";
import API from "../api";
import "./deleteitem.css";

class Deleteitems extends React.Component {
  state = { data: [] };

  async componentDidMount() {
    const res = await API.get("./products");
    this.setState({ data: res.data });
    console.log(this.state.data);
  }

 
  Del = async (id)=> {
    try {
      await API.delete(`/products/${id}`);

      return this.setState({
        data: [...this.state.data].filter((el) => el.id != id),
      });
    } catch (e) {}
  };

  render() {
    return (
      <div>
        <h1>Wellcome to employe data page</h1>

        <div className="datacontainer">
          {this.state.data.map((db) => {
            return (
              <div key={db.id} className="card">
                <div className="infoName">{db.name}</div>
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
                <button onClick={() => this.Del(db.id)}>DELETE</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Deleteitems;
