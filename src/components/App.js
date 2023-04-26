import MakeUserCard from "./makeUserMarkup"
import users from '../user.json';
const data = users[0];

export default function App(){
    return <div>
        < MakeUserCard 
  avatar={data.avatar}
  username={data.username}
  tag={data.tag}
  location ={data.location} 
  stats={data.stats}
/>
        
    </div>
}