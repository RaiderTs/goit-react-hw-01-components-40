import Profile from './components/Profile';
import Statistics from './components/Statistics';
import userInfo from './data/user.json';
import data from './data/data.json';

function App() {
  return (
    <>
      <Profile userInfo={userInfo} />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
}

export default App;
