import React from 'react';

// Components
import User from './components/User';
import Transactions from './components/Transactions';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';

//json data
import userList from './json/userList.json';
import friends from './json/friends.json';
import statiscticalData from './json/statistical-data.json';
import transactions from './json/transactions.json';

function App() {
  return (
    <div className="App">
      <User {...userList} />
      <Statistics statiscticalData={statiscticalData} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
}

export default App;
