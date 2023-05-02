
import './App.css';
import List from './components/user/UserList';
import user from './user.json'
import Section from './components/Section'
import Statistic from './components/statistic/EventBoard/EventBoard';
import BaseTitle from './components/statistic/BaseTitle/BaseTitle'
import data from './components/statistic/data.json'
import SectionStat from './components/statistic/Section/SectionStat'


export default function App() {
  return (
  <div>
    <Section>
      <List className = "user-block" items={user}/>
    </Section>
    
    <SectionStat>
      <BaseTitle title="Upload stats"/>
      <Statistic className="" items={data} />
      
    </SectionStat>
    
  </div>
  );


}

