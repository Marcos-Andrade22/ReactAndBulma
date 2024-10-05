import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

const UniqueQueryPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const consultarUnico = (id) => {
    axios.get(`http://localhost:3005/alunos/${id}`).then((resultado) => {
      <h1>resultado.data</h1>;
    });
  };

  return (
    <>
      <h1>Listar um usuário:</h1>
      <Button onClick={consultarUnico} label={"Consultar Único"}/>

      <Button onClick={goToHomePage} label={"Voltar para a página principal"} />

    </>
  );
};

export default UniqueQueryPage;
