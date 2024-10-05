import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AlunosProvider } from "./AlunosContext";
import ListPage from "./Components/ListPage";
import InsertPage from "./Components/InsertPage";
import UniqueQueryPage from "./Components/UniqueQueryPage";
import DeletePage from "./Components/DeletePage";
import UpdatePage from "./Components/UpdatePage";
import HomePage from "./Routes/HomePage";

function App() {
  return (
    <>
      <AlunosProvider>
        <Router>

          <nav>
          <Link className="button is-primary is-focused" to="/">Home Page</Link>
          <Link to="/listPage" className="button is-primary is-focused">List Page</Link>
          <Link to="/insertPage" className="button is-primary is-focused">Insert Page</Link>
          <Link to="/uniqueQueryPage" className="button is-primary is-focused">Unique Query Page</Link>
          <Link to="/deletePage" className="button is-primary is-focused">Delete Page</Link>
          <Link to="/updatePage" className="button is-primary is-focused">Update Page</Link>
          </nav>

          <Routes>
            {/* Definindo as rotas para cada componente */}
            <Route path="/" element={<HomePage />} />
            <Route path="/listPage" element={<ListPage />} />
            <Route path="/insertPage" element={<InsertPage />} />
            <Route path="/uniqueQueryPage" element={<UniqueQueryPage />} />
            <Route path="/deletePage" element={<DeletePage />} />
            <Route path="/updatePage" element={<UpdatePage />} />
          </Routes>
        </Router>
      </AlunosProvider>
    </>
  );
}

export default App;
