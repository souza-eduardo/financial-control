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

  @media screen and (max-width: 768px) {
    max-width: 90%;
    height: 180px;
    font-size: 1.2rem;
    flex-direction: column;
  }
`;

export const DeleteButton = styled.button`
  font-size: 1.4rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  :hover {
    color: red;
  }

  @media screen and (max-width: 768px) {
    background-color: red;
    color: white;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
  }
`;