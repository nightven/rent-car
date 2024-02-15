import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;
export const StyledUl = styled.ul`
  display: flex;
  gap: 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: var(--primary-black);
  li:hover,
  li:focus {
    color: var(--primary-white);
  }
`;
