import React from 'react';
import './App.css';
import User from './components/User';
import userList from './components/User/userList.json';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import friends from './components/FriendList/friends.json';
import Transactions from './components/Transactions';
import transactions from './components/Transactions/transactions.json';

function App() {
  return (
    <div className="App">
      <User {...userList} />
      <Statistics />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
}

export default App;
