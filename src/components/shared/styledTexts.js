import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const BoldText = styled.p`
  font-weight: 700;
`;

export const MediumText = styled.p`
  font-weight: 500;
`;

export const RegularText = styled.p`
  font-weight: 400;
`;

export const Title = styled(BoldText)`
  font-size: 20px;
  
  @media screen and (max-width: 330px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  
  @media screen and (min-width: 1000px) {
    font-size: 26px;
  }
`;

export const Description = styled(MediumText)`
  font-size: 20px;
  
  @media screen and (max-width: 320px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
  
  @media screen and (min-width: 1000px) {
    font-size: 28px;
  }
`;

export const DescriptionBold = styled(Description)`
  font-weight: 700;
`;

export const DescriptionMd = styled(MediumText)`
  font-size: 18px;

  @media screen and (max-width: 320px) {
    font-size: 15px;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 24px;
  }
`;

export const DescriptionMdBold = styled(DescriptionMd)`
  font-weight: 700;
`;

export const RegularDescription = styled(RegularText)`
  font-size: 16px;

  @media screen and (max-width: 365px) {
    font-size: 15px;
  }
	
  @media screen and (max-width: 320px) {
    font-size: 13px;
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 18px;
  }
`;

export const DialogText = styled(RegularDescription)`
    font-weight: 500;
`;

export const RegularDescriptionSm = styled(RegularText)`
  font-size: 14px;

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 16px;
  }
`;

export const DescriptionSm = styled(MediumText)`
  font-size: 14px;

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 16px;
  }
`;

export const MentorName = styled(DescriptionSm)`
  position: absolute;
  top: calc(-1em - 7px);
  left: 2px;
`;

export const Medium = styled.span`
    font-weight: 500;
`;

export const RulesText = styled(DescriptionSm)`
  width: min-content;
  margin: min(8.533vw, 32px) 0 min(9.333vw, 35px) 5.5vw;
  color: ${colors.yellow};
  border-bottom: 1px solid ${colors.yellow};
`;
