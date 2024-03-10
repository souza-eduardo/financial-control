import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  margin-top: 15px;
  width: 1040px;
  padding: 0px 10px;
  border-radius: 5px;
  height: 50px;
  box-shadow: 0px 3px 5px #00000040;

  .category {
    background-color: lightsalmon;
    width:fit-content;
    padding: 5px 10px;
    border-radius: 5px;  
  }

  li {
    list-style: none;
  }
`;

export const DeleteButton = styled.button`
  font-size: 1.15rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  :hover {
    color: red;
  }
`;