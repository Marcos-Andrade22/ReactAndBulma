import axios from "axios";
import React, { useContext } from "react";
import TextInput from "../TextInput";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { AlunosContext } from "../../AlunosContext";


const InsertPage = () => {
  const navigate = useNavigate();
  
  const goToHomePage = () => {
    navigate("/");
  };
  const {alunos, setAlunos} = useContext(AlunosContext)
  const [novoAluno, setNovoAluno] = React.useState({nome:"", matricula:""});

  const limparAlunos = () =>{
    setAlunos([]);
  }

  const inserir = () => {
    if (!novoAluno.nome || !novoAluno.matricula) {
      alert("Aluno incompleto!!");
      return;
    }
    axios
      .post("http://localhost:3005/alunos", novoAluno)
      .then((resultado) => {
        setAlunos([...alunos, resultado.data]);
        setNovoAluno({});
      })
      .catch((erro) => {
        console.error("Erro ao adicionar aluno: ", erro);
      });
  };

  return (
    <>
      <TextInput
        label="Nome"
        type="text"
        placeholder="Nome"
        value={novoAluno.nome || ""}
        onChange={(e) => setNovoAluno({ ...novoAluno, nome: e.target.value })}
      />
      <TextInput
        label="Matricula"
        type="text"
        placeholder="Matrícula"
        value={novoAluno.matricula || ""}
        onChange={(e) =>
          setNovoAluno({ ...novoAluno, matricula: e.target.value })
        }
      />
      <Button onClick={inserir} label={"Adicionar Usuário"}/>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            Nome: {aluno.nome} - Matrícula {aluno.matricula}
          </li>
        ))}
      </ul>
      <Button onClick={limparAlunos} label={"Limpar Alunos"}/>

      <Button onClick={goToHomePage} label={"Voltar para a página principal"} />

    </>
  );
};

export default InsertPage;
