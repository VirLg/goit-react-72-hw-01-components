import { Item } from "../Item/Item";
import items from '../transactions.json'



export const TableItem=function(){
    console.log(items);
    TableRows(items)
}

// function TableHead(items){
  

// }

 const TableRows = function({items}){

  return (<td>{items.map(item=>(

      <tr key={item.id}>
        <Item 
        type={item.type}
        amount={item.amount}
        currency={item.currency}
         /> 
    </tr>))
  }</td>)
  }

