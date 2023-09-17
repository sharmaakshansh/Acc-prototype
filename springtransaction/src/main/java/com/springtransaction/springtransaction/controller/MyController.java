package com.springtransaction.springtransaction.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.springtransaction.services.TransactionService;
import com.springtransaction.springtransaction.entities.Transaction;



@RestController
public class MyController {
	

	private  TransactionService transactionservice;

    @Autowired
    public MyController(TransactionService transactionservice) {
        this.transactionservice = transactionservice;
    }
	
	@GetMapping("/transaction")
	public List<Transaction> getTransaction()
	{
		return this.transactionservice.getTransaction();
	}
	
	@GetMapping("/transaction/{sellersId}")
	public Transaction getTransaction(@PathVariable String sellersId)
	{
		return this.transactionservice.getTransaction(Long.parseLong(sellersId));
	}
	
	@PostMapping("/transaction")
	public Transaction addTransaction(@RequestBody Transaction transaction)
	{
		return this.transactionservice.addTransaction(transaction);
	}
	
	@PutMapping("/transaction")
	public Transaction updateTransaction(@RequestBody Transaction transaction)
		{
			return this.transactionservice.updateTransaction(transaction);
		}
	
	@DeleteMapping("/transaction/{sellersId}")
	public ResponseEntity<HttpStatus> deleteTransaction(@PathVariable String sellersId)
	{
		try {
			this.transactionservice.deleteTransaction(Long.parseLong(sellersId));
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	

}