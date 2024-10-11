import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import React , { useContext, useState } from "react";
import TextInput from "../TextInput";
import { AlunosContext } from "../../AlunosContext";

const UpdatePage = () => {
  const { alunos, setAlunos } = useContext(AlunosContext);
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = React.useState("")
  const [id, setId] = useState("")

  const goToHomePage = () => {
    navigate("/");
  };

  const listar = () => {
    axios.get("http://localhost:3005/alunos").then((resultado) => {
      setAlunos(resultado.data);
    });
  };

  const alterar = (id) => {
    axios.get(`http://localhost:3005/alunos/${id}`)
      .then((resultado) => {
        let aluno = resultado.data;
        aluno.nome += " (alterado)"
        return axios.put(`http://localhost:3005/alunos/${id}`, aluno)       
      })
      .then((putResultado) =>{
        setStatusMessage(`Status da atualização: ${putResultado.status}`)
      })
      .catch((error) =>{
        setStatusMessage(`Erro ao atualizar o aluno: ${error.message}`);
      })
  };

  return (
    <>
      <h1>Update Page</h1>

      <TextInput
        type="text"
        placeholder="Digite o ID do aluno"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Button onClick={() => alterar(id)} label={"Atualizar usuário"} />

      <Button onClick={listar} label={"Listar"} />

      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            {" "}
            ID: {aluno.id} - Nome: {aluno.nome} - Matrícula: {aluno.matricula}{" "}
          </li>
        ))}
      </ul>

      <Button onClick={goToHomePage} label={"Voltar para a página principal"} />

      {statusMessage && <p>{statusMessage}</p>}
    </>
  );
};

export default UpdatePage;
