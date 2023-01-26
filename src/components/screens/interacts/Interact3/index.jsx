import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ContentWrapper } from '../../../shared/wrappers';
import { MediumText, RegularDescription, RulesText } from '../../../shared/styledTexts';
import { useProgress } from '../../../../hooks/useProgress';
import { RulesModal } from '../../../shared/RulesModal';
import welcome from '../../../shared/svg/welcome.svg';
import { BorderBlock } from '../../../shared/BorderBlock';
import { shuffle } from '../../../../utils/shuffle';
import { Post3Purple } from '../../../shared/svg/rectangles/Post3Purple';
import { Post3Yellow } from '../../../shared/svg/rectangles/Post3Yellow';
import { colors } from '../../../../constants/colors';
import { Rules3Purple } from '../../../shared/svg/rectangles/Rules3Purple';
import { Rules3Yellow } from '../../../shared/svg/rectangles/Rules3Yellow';

const CELLS_COLUMN_AMOUNT = 4;
const CELLS_ROW_AMOUNT = 4;

const Wrapper = styled(ContentWrapper)`
  ${({isModal}) => isModal ? 'filter: blur(5px);' : ''};
`;

const YellowRectangle = styled(Post3Purple)`
  position: absolute;
  width: 102.4vw;
  max-width: 384px;
  left: -27.933vw;
  top: -9.3333vw;
  height: 58.4vw;
  max-height: 219px;
  z-index: -2;
  & path {
    fill: ${colors.yellow}
  }
`;

const PurpleRectangle = styled(Post3Yellow)`
  position: absolute;
  width: 84.8vw;
  max-width: 318px;
  right: -9.8vw;
  bottom: -7.2vw;
  height: 50.1333vw;
  max-height: 188px;
  z-index: -2;
  & path {
    fill: ${colors.purple}
  }
`;

const CellsWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(${CELLS_ROW_AMOUNT}, 1fr);
  grid-template-columns: repeat(${CELLS_COLUMN_AMOUNT}, 1fr);
  margin: 0 9.8vw;
`;

const Cell = styled(BorderBlock)`
  position: relative;
  ${({styles}) => styles};
`;

const CellNumber = styled(MediumText)`
  position: absolute;
  bottom: 2px;
  right: 2px;
  font-size: 11px;
  line-height: 130%;
  color: #848484;
`;

const YellowRulesRectangle = styled(Rules3Yellow)`
  position: absolute;
  width: 69.6vw;
  max-width: 261px;
  right: -10.933vw;
  bottom: -9.3333vw;
  height: 43.7333vw;
  max-height: 164px;
  z-index: -2;
`;

const PurpleRulesRectangle = styled(Rules3Purple)`
  position: absolute;
  width: 86.666vw;
  max-width: 325px;
  left: -11.4666vw;
  top: -10.1333vw;
  height: 53.333vw;
  max-height: 200px;
  z-index: -2;
`;

const getRowId = (i) => Math.floor(i / CELLS_ROW_AMOUNT);
const getColId = (i) => i % CELLS_ROW_AMOUNT;

const fillCellArray = (id, cellSize, isEmpty) => (
    {
        id: `cell_${id}`,
        position: id,
        isEmpty,
        styles: {
            width: cellSize,
            height: cellSize,
            ...(isEmpty ? {background: 'transparent', border: 'none'} : {
                background: `url(${welcome}) no-repeat`,
                'background-size': `${cellSize * CELLS_COLUMN_AMOUNT}px ${cellSize * CELLS_ROW_AMOUNT}px`,
                'background-position': `-${getColId(id) * cellSize}px -${getRowId(id) * cellSize}px`
            })
        }
    }
);

export const Interact3 = () => {
    const {next} = useProgress();
    const [cells, setCells] = useState([]);
    const [shownCells, setShownCells] = useState([]);
    const [finished, setFinished] = useState(false);
    const [rulesModal, setRulesModal] = useState(true);

    const getArray = (length, content) => {
        const func = typeof content === 'function' ? content : () => content;
        return Array.from({length}, func);
    };


    useEffect(() => {
        const size = (document.documentElement.clientWidth * 0.804) / CELLS_ROW_AMOUNT;
        const cellsAmount = CELLS_ROW_AMOUNT * CELLS_COLUMN_AMOUNT;
        const cellsArr = getArray(cellsAmount,
            (v, i) => fillCellArray(i, size, i === cellsAmount - 1));
        setCells(() => cellsArr);
        const shuffled = shuffle(cellsArr.slice(0, cellsAmount - 1));
        setShownCells(() => [...shuffled, cellsArr[cellsAmount - 1]]);
    }, []);

    const swapCells = (ind1, ind2, arr) => {
        const newArr = [...arr];
        const t = newArr[ind1];
        newArr[ind1] = newArr[ind2];
        newArr[ind2] = t;
        return newArr;
    }

    const onMoveCell = useCallback((ind) => {
        if (shownCells[ind].isEmpty || finished) return;
        let emptyId = '';
        if (ind > 0 && shownCells[ind - 1]?.isEmpty) emptyId = ind - 1;
        else if (ind > 3 && shownCells[ind - CELLS_ROW_AMOUNT]?.isEmpty) emptyId = ind - CELLS_ROW_AMOUNT;
        else if (shownCells[ind + 1]?.isEmpty) emptyId = ind + 1;
        else if (shownCells[ind + CELLS_ROW_AMOUNT]?.isEmpty) emptyId = ind + CELLS_ROW_AMOUNT;
        if (typeof emptyId === 'number') {
            const swappedArr = swapCells(ind, emptyId, shownCells);
            setShownCells(() => swappedArr);
            let i;
            for (i = 0; i < swappedArr.length; i++) {
                if (i !== swappedArr[i].position) break;
            }
            if (i === cells.length) {
                setFinished(true);
                setTimeout(() => next(), 5500);
            }
        }
    }, [shownCells, setFinished, setShownCells, finished, next, cells]);

    return (
        <>
            <Wrapper isModal={rulesModal}>
                <RulesText onClick={() => setRulesModal(true)}>Правила</RulesText>
                <CellsWrapper>
                    {shownCells.map((cell, i) => (
                        <Cell key={cell.id} styles={cell.styles} onClick={() => onMoveCell(i)}>
                            {!cell.isEmpty && <CellNumber>{cell.position + 1}</CellNumber>}
                        </Cell>
                    ))}
                    <PurpleRectangle/>
                    <YellowRectangle/>
                </CellsWrapper>
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
                        <PurpleRulesRectangle/>
                        <YellowRulesRectangle/>
                    </RulesModal>
                )
            }
        </>
    );
};
