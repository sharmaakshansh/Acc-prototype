package com.springtransaction.services;

import java.util.List;

import com.springtransaction.springtransaction.entities.Transaction;

public interface TransactionService {

	
	public Transaction getTransaction(long sellersId);
	public Transaction addTransaction(Transaction transaction);
	public Transaction updateTransaction(Transaction transaction);
	public void deleteTransaction(long parseLong);
	public List<Transaction> getTransaction();
	
	
}
