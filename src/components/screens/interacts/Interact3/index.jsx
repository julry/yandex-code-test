import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { ContentWrapper } from '../../../shared/wrappers';
import { RegularDescription, RulesText } from '../../../shared/styledTexts';
import { colors } from '../../../../constants/colors';
import { useProgress } from '../../../../hooks/useProgress';
import { RulesModal } from '../../../shared/RulesModal';
import { Rules3Purple } from '../../../shared/svg/rectangles/Rules3Purple';

const Wrapper = styled(ContentWrapper)`
  --circleWidth: 65px;
  filter: blur(${({isModal}) => isModal ? '5px' : '0'});
  @media screen and (max-width: 330px) {
    --circleWidth: 55px;
  }

  @media screen and (max-width: 315px) {
    --circleWidth: 45px;
  }
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RulesPurpleRect = styled(Rules3Purple)`
  position: absolute;
  z-index: -4;
  left: -11.4666vw;
  top: -10.1333vw;
  width: 80.2vw;
  max-width: 301px;
  height: 53.333vw;
  max-height: 200px;
`;

export const Interact3 = () => {
    const {next} = useProgress();
    const getArray = (length, content) => {
        const func = typeof content === 'function' ? content : () => content;
        return Array.from({length}, func);
    };

    const [rulesModal, setRulesModal] = useState(true);

    return (
        <>
            <Wrapper isModal={rulesModal}>
                <RulesText onClick={() => setRulesModal(true)}>Правила</RulesText>

            </Wrapper>
            {
                rulesModal && (
                    <RulesModal close={() => setRulesModal(false)}>
                        <RegularDescription>
                            {
                                'Жми на кусочки изображения, чтобы поставить их на свои места. \n' +
                                'Собери таинственное послание!'
                            }
                        </RegularDescription>
                        <RulesPurpleRect />
                    </RulesModal>
                )
            }
        </>
    );
};
