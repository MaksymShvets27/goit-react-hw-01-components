import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import FriendList from './FriendList/friendList';
import ProfileCard from './Profile/profileCard';
import Statistics from './Statistics/statistics';
import TransactionHistory from './TransactionHistory/transactionHistory';
import './App.css'

export const App = () => {
  return (
    <div className='App'>
      <ProfileCard username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}></ProfileCard>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendList friendsArr={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </div>
  );
};
