import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { AlunosContext } from "../../AlunosContext";
import React, { useContext } from "react";
import TextInput from "../TextInput";

const DeletePage = () => {
  const navigate = useNavigate();

  const { alunos, setAlunos } = useContext(AlunosContext);
  const [id, setId] = React.useState("");

  const limparAlunos = () =>{
    setAlunos([]);
  }

  const goToHomePage = () => {
    navigate("/");
  };

  const excluir = (id) => {
    id = id.trim()
    axios
      .delete(`http://localhost:3005/alunos/${id}`)
      .then((resultado) => {
        const alunoEncontrado = alunos.find((aluno) => aluno.id === id);
        if (!alunoEncontrado) {
          alert("Aluno não encontrado!");
        }
        alert(
          `Aluno ${alunoEncontrado.nome} com o ID ${id} deletado com sucesso`
        );
        setAlunos(alunos.filter((aluno) => aluno.id !== id));
        <h1>resultado.status</h1>;
      })
      .catch((erro) => {
        console.error("Erro ao excluir aluno: ", erro);
      });
  };

  const listar = () => {
    axios.get("http://localhost:3005/alunos").then((resultado) => {
      setAlunos(resultado.data);
    });
  };

  return (
    <>
      <h1>Delete Page</h1>
      <Button onClick={listar} label={"Listar"} />

      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            {" "}
            ID: {aluno.id} - Nome: {aluno.nome} - Matrícula: {aluno.matricula}{" "}
          </li>
        ))}
      </ul>

      <TextInput
        onChange={(e) => setId(e.target.value)}
        type={"text"}
        value={id}
        placeholder={"Digite o ID a ser deletado"}
      />
      <Button onClick={() => excluir(id)} label={"Excluir"} />
      <Button onClick={limparAlunos} label={"Limpar Alunos"}/>
      <Button onClick={goToHomePage} label={"Voltar para a página principal"} />
    </>
  );
};

export default DeletePage;
