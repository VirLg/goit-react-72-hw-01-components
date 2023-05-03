import PropTypes from 'prop-types'
import CreateItemMarkup from "../Item/Item"
import css from './EventBoard.module.css'




// console.log(data);
export default function EventBoard({items}){
return (
    
    <ul className={css.event__board}>
        {items.map(item=>(
        <li className={css.item} key={item.id}>
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