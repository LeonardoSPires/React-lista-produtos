import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

import { Container, TodoList, Input, Button, LisItem, FilterButton } from "./styles.js";

const FILTROS = {
  TODAS: "todas",
  CONCLUIDAS: "concluidas",
  PENDENTES: "pendentes",
};

function App() {
  const [list, setList] = useState([]);
  const [saveTask, setTask] = useState(""); // Estado temporário para o input
  const [filter, setFilter] = useState("todas");
  const [clicked, setClicked] = useState(false);

  // Carregar ao iniciar
  useEffect(() => {
    const saved = localStorage.getItem("todo-list");
    if (saved) setList(JSON.parse(saved));
  }, []);

  // Salvar sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(list));
  }, [list]);

  const filteredList = list.filter((item) =>
    filter === "todas"
      ? true
      : filter === "concluidas"
      ? item.finished
      : !item.finished
  );

  function inputMudou(event) {
    setTask(event.target.value); // Armazena o valor digitado
  }

  function ativeiBotao() {
    if (saveTask.trim() !== "") {
      // Evita adicionar itens vazios
      setList([...list, { id: uuid(), task: saveTask, finished: false }]);
      setTask(""); // Limpa o campo após adicionar
      setClicked(true);
      setTimeout(() => setClicked(false), 400); // volta ao normal após 400ms
    }
  }

  function finalizarTarefa(id) {
    const newList = list.map((item) =>
      item.id == id ? { ...item, finished: !item.finished } : item
    );

    setList(newList);
  }

  function deletarItem(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <Container>
      <TodoList>
        <h2>Lista de tarefas</h2>
        <div>
          <Input
            value={saveTask}
            onChange={inputMudou}
            placeholder="O que tenho para fazer..."
          />
          <Button onClick={ativeiBotao} clicked={clicked}>Adicionar</Button>
        </div>

            <h3>Filtro de tarefas:</h3>

        <div>
          {Object.entries(FILTROS).map(([key, value]) => (
            <FilterButton
              key={key}
              onClick={() => setFilter(value)}
              active={filter === value ? 1 : 0}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </FilterButton>
          ))}
        </div>

        <ul>
          {filteredList.length > 0 ? (
            filteredList.map((item) => (
              <LisItem isFinished={item.finished} key={item.id}>
                <FcCheckmark onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <FcEmptyTrash onClick={() => deletarItem(item.id)} />
              </LisItem>
            ))
          ) : (
            <h4>Você não tem tarefas cadastradas!</h4>
          )}
        </ul>
      </TodoList>
    </Container>
  );
}

export default App;
