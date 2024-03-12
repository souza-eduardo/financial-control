import { useEffect, useState } from 'react';
import * as C from './styles';
import { MdDelete } from "react-icons/md";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown
} from "react-icons/fa";

const ItemsList = () => {

  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(res => res.json())
      .then(item => setItems(item));
  }, [items]);

  function deleteItem(index: any) {
    fetch('http://localhost:3000/items/' + items[index].id, {
      method: 'DELETE'
    })
      .then((res => res.json()));
  }

  return (
    <>
      {items.map((item, index) => (
        <C.ItemContainer key={index}>
          <li className='category'>{item.category}</li>
          <li>R$ {item.value}</li>
          <li>{item.type === 'Entrada' ? <FaRegArrowAltCircleUp /> : <FaRegArrowAltCircleDown />} {item.type}</li>
          <C.DeleteButton onClick={() => deleteItem(index)}>
            <MdDelete />
          </C.DeleteButton>
        </C.ItemContainer>
      ))}
    </>
  )
}

export default ItemsList;