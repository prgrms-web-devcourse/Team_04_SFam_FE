import { ThemeContext } from '@emotion/react';
import styled from '@emotion/styled';

import { WrapperProps } from 'interface/styles';

export const Main = styled.main({
  paddingTop: '64px',
});

export const Container = styled.div`
  margin: 0 20px;
  padding: 0 0 56px 0;
`;

export const ColWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: 16px 0;
  padding: ${(props) => props.padding};
  gap: ${(props) => props.gap};
  height: ${(props) => props.height};
`;

export const RowWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: 16px 0;
  padding: ${(props) => props.padding};
  gap: ${(props) => props.gap};
`;

export const InnerWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  gap: ${(props) => props.gap || '8px'};
  flex-wrap: ${(props) => props.flexWrap};
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

export const BottomFixedWrapper = styled.div<WrapperProps>`
  position: fixed;
  padding: 8px 0 0 0;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
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

export const SearchButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 5px;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
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
  font-weight: bold;
`;

export const BoldGrayB1 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b1};
  color: ${(props) => props.theme.color.gray400};
  font-weight: bold;
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

export const BoldGrayB2 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b2};
  color: ${(props) => props.theme.color.gray400};
  font-weight: bold;
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

export const BoldOrangeB3 = styled.span`
  font-size: ${({ theme }) => theme.fontSize.b3};
  color: ${({ theme }) => theme.color.primary};
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
  font-family: inherit;
  ::placeholder {
    font-size: ${(props) => props.theme.fontSize.b3};
    color: ${({ theme }) => theme.color.gray400};
  }
`;

export const MessageInput = styled.input`
  width: 320px;
  height: 42px;
  padding: 1rem;
  font-size: ${(props) => props.theme.fontSize.b3};
  background-color: #d9d9d9;
  border: 1px solid ${(props) => props.theme.color.gray200};
  border-radius: 16px; ;
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const UserList = styled.div``;
