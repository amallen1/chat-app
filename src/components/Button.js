import styled from "styled-components";

export const StyledButton = styled.a`
  background-color: ${(props) => props.bgcolor};
  color: #fff;
  padding: 0.8em 0.8em;
  font-weight: 700;
  font-size: 0.8125rem;
  display: inline-block;
  text-decoration: none;
  border-radius: 10px;
  //text-align: center;

  :hover {
    background-color: var(--hoverPurple);
  }
`;
