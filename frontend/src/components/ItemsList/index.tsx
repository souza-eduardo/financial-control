import * as C from './styles';

const ItemsList = () => {

  const items = {
    category: 'comida', description: 'Marmita', value: 16.50, type: 'Saída'
  }

  return (
    <C.Container>
      <C.Item id='category'>
        {items.category}
      </C.Item>
      <C.Item>
        {items.description}
      </C.Item>
      <C.Item>
        {items.value}
      </C.Item>
      <C.Item>
        {items.type}
      </C.Item>
    </C.Container>
  )
}

export default ItemsList;