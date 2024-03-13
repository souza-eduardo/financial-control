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