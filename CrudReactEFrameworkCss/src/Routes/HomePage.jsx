import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();



  const goToListPage = () => {
    navigate("/listPage");
  };

  const goToInsertPage = () => {
    navigate("/insertPage");
  };

  const goToUniqueQueryPage = () => {
    navigate("/uniqueQueryPage");
  };

  const goToDeletePage = () => {
    navigate("/deletePage");
  };

  const goToUpdatePage = () => {
    navigate("/updatePage");
  };

  return (
    <div>
    </div>
  );
};

export default HomePage;
