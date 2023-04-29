
import './App.css';
import List from './components/UserList';
import user from './user.json'
// const data=user[0]

export default function App() {
  return (
  <div>
        <List items={user}/>
  </div>
  );


}

