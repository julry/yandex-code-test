import React from 'react';
import styled from 'styled-components';
import { BorderBlock } from './BorderBlock';
import { Modal } from './Modal';
import { ModalPurple } from './svg/rectangles/ModalPurple';
import { ModalYellow } from './svg/rectangles/ModalYellow';

const Content = styled(BorderBlock)`
  padding: 5.3vw;
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
`;

const PurpleRectangle = styled(ModalPurple)`
  position: absolute;
  top: -9.333vw;
  right: -5.5vw;
  width: 80.2667vw;
  height: 52vw;
  z-index: -4;
`;

const YellowRectangle = styled(ModalYellow)`
  position: absolute;
  bottom: -12vw;
  left: -5.5vw;
  width: 84.5333vw;
  height: 29.06vw;
  z-index: -4;
`;

export const LooseModal = (props) => {
    return (
        <Modal>
            <Content>
                {props.children}
            </Content>
            <PurpleRectangle/>
            <YellowRectangle />
        </Modal>
    )
}