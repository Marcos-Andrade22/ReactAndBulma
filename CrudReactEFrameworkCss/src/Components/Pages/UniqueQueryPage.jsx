import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import TextInput from "../TextInput";
import React, { useContext } from "react";
import { AlunosContext } from "../../AlunosContext";

const UniqueQueryPage = () => {
  const { alunos, setAlunos } = useContext(AlunosContext);
  const [id, setId] = React.useState("");
  const [alunoUnico, setAlunoUnico] = React.useState(null)

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const limparAlunos = () =>{
    setAlunos([]);
  }

  const consultarUnico = (id) => {
    axios.get(`http://localhost:3005/alunos/${id}`).then((resultado) => {
      setAlunoUnico(resultado.data)
    });
  };

  const listar = () => {
    axios.get("http://localhost:3005/alunos").then((resultado) => {
      setAlunos(resultado.data);
    });
  };

  return (
    <>
      <TextInput
        onChange={(e) => setId(e.target.value)}
        type="text"
        value={id}
        placeholder="Digite o id do usuário a ser consultado"
      />
      <Button onClick={() => consultarUnico(id)} label="Consultar Único" />

      {alunoUnico && (
        <div>
          <h2>Informações do Aluno</h2>
          <p>ID: {alunoUnico.id} </p>
          <p>Nome: {alunoUnico.nome}</p>
        </div>
      )}
      <Button onClick={goToHomePage} label="Voltar para a página principal" />
      <Button onClick={listar} label="Listar" />

      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            ID: {aluno.id}
          </li>
        ))}
      </ul>

      <Button onClick={limparAlunos} label={"Limpar Alunos"}/>
    </>
  );
};

export default UniqueQueryPage;
