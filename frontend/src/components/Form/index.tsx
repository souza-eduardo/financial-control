import * as C from './styles';

const Form = () => {

  async function addItem() {
    fetch('http://localhost:3000/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
    })
  }
  

  return (
    <C.FormContainer>
        <C.InputContainer>
          <label htmlFor="category">Categoria</label>
          <C.Input type='text' id='category' />
        </C.InputContainer>

        <C.InputContainer>
          <label htmlFor="value">Valor</label>
          <C.Input type='text' id='value'/>
        </C.InputContainer>
        
        <C.RadioButton type='radio' id='entry' />
        <label htmlFor="entry">Entrada</label>

        <C.RadioButton type='radio' id='exit' />
        <label htmlFor="exit">Saída</label>
        
        <C.SubmitButton type='submit' onClick={addItem}>Adicionar</C.SubmitButton>
    </C.FormContainer>
  )
}

export default Form;