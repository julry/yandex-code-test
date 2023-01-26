import styled from 'styled-components';
import { colors } from '../../constants/colors';

const TextBlock = styled.div`
  position: relative;
  background: ${colors.darkGray};
  border: 1px solid ${colors.gray};
`;

export const BorderBlock = (props) => {
    return <TextBlock {...props}>{props.children}</TextBlock>
}