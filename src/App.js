
import './App.css';
import List from './components/CreateMarkup';
import user from './user.json'
const data=user[0]

export default function App() {
  return (
  <div>
        <List item={data}/>
  </div>
  );
}

