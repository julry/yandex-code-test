import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { Description } from './styledTexts';
import { Modal } from './Modal';
import { BorderBlock } from './BorderBlock';
import { RulesButton } from '../screens/interacts/RulesButton';

const RulesBlock = styled(BorderBlock)`
  padding: 5.3vw 4.93vw 4.26vw;
`;

const RulesDescr = styled(Description)`
  color: ${colors.yellow};
  text-align: center;
  margin-bottom: 1.7vw;
`;

export const RulesModal = (props) => {
    const {close, firstTime} = props;
    const onIconClose = !firstTime && close;
    return (
        <Modal close={onIconClose}>
            <RulesBlock>
                <RulesDescr>Правила</RulesDescr>
                {props.children}
                {firstTime && <RulesButton onClick={close}>Понятно</RulesButton>}
            </RulesBlock>
        </Modal>
    )
}