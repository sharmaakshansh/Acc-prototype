import React, { useState } from 'react';

const SearchTransaction = ({ transactions }) => {
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  
  const handleSearch = () => {
    // Filter transactions based on the entered seller's ID
    const filteredTransactions = transactions.filter(transaction => 
      transaction.sellersId.toString() === searchId
    );
    
    setSearchResult(filteredTransactions);
  };

  return (
    <div>
      <h2>Search Transactions by Seller's ID</h2>
      <div>
        <input
          type="text"
          placeholder="Enter Seller's ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {searchResult.length > 0 ? (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {searchResult.map((transaction, index) => (
              <li key={index}>
                <strong>Seller's ID:</strong> {transaction.sellersId},{' '}
                <strong>Seller's Name:</strong> {transaction.sellersName},{' '}
                <strong>Buyer's Name:</strong> {transaction.buyersName}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No transactions found for the entered Seller's ID.</p>
      )}
    </div>
  );
};

export default SearchTransaction;
