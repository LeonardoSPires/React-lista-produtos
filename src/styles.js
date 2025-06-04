import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(130deg, #92b1cf 0%, #000000 80%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoList = styled.div`
  padding: 5%;
  background: #fff;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  min-width: 280px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    padding: 0;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 2px solid #ccc;
  height: 30px;
  width: 70%;
`;

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  font-weight: 600;
  height: 30px;
  line-height: 2px;
  background-color: ${({ clicked }) => (clicked ? "#4caf50" : "#b1c4d6")};
  color: #fff;
  width: 20%;
  cursor: pointer;
  transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FilterButton = styled.button`
  border-radius: 5px;
  border: none;
  font-weight: 600;
  height: 30px;
  line-height: 2px;
  background-color: ${({ active }) => (active ? "#275269" : "#b1c4d6")};
  color: ${({ active }) => (active ? "#fff" : "#222")};
  width: 20%;
  cursor: pointer;
  margin-right: 8px;
  transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const LisItem = styled.div`
  background: ${(props) => (props.isFinished ? "#98e1a9" : "#e4e4e4")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.55);
  border-radius: 5px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 10px;
  width: 90%;
  cursor: pointer;

  li {
    list-style: none;
    text-decoration: ${(props) => (props.isFinished ? "line-through" : "none")};
  }
`;
