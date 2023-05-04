import styled from "@emotion/styled";

export const Table=styled.table`

    table-layout: fixed;
    width: 50%;
    border-collapse: collapse;
    border: 3px solid purple;
`

export const TBody=styled.tbody`
text-align: center;

tr:nth-child(odd) {
    background-color: azure;
  }
`

export const THead=styled.thead`
background-color: deepskyblue;
`