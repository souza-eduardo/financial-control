import { useState } from 'react';
import * as C from './styles';

const Form = () => {

  const [_, setItems] = useState<any[]>([]);

  const [newItemCategory, setNewItemCategory] = useState('');
  const [newItemValue, setNewItemValue] = useState('');
  const [newItemType, setNewItemType] = useState('');

  function categoryChange(e: any) {
    setNewItemCategory(e.target.value);
  }

  function valueChange(e: any) {
    setNewItemValue(e.target.value);
  }

  function typeChange(e: any) {
    if (e.target.id == 'entry') setNewItemType('Entrada');
    else setNewItemType('Saída');
  }

  function addItem() {
    fetch('http://localhost:3000/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      category: newItemCategory,
      value: newItemValue,
      type: newItemType
    })
  })
    .then(response => response.json())
    .then(newItem => setItems(i => [...i, newItem]));
  }
  

  return (
    <C.FormContainer>
        <C.InputContainer>
          <label htmlFor="category" className='category'>Categoria</label>
          <C.Input type='text' id='category' onChange={(e) => categoryChange(e)} />
        </C.InputContainer>

        <C.InputContainer>
          <label htmlFor="value" className='value'>Valor</label>
          <C.Input type='text' id='value' onChange={(e) => valueChange(e)} />
        </C.InputContainer>
        
        <C.InputContainer style={{flexDirection: 'row'}}>
          <C.RadioButton type='radio' id='entry' name='type' onChange={(e) => typeChange(e)} />
          <label htmlFor="entry">Entrada</label>
          
          <C.RadioButton type='radio' id='exit' name='type' onChange={(e) => typeChange(e)} />
          <label htmlFor="exit">Saída</label>
        </C.InputContainer>

        <C.SubmitButton type='submit' onClick={addItem}>Adicionar</C.SubmitButton>
    </C.FormContainer>
  )
}

export default Form;