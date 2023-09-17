import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
const AddTransaction = () => {
  useEffect(() => {
    document.title = "Add Transaction";
  }, []);

  const [formData, setFormData] = useState({
    sellersId: "",
    sellersName: "",
    sellersFathersName: "",
    phoneNo: "",
    addressOfProperty: "",
    buyersName: "",
    buyersFathersName: "",
    buyersId: "",
    buyersPhone: "",
    title: "",
    description: "",
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can submit the formData to your backend or handle it as needed
    console.log(formData);
    postDatatoServer(formData);
    // Clear the form fields after submission
    setFormData({
      sellersId: "",
      sellersName: "",
      sellersFathersName: "",
      phoneNo: "",
      addressOfProperty: "",
      buyersName: "",
      buyersFathersName: "",
      buyersId: "",
      buyersPhone: "",
      title: "",
      description: "",
    });
  };
  //creating function to post data on server
  const postDatatoServer=(formData) =>{
  axios.post(`${base_url}/transaction`,formData).then(
    (response)=>{
     console.log(response);
     console.log("success");
     toast.success("Transaction Added Succesfully");
     setFormData({});
    })
    .catch((error)=>{
    console.log(error);
    console.log("error");
    toast.error("Something went Wrong")
    });
  };

  return (
    <div>
      <h1 className="text-center my-3">Fill Transaction Details</h1>
      <Form onSubmit={handleSubmit}>
  <FormGroup>
    <label htmlFor="sellersId">Seller's ID</label>
    <Input
      type="text"
      placeholder="Enter Seller's ID"
      name="sellersId"
      id="sellersId"
      value={formData.sellersId}
      onChange={(e)=>{
        setFormData({...formData,sellersId:e.target.value})
      }}
    />
  </FormGroup>
  <FormGroup>
    <label htmlFor="sellersName">Seller's Name</label>
    <Input
      type="text"
      placeholder="Enter Seller's Name"
      name="sellersName"
      id="sellersName"
      value={formData.sellersName}
      onChange={(e)=>{
        setFormData({...formData,sellersName:e.target.value})
      }}
    />
  </FormGroup>
  <FormGroup>
    <label htmlFor="sellersFathersName">Seller's Father's Name</label>
    <Input
      type="text"
      placeholder="Enter Seller's Father's Name"
      name="sellersFathersName"
      id="sellersFathersName"
      value={formData.sellersFathersName}
      onChange={(e)=>{
        setFormData({...formData,sellersFathersName:e.target.value})
      }}
    />
  </FormGroup>
  <FormGroup>
    <label htmlFor="phoneNo">Phone Number</label>
    <Input
      type="text"
      placeholder="Enter Phone Number"
      name="phoneNo"
      id="phoneNo"
      value={formData.phoneNo}
      onChange={(e)=>{
        setFormData({...formData,phoneNo:e.target.value})
      }}
    />
  </FormGroup>
  <FormGroup>
    <label htmlFor="addressOfProperty">Address of Property</label>
    <Input
      type="text"
      placeholder="Enter Address of Property"
      name="addressOfProperty"
      id="addressOfProperty"
      value={formData.addressOfProperty}
      onChange={(e)=>{
        setFormData({...formData,addressOfProperty:e.target.value})
      }}
    />
  </FormGroup>
  <FormGroup>
    <label htmlFor="buyersName">Buyer's Name</label>
    <Input
      type="text"
      placeholder="Enter Buyer's Name"
      name="buyersName"
      id="buyersName"
      value={formData.buyersName}
      onChange={(e)=>{
        setFormData({...formData,buyersName:e.target.value})
      }}
    />
  </FormGroup>
  <FormGroup>
    <label htmlFor="buyersFathersName">Buyer's Father's Name</label>
    <Input
      type="text"
      placeholder="Enter Buyer's Father's Name"
      name="buyersFathersName"
      id="buyersFathersName"
      value={formData.buyersFathersName}
      onChange={(e)=>{
        setFormData({...formData,buyersFathersName:e.target.value})
      }}
    />
  </FormGroup>
  <FormGroup>
    <label htmlFor="buyersId">Buyer's ID</label>
    <Input
      type="text"
      placeholder="Enter Buyer's ID"
      name="buyersId"
      id="buyersId"
      value={formData.buyersId}
      onChange={(e)=>{
        setFormData({...formData,buyersId:e.target.value})
      }}
    />
  </FormGroup>
  <FormGroup>
    <label htmlFor="buyersPhone">Buyer's Phone</label>
    <Input
      type="text"
      placeholder="Enter Buyer's Phone"
      name="buyersPhone"
      id="buyersPhone"
      value={formData.buyersPhone}
      onChange={(e)=>{
        setFormData({...formData,buyersPhone:e.target.value})
      }}
    />
  </FormGroup>
  <Container className="text-center">
    <Button color="success mr-2" type="submit">
      Add Transaction
    </Button>
    <Button color="warning ml-2"  type="reset" >
      Clear
    </Button>
  </Container>
</Form>

    </div>
  );
};

export default AddTransaction;
