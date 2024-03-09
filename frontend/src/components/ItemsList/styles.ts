import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  margin-top: 15px;
  width: 1040px;
  height: 50px;

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