import styled from "styled-components";
import { Link } from "react-router-dom"

export default function Sucesso({ setFilmeSelecionado, filmeSelecionado,setName, name, setCpf, cpf, setNumeroAssento, numeroAssento }) {

  function resetar(){
    setFilmeSelecionado()
    setName("")
    setCpf("")
    setNumeroAssento([])
  }

  return (

    <ScreenContainer>
      <TituloPag> Pedido feito com sucesso!</TituloPag>
      <div data-test="movie-info">
        <Dados>Filme e Sessão</Dados>
        <div>{filmeSelecionado.title}</div>
      </div>
      <div data-test="seats-info">
        <Dados>Ingressos</Dados>
        {numeroAssento.map(numero =>
          <div>Assento {numero}</div>)}
      </div>
      <div data-test="client-info">
        <Dados>Comprador</Dados>
        <div>{name}</div>
        <div>{cpf}</div>
      </div>
      <Link to={"/"}>
        <Button data-test="go-home-btn" onClick={resetar}>Voltar pra Home</Button>
      </Link>

    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
width:375px;
height:100%;
padding-left:10px;
padding-right:10px;
box-sizing: border-box;
`
const TituloPag = styled.div`
font-weight: 700;
display:flex;
justify-content: center;
margin-top: 50px;
margin-bottom: 50px;
font-size:24px;
color:#247A6B;
`

const Dados = styled.div`
font-weight: 700;
font-size: 24px;
color: #293845;
margin-top:16px;
margin-bottom: 7px;
`
const Button = styled.button`
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
margin-top:50px;
margin-left: 60px;
margin-bottom:30px;
`