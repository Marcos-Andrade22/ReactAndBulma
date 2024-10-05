import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AlunosProvider } from "./AlunosContext";
import Header from "./Layouts/Header";
import Hero from "./Layouts/Hero";
import Footer from "./Layouts/Footer";
import HomePage from "./Routes/HomePage";
import DeletePage from "./Components/Pages/DeletePage"
import Card from "./Components/Card";
import PoweredBy from "./Components/PoweredBy";
import ListPage from "./Components/Pages/ListPage";
import InsertPage from "./Components/Pages/InsertPage";
import UniqueQueryPage from "./Components/Pages/UniqueQueryPage";
import UpdatePage from "./Components/Pages/UpdatePage";

function App() {
  return (
    <AlunosProvider>
      <Router>
          <Header className="is-centered">
            <div className="columns is-centered">
              <div className="column is-narrow">
                <Link to="/" className="button is-primary is-focused">Home Page</Link>
              </div>
              <div className="column is-narrow">
                <Link to="/listPage" className="button is-primary is-focused">List Page</Link>
              </div>
              <div className="column is-narrow">
                <Link to="/insertPage" className="button is-primary is-focused">Insert Page</Link>
              </div>
              <div className="column is-narrow">
                <Link to="/uniqueQueryPage" className="button is-primary is-focused">Unique Query Page</Link>
              </div>
              <div className="column is-narrow">
                <Link to="/deletePage" className="button is-primary is-focused">Delete Page</Link>
              </div>
              <div className="column is-narrow">
                <Link to="/updatePage" className="button is-primary is-focused">Update Page</Link>
              </div>
            </div>
          </Header>

          <Hero>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/listPage" element={<ListPage />} />
              <Route path="/insertPage" element={<InsertPage />} />
              <Route path="/uniqueQueryPage" element={<UniqueQueryPage />} />
              <Route path="/deletePage" element={<DeletePage />} />
              <Route path="/updatePage" element={<UpdatePage />} />
            </Routes>
          </Hero>

          <Footer style={{ marginTop: "auto" }}>
            <Card />
            <PoweredBy/>
          </Footer>
      </Router>
    </AlunosProvider>
  );
}

export default App;
