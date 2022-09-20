import "./Home.css";

function Home() {
  return (
    <div className="container">
      <h1>Comece agora 🚀</h1>
      <input type={"text"} placeholder={"Adicione uma tarefa aqui ✏️"}/>
      <button type={"button"}>
      <i class="fi fi-sr-add"></i>
      Adicionar
      </button>
    </div>
  );
}

export default Home;
