import * as C from './styles';
import ResumeItem from '../ResumeItem';
import { useState, useEffect } from 'react';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from "react-icons/fa";

const Resume = () => {
  
  const [items, setItems] = useState<any[]>([]);

  const [entries, setEntries] = useState<number>(0);
  const [exits, setExits] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(res => res.json())
      .then(item => setItems(item))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if(!loading) {
    
      let totalEntries = 0;
      let totalExits = 0;
      items.map((item) => {
        if (item.type === 'Entrada') totalEntries += item.value;
        else totalExits += item.value;
      });

      setEntries(e => e + totalEntries);
      setExits(e => e + totalExits);
      setTotal(totalEntries - totalExits);
    }
  }, [loading, items]);

  const real = Intl.NumberFormat('pt-BR', { // formata o valor para o Real Brasileiro
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <C.Container>
      <ResumeItem title='Entradas' Icon={FaRegArrowAltCircleUp} value={real.format(entries)} />
      <ResumeItem title='Saídas' Icon={FaRegArrowAltCircleDown} value={real.format(exits)} />
      <ResumeItem title='Total' Icon={FaDollarSign} value={real.format(total)} />
    </C.Container>
  )
}

export default Resume;