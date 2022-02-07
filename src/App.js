import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import userInfo from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';

function App() {
  return (
    <>
      <Profile userInfo={userInfo} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
