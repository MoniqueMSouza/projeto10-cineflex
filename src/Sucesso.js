import styled from "styled-components";
import { Link } from "react-router-dom"

export default function Sucesso({ setFilmeSelecionado, filmeSelecionado, setName, name, setCpf, cpf, setNumeroAssento, numeroAssento }) {

  function resetar() {
    setFilmeSelecionado()
    setName("")
    setCpf("")
    setNumeroAssento([])
  }

  return (

    <ScreenContainer>
      <TituloPag> Pedido feito com sucesso!</TituloPag>

      <Infos data-test="movie-info">
        <h1>Filme e Sessão</h1>
        <h2>{filmeSelecionado.title}</h2>
      </Infos>

      <Infos data-test="seats-info">
        <h1>Ingressos</h1>
        {numeroAssento.map(numero =>
          <h2>Assento {numero}</h2>)}
      </Infos>

      <Infos data-test="client-info">
        <h1>Comprador</h1>
        <h2>{name}</h2>
        <h2>{cpf}</h2>
      </Infos>

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
const Infos = styled.div`
size:22px;
color:#293845;

h1{
font-weight: 700;
font-size: 24px;
color: #293845;
margin-top:16px;
margin-bottom: 7px;
}
h2{
font-weight:400;
font-size:22px;
}
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