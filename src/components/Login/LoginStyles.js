import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginPage = styled.div`
  background-image: linear-gradient(#40a9ff, #096dd9);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginCard = styled.div`
  background-color: #fff;
  width: 90%;
  height: auto;
  padding: 2em;
  border-radius: 20px;
  text-align: center;
  max-width: 500px;
`;

export const GoogleLogin = styled.a`
  background-color: #fff;
  border: 1px solid #cecece;
  padding: 0.25em;
  border-radius: 10px;
  font-size: 0.875em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0;

  :before {
    content: url("./images/google-icon.svg");
    transform: translate(-5px, 2px);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0;
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

export const LoginButton = styled.button`
  width: 50%;
  margin: 1.5em auto 0;
  background-color: #2c4be7;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 0.5em;
`;

export const Detail = styled.p`
  font-size: 12px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
`;

export const StyledLink = styled(Link)`
  color: #4661e6;
`;
