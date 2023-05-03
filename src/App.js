
import './App.css';
import List from './components/user/UserList';
import user from './user.json'
import Section from './components/Section'
import Statistic from './components/statistic/EventBoard/EventBoard';
import BaseTitle from './components/statistic/BaseTitle/BaseTitle';
import data from './components/statistic/data.json';
import SectionStat from './components/statistic/Section/SectionStat';
import {DesckList} from './components/friendList/DesckList/DesckList';
import friends from './components/friendList/friends.json';
import {SectionFriend} from './components/friendList/SectionFriend/SectionFriend'
import {TableItem} from './components/transaction/TableItem/TableItem'
import trancaction from './components/transaction/transactions.json'
import {SectionTrancaction} from './components/transaction/SectionTrancaction/SctionTrancaction'

export default function App() {
  return (
  <div>
    <Section>
      <List className = "user-block" items={user}/>
    </Section>
    
    <SectionStat className="statistic">
      <BaseTitle  title="Upload stats"/>
      <Statistic className="" items={data} />
    </SectionStat>

    <SectionFriend>
      <DesckList className="" items={friends}/>
    </SectionFriend>

    <SectionTrancaction>
      <TableItem className="" items={trancaction}/>
    </SectionTrancaction>
    
  </div>
  );


}

