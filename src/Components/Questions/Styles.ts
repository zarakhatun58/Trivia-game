import styled, { createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;

  .number {
    font-size: 1.1rem;
  }

  .question {
    font-weight: bold;
  }
`;

type ButtonProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    width: 50%;
    background: ${({ correct, userClicked }) =>
      correct ? "green" : !correct && userClicked ? "red" : null};
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 0.8rem;
    border: 1px solid #aaa;
    
  }
`;
/*

background: ${({ correct, userClicked }) =>
    correct ? "green" : !correct && userClicked ? "red" : null};
 background-color: ${props => (props.selected ? 'red' : 'none')};


  background-color: ${( correct?:any, userClicked?:any ) =>
    correct ? "green" : !correct && userClicked ? "red" : null
};
    */