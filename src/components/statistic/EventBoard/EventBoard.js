import PropTypes from 'prop-types'
import CreateItemMarkup from "../Item/Item"



console.log(CreateItemMarkup);

// console.log(data);
export default function EventBoard({items}){
return (
    
    <ul>
        {items.map(item=>(
        <li className="item" key={item.id}>
            <CreateItemMarkup
            label={item.label}
            percentage={item.percentage}
            />
        </li>))}

    </ul>
)}

EventBoard.propTypes={
    items:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
    }))
    }