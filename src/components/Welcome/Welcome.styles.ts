import styled from '@emotion/styled';

export const Container = styled.div``;

export const ImageContainer = styled.div`
  width: 100%;
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  align-items: center;
`;

export const Box = styled.div`
  background-color: pink;
  width: 100px;
  height: 100px;
`;

export const Title = styled.span`
  font-size: ${(props) => props.theme.fontSize.h1};
  padding-bottom: 15px;
`;

export const Text = styled.span`
  font-size: ${(props) => props.theme.fontSize.b2};
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Info = styled.div`
  margin-top: 20px;
`;

export const Login = styled.span`
  color: ${(props) => props.theme.color.secondary};
`;
