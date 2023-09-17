import React, { useEffect, useState } from 'react';
import Transaction from "./Transaction"; // Import the correct component name
import axios from 'axios';

import { toast } from 'react-toastify';
import base_url from '../api/bootapi';

const AllTransactions = () => {
    useEffect(() => {
        document.title = "All Transactions";
    }, []);
    const getAllTransactionsFromServer =()=>{
        axios.get(`${base_url}/transactions`).then(
            (response) =>{
                console.log(response.data);
                toast.success("Transaction has been loaded");
                setTransactions(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    };
    //calling loading course funtion
    useEffect( ()=>{
        getAllTransactionsFromServer();
    }, []);

    const [transactions, setTransactions] = useState([
        {
            sellersId: 1,
            sellersName: "John Doe",
            sellersFathersName: "Michael Doe",
            phoneNo: "123-456-7890",
            addressOfProperty: "123 Main Street",
            buyersName: "Alice Smith",
            buyersFathersName: "Bob Smith",
            buyersId: "A12345",
            buyersPhone: "987-654-3210"
        },
        {
            sellersId: 2,
            sellersName: "Jane Smith",
            sellersFathersName: "David Smith",
            phoneNo: "456-789-0123",
            addressOfProperty: "456 Elm Street",
            buyersName: "Eve Johnson",
            buyersFathersName: "Frank Johnson",
            buyersId: "B67890",
            buyersPhone: "876-543-2109"
        },
        {
            sellersId: 3,
            sellersName: "Robert Brown",
            sellersFathersName: "William Brown",
            phoneNo: "789-012-3456",
            addressOfProperty: "789 Oak Street",
            buyersName: "Grace Davis",
            buyersFathersName: "Henry Davis",
            buyersId: "C23456",
            buyersPhone: "765-432-1098"
        }
    ]);

    return (
        <div>
            <h1>All Transactions</h1>
            <p>List of Transactions are as follows:</p>

            {transactions.length > 0 ? transactions.map((item, index) => (
                <Transaction key={index} transaction={item} />
            )) : "No Transactions available"}
        </div>
    );
};

export default AllTransactions;
