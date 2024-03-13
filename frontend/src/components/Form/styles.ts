import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  width: 1040px;
  height: 80px;
  box-shadow: 0px 3px 5px #00000040;

  @media screen and (max-width: 1024px) {
    margin-top: 30px;
    max-width: 90%;
    height: 200px;
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    
    label.category {
      margin-right: 10px;
    }

    label.value {
      margin-right: 56px;
    }
  }
`;

export const Input = styled.input`
  height: 25px;
  width: 220px;
  outline: none;
`;  

export const RadioButton = styled.input`
  margin-left: 20px;
  padding-left: 40px;

  @media screen and (max-width: 1024px) {
    margin-left: 10px;
  }
`;

export const SubmitButton = styled.button`
  width: 90px;
  height: 50px;
  font-size: 1.05rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #4EC61F;
  color: white;
  cursor: pointer;

  :hover {
    background-color: green;
  }
`;