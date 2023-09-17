package com.springtransaction.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springtransaction.springtransaction.dao.TransactionDao;
import com.springtransaction.springtransaction.entities.Transaction;


@Service
public class TransactionServiceImpl implements TransactionService {
	
	
	
	
public TransactionServiceImpl() {
		super();
	}

@Autowired
private TransactionDao transactionDao;

@Override
public List<Transaction> getTransaction()
{
	return transactionDao.findAll();
}

@Override
public Transaction getTransaction(long sellersId)
{
	return  (Transaction)transactionDao.getOne(sellersId);
	
}

@Override
public Transaction addTransaction(Transaction transaction)
{
	transactionDao.save(transaction);
	return transaction;
}

public Transaction updateTransaction(Transaction transaction)
{
	transactionDao.save(transaction);
	return transaction;
}

@Override
public void deleteTransaction(long parseLong)
{
	Transaction entity =(Transaction) transactionDao.getOne(parseLong);
	transactionDao.delete(entity);
}


}