import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const UpdatePage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const alterar = (id) => {
    axios.get(`http://localhost:3005/alunos/${id}`).then((resultado) => {
      let aluno = resultado.data;
      aluno.nome += " (alterado)"
        .put(`http://localhost:3005/alunos/${id}`, aluno)
        .then((resultado) => {
          <h1>resultado.status</h1>;
        });
    });
  };

  return (
    <>
      <h1>Update Page</h1>
      <Button onClick={alterar} label={"Atualizar usuário"}/>

      <Button onClick={goToHomePage} label={"Voltar para a página principal"} />

    </>
  );
};

export default UpdatePage;
