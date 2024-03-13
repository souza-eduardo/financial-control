import * as C from './styles';
import ResumeItem from '../ResumeItem';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from "react-icons/fa";

interface ResumeProps {
  items: any[];
}

const Resume = ({ items }: ResumeProps) => {

  /* useEffect(() => {
   fetch('http://localhost:3000/items')
     .then(res => res.json())
     .then(item => setItems(item))
     .finally(() => setLoading(false));
 }, []); */

  /* useEffect(() => {
    if(!loading) {
    
      let totalEntries = 0;
      let totalExits = 0;
      items.map((item) => {
        if (item.type === 'Entrada') totalEntries += item.value;
        else totalExits += item.value;
      });

      setEntries(e => e + totalEntries);
      setExits(e => e + totalExits);
      setTotal(_t => totalEntries - totalExits);
    }
  }, [loading, items]); */
  let totalEntries = 0;
  let totalExits = 0;

  items.forEach(item => {
    if (item.type === 'Entrada') totalEntries += item.value;
    else totalExits += item.value;
  });

  const total = totalEntries - totalExits;

  const real = Intl.NumberFormat('pt-BR', { // formata o valor para o Real Brasileiro
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <C.Container>
      <ResumeItem title='Entradas' Icon={FaRegArrowAltCircleUp} value={real.format(totalEntries)} />
      <ResumeItem title='Saídas' Icon={FaRegArrowAltCircleDown} value={real.format(totalExits)} />
      <ResumeItem title='Total' Icon={FaDollarSign} value={real.format(total)} />
    </C.Container>
  )
}

export default Resume;