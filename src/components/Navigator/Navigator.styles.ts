import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 56px;
  position: absolute;
  bottom: 0;
  border-top: ${({ theme }) => `1px solid ${theme.color.gray200}`};
  background-color: ${({ theme }) => theme.color.background};
`;

export const Nav = styled.ul`
  display: flex;
  height: 100%;
`;

export const NavItem = styled.li`
  width: 20%;

  :hover {
    background-color: ${(props) => props.theme.color.gray100};
  }
`;

export const Anchor = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  color: black;
  text-decoration: none;

  span {
    :first-of-type {
      font-size: ${({ theme }) => theme.fontSize.b1};
    }
    :last-of-type {
      font-size: ${({ theme }) => theme.fontSize.b4};
    }
  }
`;
