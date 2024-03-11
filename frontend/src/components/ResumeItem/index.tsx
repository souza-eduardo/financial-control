import { IconType } from 'react-icons';
import * as C from './styles';

const ResumeItem = (props: {title: string, Icon: IconType, value: string}) => {
  return (
    <C.Container>
      <C.Header>
        {props.title}
        <props.Icon />
      </C.Header>
      <C.ItemValue>
        {props.value}
      </C.ItemValue>
    </C.Container>
  )
}

export default ResumeItem;