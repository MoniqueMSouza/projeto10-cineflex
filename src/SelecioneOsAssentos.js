import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"


export default function SelecioneOsAssentos({ filmeSelecionado, name, setName, cpf, setCpf, setNumeroAssento, numeroAssento }) {
  const { idSessao } = useParams()
  const [assentos, setAssentos] = useState(undefined)

  const [assentosSelecionados, setAssentosSelecionados] = useState([])

  function selecionarAssento(clicado) {
    setAssentosSelecionados([...assentosSelecionados, clicado.id])
    setNumeroAssento([...numeroAssento, clicado.name])
    console.log(assentosSelecionados)
    console.log(numeroAssento)

  }

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
    promise.then((res) => {
      console.log(res.data.seats)
      setAssentos(res.data.seats)
    })
    promise.catch((err) => console.log(err.response.data))
  }, [])


  if (assentos === undefined) {
    return <div>Carregando...</div>
  }

  return (

    <ScreenContainer>
      <TituloPag> Selecione o(s) assentos(s) </TituloPag>
      <Assentos>
        {assentos.map(assento =>

          <Assento
            data-test="seat"
            key={assento.id}
            onClick={() => {
              selecionarAssento(assento)
            }}
            verificaçao={assentosSelecionados.includes(assento.id)}
            isAvailable={assento.isAvailable}
          >
            {assento.name}
          </Assento>
        )}
      </Assentos>

      <Legendas>
        <Legenda><Selecionado />Selecionado</Legenda>
        <Legenda><Disponível /> Disponível</Legenda>
        <Legenda><Indisponível /> Indisponível</Legenda>

      </Legendas>
      <form>
        <Detalhes htmlFor="name">Nome do Comprador:</Detalhes>
        <Input
          data-test="client-name"
          id="name"
          type="text"
          placeholder="Digite seu nome..."
          value={name}
          onChange={e => setName(e.target.value)}
          required

        />


        <Detalhes htmlFor="cpf">CPF do Comprador:</Detalhes>
        <Input
          data-test="client-cpf"
          id="cpf"
          type="text"
          placeholder="Digite seu CPF..."
          value={cpf}
          onChange={e => setCpf(e.target.value)}
          required

        />
        <Link to={"/sucesso"}>
          <Button>Reservar assento(s)</Button>
        </Link>
        </form>
        
        <Rodape data-test="footer">
          <div><img src={filmeSelecionado.posterURL} /></div>
          {filmeSelecionado.title}</Rodape>
      
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
display:flex;
justify-content: center;
margin-top: 50px;
margin-bottom: 50px;
font-size:24px;
`
const Assentos = styled.div`
display: flex;
 flex-wrap: wrap;
 margin-top: 20px;

`
const Assento = styled.div`
width:26px;
height:26px;
border: 1px solid #808F9D;
border-radius: 12px;
margin-left: 7px;
margin-bottom:18px ;
display: flex;
align-items: center;
justify-content:center;
background-color: ${props => props.verificaçao ? "#1AAE9E" : props.isAvailable ? "#FBE192": "#C3CFD9"}

`
const Detalhes = styled.div`
color:#293845;
font-size: 18px;
`
const Legendas = styled.div`
display:flex;
align-items:center;
justify-content: space-around;
margin-bottom: 41px;
margin-top:20px;
`
const Legenda = styled.div`
display: flex;
flex-direction: column;
align-items: center;


`
const Selecionado = styled.div`
width:26px;
height:26px;
background-color: #1AAE9E;;
border: 1px solid #0E7D71;
border-radius: 12px;
`
const Disponível = styled.div`
width:26px;
height:26px;
background-color: #C3CFD9;
border: 1px solid #7B8B99;
border-radius: 12px;
`
const Indisponível = styled.div`
width:26px;
height:26px;
background-color: #FBE192;;
border: 1px solid #F7C52B;
border-radius: 12px;
`
const Input = styled.input`
width:327px;
height: 51px;
border: 1px solid #D5D5D5;
margin-bottom: 15px;
  border-radius: 3px;
&::placeholder{
  color:#AFAFAF;
  font-size:18px;
 
  font-style: italic;
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
const Rodape = styled.div`
width: 375px;
height: 117px;
background-color: #DFE6ED;
border: 1px solid #9EADBA;
display: flex;
align-items: center;


div{
width:64px;
height:89px;
margin-left: 25px;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
display: flex;
align-items: center;
justify-content: center ;
margin-right: 14px;

img{
width:48px;
height:72px;

}
}
`