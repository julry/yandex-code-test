import React from 'react';
import styled from 'styled-components';
import { Medium, RegularDescription } from '../../../shared/styledTexts';
import { RulesModal } from '../../../shared/RulesModal';
import { Rules2Purple } from '../../../shared/svg/rectangles/Rules2Purple';
import { Rules2Yellow } from '../../../shared/svg/rectangles/Rules2Yellow';

const RulesPurpleRectangle = styled(Rules2Purple)`
  position: absolute;
  left: -13.8vw;
  top: -12.5vw;
  height: 89.8666vw;
  width: 114.6vw;
  max-width: 430px;
  max-height: 337px;
  z-index: -4;
`;

const RulesYellowRectangle = styled(Rules2Yellow)`
  position: absolute;
  bottom: -14vw;
  right: -11.2vw;
  height: 73.0666vw;
  width: 80vw;
  max-width: 300px;
  max-height: 274px;
  z-index: -4;
`;




export const Rules2 = (props) => (
    <RulesModal {...props}>
        <RegularDescription>
            {
               'У тебя есть 8 цветов. Жми на лампочку, чтобы выбрать её цвет. Отправляй свой ответ, как только подберёшь ряд.'
            }
            <br/><br/>
            {'Смотри на подсказки сверху: где цвета из комбинации угаданы — на тех местах ромбики станут '}
            <Medium>белыми</Medium>
            {'. \nЦвета не повторяются, а их порядок может быть любой.'}
            <br/><br/>
            {'Ориентируйся на подсказки кофемашины и своё чутьё!'}
        </RegularDescription>
        <RulesPurpleRectangle/>
        <RulesYellowRectangle/>
    </RulesModal>
)