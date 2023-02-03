import React from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';
import { MediumText } from './styledTexts';
import { Cup } from './svg/Cup';
import { SvgWrapper } from './SvgWrapper';
import rectangles from './svg/rectangles/winModal.svg';
import { BorderBlock } from './BorderBlock';

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
`;

const Title = styled(MediumText)`
  font-size: 27px;
`;

const CupStyled = styled(Cup)`
  position: absolute;
  top: -160px;
  left: 50%;
  transform: translateX(-50%);
  width: 113px;
  height: 147px;
`;

const Rectangles = styled(SvgWrapper)`
  background: url(${rectangles});
  width: 100vw;
  left: -5.5vw;
  top: -9.867vw;
  height: 49.666vw;
  z-index: -2;
`;

const Content = styled(BorderBlock)`
  padding: 5.5vw;
  white-space: pre-wrap;
`;

export const WinModal = (props) => {
    return (
        <Modal onClick={props.onClick}>
            <Wrapper>
                <Content>
                    <Title>{'Ура, \nполучилось!'}</Title>
                </Content>
                <CupStyled/>
            </Wrapper>
            <Rectangles/>
        </Modal>
    );
};
