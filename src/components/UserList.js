// import user from '../user.json'

import CreateMarkup from './CreateMarkup'

export default function UserList({items}){
    return (<ul>
        {items.map(item=>(
            
        <li key={item.id}>
            <CreateMarkup
            avatar={item.avatar}
            username={item.username}
            tag={item.tag}
            location={item.location}
            stats={item.stats.followers}
            
            />
        </li>
        ))}
    </ul>)
}