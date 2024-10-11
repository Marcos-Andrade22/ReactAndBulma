import axios from 'axios'
import React, {useContext} from "react";
import Button from "../Button";
import { AlunosContext } from "../../AlunosContext";

import { useNavigate } from "react-router-dom";

const ListPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const limparAlunos = () =>{
    setAlunos([]);
  }


  const {alunos, setAlunos} = useContext(AlunosContext)

  const listar = () => {
    axios.get("http://localhost:3005/alunos").then((resultado) => {
      setAlunos(resultado.data)
    });
  };

  return (
    <>
      <h1>List Page</h1>
      <Button onClick={listar} label={"Listar"}/>

      <ul>
        {alunos.map((aluno) =>(
          <li key={aluno.id}>Nome: {aluno.nome} - Matrícula: {aluno.matricula} </li>
        ))}
      </ul>

        <Button onClick={limparAlunos} label={"Limpar Alunos"}/>
        <Button onClick={goToHomePage} label={"Voltar para a página principal"} />
    </>
  );
};

export default ListPage;