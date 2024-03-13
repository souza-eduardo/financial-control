import './App.css';
import Header from './components/Header';
import Resume from './components/Resume';
import Form from './components/Form';
import ItemsList from './components/ItemsList';
import { useEffect, useState } from 'react';

const App = () => {

  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(res => res.json())
      .then(items => setItems(items))
      .catch(error => console.error('Erro ao obter os itens:', error));
  })

  const addItem = (newItem: any) => {
    setItems(i => [...i, newItem]);
  }

  return (
    <>
      <Header />
      <main>
        <Resume items={items} />
        <Form addItem={addItem} />
        <ItemsList />
      </main>
    </>
  );
}

export default App;
