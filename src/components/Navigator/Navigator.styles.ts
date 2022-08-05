import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 12px 6px 8px;
  box-shadow: 0 -2px 5px 1px rgba(0, 0, 0, 0.15);
  background-color: ${({ theme }) => theme.color.background};
`;

export const Nav = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  width: 20%;
`;

export const Anchor = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  color: black;
  text-decoration: none;

  span {
    :first-of-type {
      font-size: ${({ theme }) => theme.fontSize.b4};
    }
    :last-of-type {
      font-size: ${({ theme }) => theme.fontSize.b4};
    }
  }
`;
