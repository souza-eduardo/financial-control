import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  font-size: 1.2rem;
  margin-top: 15px;
  width: 1040px;
  padding: 0px 10px;
  border-radius: 5px;
  height: 50px;
  box-shadow: 0px 3px 5px #00000040;

  li {
    list-style: none;
    flex: 1;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
    height: 200px;
    padding: 10px 0px;
    font-size: 1.2rem;
  }
`;

export const DeleteButton = styled.button`
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  :hover {
    color: red;
  }

  @media screen and (max-width: 1024px) {
    background-color: red;
    color: white;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
  }
`;