import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BrinquedoList from './components/BrinquedoList';
import BrinquedoDetails from "./components/BrinquedoDetails";
import AtualizarBrinquedo from "./components/AtualizarBrinquedo";
import CriarBrinquedo from "./components/CriarBrinquedo";
import DeletarBrinquedo from "./components/DeletarBrinquedo";
import BuscarBrinquedoPorId from "./components/BuscarBrinquedoPorId";
import './App.css';

const App = () => {
  return (
      <Router>
          <nav>
                  <li> <Link to="/brinquedos">Lista de Brinquedos</Link> </li>
                  <li> <Link to="/brinquedos/criar">Criar</Link> </li>
                  <li> <Link to="/brinquedos/deletar">Deletar</Link> </li>
                  <li> <Link to="/brinquedos/buscar">Buscar</Link> </li>
          </nav>
          <Routes>
              <Route path="/brinquedos" element={<BrinquedoList />} />
              <Route path="/brinquedos/:id" element={<BrinquedoDetails />} />
              <Route path="brinquedos/:id/atualizar" element={<AtualizarBrinquedo />} />
              <Route path="brinquedos/criar" element={<CriarBrinquedo />} />
              <Route path="brinquedos/deletar" element={<DeletarBrinquedo />} />
              <Route path="brinquedos/buscar" element={<BuscarBrinquedoPorId />} />
          </Routes>
      </Router>

  );
};

export default App;
