import React from 'react';
import styled from 'styled-components';
import rectangles from '../../../shared/svg/rectangles/interact2Finish.svg';
import { Star } from '../../../shared/svg/Star';
import { MediumText } from '../../../shared/styledTexts';
import { Modal } from '../../../shared/Modal';
import { BorderBlock } from '../../../shared/BorderBlock';
import { SvgWrapper } from '../../../shared/SvgWrapper';
import { ArrowBtn } from '../../../shared/ArrowBtn';

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
`;

const Title = styled(MediumText)`
  font-size: 27px;
`;

const StarStyled = styled(Star)`
  position: absolute;
  top: -193px;
  left: 50%;
  transform: translateX(-50%);
  width: 217px;
  height: 211px;
`;

const Rectangles = styled(SvgWrapper)`
  background: url(${rectangles}) -6.4vw 0;
  width: 100vw;
  left: -5.5vw;
  top: -5.3vw;
  height: 34.93vw;
  z-index: -2;
`;

const Content = styled(BorderBlock)`
  padding: 5.5vw;
  white-space: pre-wrap;
`;

const BtnStyled = styled(ArrowBtn)`
  position: absolute;
  top: 40.4vw;
  left: 50%;
  transform: translateX(-50%);
`;

export const FinishModal = ({ onClick }) => {
    return (
        <Modal>
            <Wrapper>
                <Content>
                    <Title>Есть контакт!</Title>
                </Content>
                <StarStyled/>
            </Wrapper>
            <Rectangles/>
            <BtnStyled miniArrow onClick={onClick}/>
        </Modal>
    );
};
