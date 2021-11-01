import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignupPage = styled.div`
  background-image: linear-gradient(#40a9ff, #096dd9);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupCard = styled.div`
  background-color: #fff;
  width: 90%;
  height: auto;
  padding: 2em;
  border-radius: 20px;
  text-align: center;
  max-width: 500px;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export const Label = styled.label`
  text-align: left;
  font-weight: bold;
`;

export const Input = styled.input`
  margin: 0.25em 0 1.25em;
  border: 1px solid #cecece;
  padding: 0.5em;
  border-radius: 5px;
`;

export const SignUpButton = styled.button`
  width: 50%;
  margin: 1.5em auto 0;
  background-color: #2c4be7;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 0.5em;
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  color: #4661e6;
`;

export const Message = styled.p`
  font-size: 13px;
  margin: 1rem 0;
`;
