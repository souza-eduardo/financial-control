import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background-color: white;
  width: 280px;
  height: 80px;
  padding: 30px 35px;
  border-radius: 10px;
  box-shadow: 3px 3px 8px #00000050;
`;

export const Header = styled.header`
  display: flex;
  gap: 20px;
  text-align: center;
  justify-content: space-around;
  color: gray;
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 20px;

  svg {
    color: black;
    width: 25px;
    height: 25px;
  }
`;  

export const ItemValue = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
`;