import { Item } from "../Item/Item";
import items from '../transactions.json'



export const TableItem=function(){

  return (
    <table>
        {TableHead(items)}
        {TableBody(items)}
    </table>
    
  )
  
  
  
 
}

function TableHead(items){
    const tableHead = (Object.keys(items[0]).slice(1));
 return (<thead>{
    tableHead.map(el=>
    <th>
        {el}
    </th>)
    }
    
    </thead>)

}

 const TableBody = function(items){

  return (
  <tbody>{items.map(item=>(

      <tr key={item.id}>
        <Item
        type={item.type}
        amount={item.amount}
        currency={item.currency}
         /> 
    </tr>))
  }</tbody>)
  }

