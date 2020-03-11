import styled from "styled-components";

const TableControl = styled.table`
background-color: #FFFFFF;
overflow-x: auto;
border-radius: 4px;
box-shadow: 0 1px 4px 0 rgba(112,114,125,0.4);
border-collapse: collapse;

&--scrollable {
  display: block;

  thead th {
    position: sticky;
    top: 0px;

    &:after {
      content:'';
      position:absolute;
      left: 0;
      bottom: 0;
      width:100%;
      border-bottom: 1px solid rgba(0,0,0,0.12);
    }
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    border: 1px solid #DCDEE3;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(156,157,166,0.2);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #9C9DA6;
  }
}

thead th {
  background-color: #FFFFFF;
  color: #70727d;
}

tbody {
  tr {
    background-color: #F8FBFC;

    &:nth-child(2n) {
      background-color: #FFFFFF;
    }
  }
}

th, td {
  padding: 14px 24px;
  font-size: 12px;
  vertical-align: middle;

  &[rowspan] {
    vertical-align: middle;
  }
}
`;

//Set Display Name
TableControl.displayName = "Table";

export default TableControl;
