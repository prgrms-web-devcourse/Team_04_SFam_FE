import styled from '@emotion/styled';
import { WrapperProps } from 'interface/styles';

export const Main = styled.main({
  paddingTop: '70px',
});

export const Container = styled.div`
  margin: 0 20px;
  padding: 0 0 52px 0;
`;

export const ColWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: 16px 0;
  padding: ${(props) => props.padding};
  gap: ${(props) => props.gap};
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

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  gap: 8px;
`;

export const DropdownWrapper = styled.div<WrapperProps>`
  width: ${(props) => props.width};
`;

export const RadioInput = styled.input`
  display: flex;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.secondary};
  margin: 0;
  &:checked {
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }
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

// TODO: 리팩토링 시 Text 컴포넌트 만들 것
export const B1 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b1};
`;
export const H1 = styled.span`
  font-size: ${(props) => props.theme.fontSize.h1};
`;

export const H2 = styled.span`
  font-size: ${(props) => props.theme.fontSize.h2};
`;

export const B2 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b2};
`;

export const B3 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
`;

export const BoldB1 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b1};
`;

export const BoldB2 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b2};
  font-weight: bold;
`;

export const BoldB3 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
  font-weight: bold;
`;

export const GrayB2 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b2};
  color: ${(props) => props.theme.color.gray400};
`;

export const GrayB3 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
  color: ${(props) => props.theme.color.gray400};
`;

export const BoldGrayB3 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
  color: ${(props) => props.theme.color.gray400};
  font-weight: bold;
`;

export const BoldGreenB3 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
  color: ${(props) => props.theme.color.secondary};
`;

export const GrayB4 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b4};
  color: ${(props) => props.theme.color.gray400};
`;

export const ResetBtn = styled.button`
  display: flex;
  margin: 0;
  padding: 0;
  border: none;
  background-color: #fff;
  font-size: ${(props) => props.theme.fontSize.b2};
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.gray300};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 8px;
  height: 242px;
  font-size: ${(props) => props.theme.fontSize.b3};
  ::placeholder {
    font-size: ${(props) => props.theme.fontSize.b3};
    color: ${({ theme }) => theme.color.gray400};
  }
`;
