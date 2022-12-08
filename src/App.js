import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelecioneOFilme from "./SelecioneOFilme";
import SelecioneOHorario from "./SelecioneOHorario";
import SelecioneOsAssentos from "./SelecioneOsAssentos";
import Sucesso from "./Sucesso";
import GlobalStyle from "./GlobalStyle";
import styled from 'styled-components';

export default function App() {
  return (

    <BrowserRouter>
      <ScreenContainer>
        <Header><p>CINEFLEX</p></Header>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SelecioneOFilme />} />
          <Route path="/sessoes/37" element={<SelecioneOHorario />} />
          <Route path="/assentos/240" element={<SelecioneOsAssentos />} />
          <Route path="/sucesso" element={<Sucesso />} />
        </Routes>
      </ScreenContainer>
    </BrowserRouter>
  );
}

const ScreenContainer = styled.div`
 background-color: #FB6B6B;
  width: 100vw;
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
  width: 100vw;
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
