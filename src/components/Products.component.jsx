import React from "react";
import API from "../api";
import uniqid from "uniqid";
import DisplayProducts from "./DisplayProducts";
import Create from "./Create";
import "./product.css"
// import We from "../image/We"

class Products extends React.Component {
  state = {
    data: [],
    value: "",
    valued:"",
    valuev:"",
    valuea:"",
    valuec:"",
    valuer:"",
    updatedValue: "",
    isDisabled: false,
    isLoading: false,
    error: "",
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await API.get("/products");
    console.log(response);

    const data = response.data;
    this.setState({ data: data, isLoading: false });
    console.log(this.state.data);
  }

  // delete = async (id) => {
  //   try {
  //     await API.delete(`/products/${id}`);

  //     return this.setState({
  //       data: [...this.state.data].filter((el) => el.id != id),
  //     });
  //   } catch (e) {}
  // };

  create = async (e) => {         
    e.preventDefault();
   
      if(this.state.value.length < 2){
        return alert("your name is incorrect")
      }
      if(this.state.valued.length < 6){
        return alert("your address is incorrect")
      } 
      if(this.state.valuec.length < 4){
        return alert("your country is incorrect")
      } 
      if(this.state.valuea.length !== 10){
        return alert("your phone is incorrect")
      } 
      if(this.state.valuer.length < 4){
        return alert("your restutant is incorrect")
      }
      
       


      try {
        this.setState({ isDisabled: true, isLoading: true });
        const newItem = {
          id: uniqid(),
          name: this.state.value,
          address: this.state.valued,
          country: this.state.valuec,
          phone: this.state.valuea,
          resturant: this.state.valuer
          ,
          
          // avatar: "https://lh3.googleusercontent.com/proxy/1RM9vl0spDlg103dNmj09R20T-WHRX9ACA4v9IZXj56qbjLHDuSoGt2HaP8XTai7Djq4x3dmavz4mlmFgtSMp5rXl4akJCMOH3grYJpVXQu_Kdtqhq8Z"
          //  avatar: 
          //   "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MjQ5OTc4ODk1/chuck-norris-15720761-1-402.jpg",
        
        }
        const { data } = await API.post("/products/", newItem);
        return this.setState({
          data: [...this.state.data, data],
          value: "",
          valued:"",
          valuea:"",
          valuer:"",
          valuec:"",
          isDisabled: false,
          isLoading: false,
        });
      } catch (err) {}

    }
  //   if (this.state.value.length > 3 & this.state.valued.length > 4 & this.state.valuec.length > 5 & this.state.valuer.length > 5 & this.state.valuea.length > 9 ) {
  //     try {
  //       this.setState({ isDisabled: true, isLoading: true });
  //       const newItem = {
  //         id: uniqid(),
  //         name: this.state.value,
  //         address: this.state.valued,
  //         country: this.state.valuec,
  //         phone: this.state.valuea,
  //         resturant: this.state.valuer
  //         ,
          
  //         // avatar: "https://lh3.googleusercontent.com/proxy/1RM9vl0spDlg103dNmj09R20T-WHRX9ACA4v9IZXj56qbjLHDuSoGt2HaP8XTai7Djq4x3dmavz4mlmFgtSMp5rXl4akJCMOH3grYJpVXQu_Kdtqhq8Z"
  //         //  avatar: 
  //         //   "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MjQ5OTc4ODk1/chuck-norris-15720761-1-402.jpg",
        
  //       }
  //       const { data } = await API.post("/products/", newItem);
  //       return this.setState({
  //         data: [...this.state.data, data],
  //         value: "",
  //         valued:"",
  //         valuea:"",
  //         valuer:"",
  //         valuec:"",
  //         isDisabled: false,
  //         isLoading: false,
  //       });
  //     } catch (err) {}
  //   } else {
  //     this.setState({ error: alert(errorr())});
  //   }
  // }; 
  
  
  ///////////////////////////////////////////////////////////////
  // update = async (id) => {
  //   const updatedItem = {
  //     name: this.state.updatedValue,
  //   };
  //   const { data } = await API.put(`/products/${id}`, updatedItem);
  //   this.setState((prevState) => {
  //     let updatedItem = prevState.data.find((x) => x.id === id);
  //     Object.assign(updatedItem, data);
  //     return { data: prevState.data, updatedValue: "" };
  //   });
  // };

  handleOnChange = (e) => {

    this.setState({ value: e.target.value });
  };
  handleOnChanged = (e) => {

    this.setState({ valued: e.target.value });
  };
  // handleOnChangev = (e) => {

  //   this.setState({ valuev: e.target.value });
  // };
  handleOnChangeA = (e) => {
    // console.log(e.target.valuea);

    this.setState({ valuea: e.target.value });
  };
  handleOnChangec = (e) => {

    this.setState({ valuec: e.target.value });
  };
  handleOnChanger = (e) => {

    this.setState({ valuer: e.target.value });
  };

  handleUpdatedOnChange = (e) => {
    this.setState({ updatedValue: e.target.value });
  };

  render() {
    
    const spinner = () => {
      return (
        <div>
          <h2>LOADING!!!! BE PATIENT!!!!</h2>
        </div>
      );
    };
    const {
      data,
      value,
      valued,
      updatedValue,
      isDisabled,
      isLoading,
      error,
    } = this.state;



    return (
      <>
        <div className="container">
          {/* <DisplayProducts
            data={data}
            updatedValue={updatedValue}
            onChange={this.handleUpdatedOnChange}
            update={this.update}
            deleteItem={this.delete}
          /> */}
          <Create
            isDisabled={isDisabled}
            value={value}
            onChange={this.handleOnChange}
            create={this.create}
            valued={this.state.valued}
            onChanged={this.handleOnChanged}

            // valuev={this.state.valuev}
            // onChangedv={this.handleOnChangev}

            valuea={this.state.valuea}
            onChangeA={this.handleOnChangeA}

            valuec={this.state.valuec}
            onChangec={this.handleOnChangec}

            valuer={this.state.valuer}
            onChanger={this.handleOnChanger}



          />
          {isLoading && spinner()}
        </div>

        {error}
      </>
    );
  }
}
export default Products;


// this.state.value.length > 3 & this.state.valued.length > 3 & this.state.valuev.length > 6 & this.state.valuev.length < 14
//       &this.state.valuea.length ==2 & this.state.valuec.length >4 &this.state.valuer.length > 2)
// "please enter your correct informaion"