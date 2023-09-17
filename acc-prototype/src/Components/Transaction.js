import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container
} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Transaction = ({ transaction }) => {
  const deleteTransaction=(id)=>{
    axios.delete(`${base_url}/transaction/$(id)`).then(
      (response)=>{
        toast.success("Transaction Deleted")
      },
      (error)=>{
        toast.error("Transaction not deleted")
      }
    )
  }
  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold">
          Seller's Name: {transaction.sellersName}
        </CardSubtitle>
        <CardSubtitle className="font-weight-bold">
          Buyer's Name: {transaction.buyersName}
        </CardSubtitle>
        <CardText>Seller's ID: {transaction.sellersId}</CardText>
        <CardText>Seller's Father's Name: {transaction.sellersFathersName}</CardText>
        <CardText>Phone Number: {transaction.phoneNo}</CardText>
        <CardText>Address of Property: {transaction.addressOfProperty}</CardText>
        <CardText>Buyer's ID: {transaction.buyersId}</CardText>
        <CardText>Buyer's Father's Name: {transaction.buyersFathersName}</CardText>
        <CardText>Buyer's Phone: {transaction.buyersPhone}</CardText>

        <Container className="text-center">
          <Button color="danger" onClick={()=>
          deleteTransaction(transaction.sellersId)
          }>Delete</Button>
          <Button color="warning">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
}

export default Transaction;
