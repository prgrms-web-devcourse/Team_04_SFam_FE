import styled from '@emotion/styled';
import { WrapperProps } from 'interface/styles';

export const Container = styled.div`
  margin: 0 20px;
`;

export const ColWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: 16px 0;
  padding: ${(props) => props.padding};
  gap: 16px;
`;

export const RowWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: 16px 0;
  padding: ${(props) => props.padding};
`;

export const InnerWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  gap: 8px;
`;
export const InlineWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const IconSpan = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
  cursor: pointer;
  color: ${(props) => props.theme.color.gray300};
`;

export const Label = styled.h2`
  font-size: ${(props) => props.theme.fontSize.b2};
  font-weight: bold;
`;

export const B1 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b1};
  font-weight: bold;
`;

export const B2 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b2};
`;

export const B3 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
`;

export const GrayB3 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
  color: ${(props) => props.theme.color.gray400};
  font-weight: bold;
`;

export const ResetBtn = styled.button`
  display: flex;
  margin: 0;
  padding: 0;
  border: none;
  background-color: #fff;
  font-size: ${(props) => props.theme.fontSize.b2};
`;
