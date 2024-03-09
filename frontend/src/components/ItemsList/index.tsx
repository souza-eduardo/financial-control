import { useEffect, useState } from 'react';
import * as C from './styles';

const ItemsList = () => {

  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(res => res.json())
      .then(item => setItems(item));
    
  }, []);

  return (
    <>
      {items.map((item, index) => (
        <C.Container key={index}>
          <li className='category'>{item.category}</li>
          <li>{item.value}</li>
          <li>{item.type}</li>
        </C.Container>
      ))}
    </>
  )
}

export default ItemsList;