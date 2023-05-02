import PropTypes from 'prop-types'

import CreateUserMarkup from './CreateUserMarkup'

export default function UserList({items}){
    return (<ul>
        {items.map(item=>(
            
        <li key={item.id}>
            <CreateUserMarkup
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

UserList.propTypes={
items:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired,
}))
}