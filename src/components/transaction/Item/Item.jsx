import PropTypes from 'prop-types';

export const Item=function({type,amount,currency}){
    return(
    <tr>
        <th>{type}</th>
        <th>{amount}</th>
        <th>{currency}</th>
    </tr>
    )
} 
Item.propTypes={
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
}











/* <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table> */