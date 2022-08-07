import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  background-color: pink;
  width: 100px;
  height: 100px;
`;

export const Title = styled.span`
  font-size: ${(props) => props.theme.fontSize.h1};
  font-weight: bold;
  margin-bottom: 24px;
`;

export const Text = styled.span`
  font-size: ${(props) => props.theme.fontSize.b2};
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 20px 0 20px;
`;

export const Info = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Login = styled.span`
  color: ${(props) => props.theme.color.secondary};
`;
