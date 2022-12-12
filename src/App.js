import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelecioneOFilme from "./SelecioneOFilme";
import SelecioneOHorario from "./SelecioneOHorario";
import SelecioneOsAssentos from "./SelecioneOsAssentos";
import Sucesso from "./Sucesso";
import GlobalStyle from "./GlobalStyle";
import styled from 'styled-components';
import { useState } from "react";

export default function App() {
  const [filmeSelecionado, setFilmeSelecionado] = useState()

  return (

    <BrowserRouter>
      <ScreenContainer>
        <Header><p>CINEFLEX</p></Header>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SelecioneOFilme/>} />
          <Route path="/sessoes/:filmeId" element={<SelecioneOHorario setFilmeSelecionado={setFilmeSelecionado} filmeSelecionado={filmeSelecionado}/>} />
          <Route path="/assentos/:idSessao" element={<SelecioneOsAssentos filmeSelecionado={filmeSelecionado}/>} />
          <Route path="/sucesso" element={<Sucesso />} />
        </Routes>
      </ScreenContainer>
    </BrowserRouter>
  );
}

const ScreenContainer = styled.div`
 background-color: #E5E5E5;
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 67px;
  padding: 0px;
  padding-bottom: 200px;
  font-family: 'Roboto', sans-serif;

  
 `
const Header = styled.div`
  background-color: #C3CFD9;
  width: 100%;
  height: 67px;
  display: flex;
  position:fixed;
  top:0;
  align-items: center;
  justify-content: center;


  
    P{
      font-weight:400;
      font-size:34px;
      color:#E8833A;
    }
`
