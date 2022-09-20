import "./Home.css";

function Home() {
  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <input type={"text"} placeholder={"Adicione uma tarefa aqui ✏️"}/>
      <button type={"button"}>Adicionar</button>
    </div>
  );
}

export default Home;
