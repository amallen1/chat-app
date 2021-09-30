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

export const GoogleLogin = styled.div`
  background-color: #4285f4;
  color: white;
  cursor: pointer;
  padding: 0.75em;
  border-radius: 8px;
  display: inline-block;
  margin: 1em 0;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2em 0;
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
  margin: 2em auto 0;
`;

