import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: center;
  width: 280px;
  height: 80px;
  padding: 30px 35px;
  border-radius: 10px;
  box-shadow: 0px 3px 8px #00000050;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 15px;
  }
`;

export const Header = styled.header`
  display: flex;
  gap: 20px;
  align-items: center;
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

  @media screen and (max-width: 768px) {
    margin: -10px 0px 0px -32px;
    width: 100px;
    height: 50px;
    font-size: 1rem;

    svg {
      display: none;
    }
  }
`;  

export const ItemValue = styled.p`
  font-weight: bold;
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    font-size: 0.95rem;
    margin: 0px 0px 0px -26px;
  }
`;