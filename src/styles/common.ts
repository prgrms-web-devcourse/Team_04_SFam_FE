import styled from '@emotion/styled';

import { WrapperProps } from 'interface/styles';

export const Main = styled.main({
  height: 'calc(100% - 120px)',
  margin: '64px 0 56px 0',
  overflow: 'auto',
});

export const Container = styled.div`
  margin: 0 20px;
`;

export const ColWrapper = styled.div<WrapperProps>`
  width: ${(props) => props.width};
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
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: 16px 0;
  padding: ${(props) => props.padding};
  gap: ${(props) => props.gap};
`;

export const InnerWrapper = styled.div<WrapperProps>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  gap: ${(props) => props.gap || '8px'};
  flex-wrap: ${(props) => props.flexWrap};
  flex-grow: ${(props) => props.flexGrow};
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

export const BadgeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const TitleWrapper = styled.div`
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContentWrapper = styled.div`
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.color.gray400};
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

export const H1 = styled.span`
  font-size: ${(props) => props.theme.fontSize.h1};
`;

export const H2 = styled.span`
  font-size: ${(props) => props.theme.fontSize.h2};
`;

interface Props {
  pointer?: boolean;
}

export const B1 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b1};
`;

export const B2 = styled.span<Props>`
  font-size: ${(props) => props.theme.fontSize.b2};
  cursor: ${(props) => props.pointer && 'pointer'};
`;

export const B3 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
`;

export const B4 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b4};
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
  resize: none;
`;

export const ChatMatchHeader = styled.div`
  width: 100%;
  position: absolute;
  top: 64px;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-bottom: ${(props) => `1px solid ${props.theme.color.gray200}`};
  background-color: ${(props) => props.theme.color.background};
  z-index: 10;
`;

export const ChatMatchTitleWrapper = styled.div`
  max-width: calc(100% - 32px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChatContainer = styled.div`
  padding: 48px 8px 64px 16px;
`;

export const MessageInput = styled.input`
  flex-grow: 1;
  height: 40px;
  padding: 16px;
  font-size: ${(props) => props.theme.fontSize.b3};
  border: 1px solid ${(props) => props.theme.color.gray200};
  border-radius: 8px;
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const UserList = styled.div``;

export const Icon = styled.div`
  cursor: pointer;
`;

export const NormalParagraph = styled.p`
  color: #212529;
  font-size: 16px;
  font-weight: bold;
  padding: 16px;
  white-space: pre-line;
  word-break: break-all;
  border: 1px solid ${(props) => props.theme.color.gray200};
  border-radius: ${(props) => props.theme.borderRadius};
`;
