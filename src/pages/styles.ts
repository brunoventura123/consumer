import styled from "styled-components";

export const ScreeanWarning = styled.div`
text-align:center;
display:flex;
justify-content:center;
align-items:center;
margin:auto;

.c-loader {
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #51d4db;
    height: 50px;
    width: 50px;
  }
  
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`