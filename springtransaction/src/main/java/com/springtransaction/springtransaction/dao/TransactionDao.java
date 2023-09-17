package com.springtransaction.springtransaction.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springtransaction.springtransaction.entities.Transaction;

public interface TransactionDao<T> extends JpaRepository<Transaction, Long>{

}
