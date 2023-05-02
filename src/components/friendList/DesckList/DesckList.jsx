import {Item} from '../Item/Item'



export const DesckList=function({items}){
return(
     <ul className="friend-list">
        {items.map(item=>(
            <li key={item.id}>
                <Item 
                name={item.name}
                avatar={item.avatar}
                isOnline={item.isOnline}
                />
            </li>))}
   </ul>
)}

