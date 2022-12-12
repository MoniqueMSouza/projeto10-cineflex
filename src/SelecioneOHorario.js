import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom"

export default function SelecioneOHorario({filmeSelecionado, setFilmeSelecionado}) {

  const { filmeId } = useParams()
  const [detalhes, setDetalhes] = useState(undefined)

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmeId}/showtimes`)
    promise.then((res) => {
      setDetalhes(res.data.days)
      console.log(res.data.days)
      setFilmeSelecionado(res.data)
      console.log(res.data)
      
    })
    promise.catch((err) => console.log(err.response.data))
  }, [])

  if (detalhes === undefined) {
    return <div>Carregando...</div>
  }
  return (
    <ScreenContainer>
      <TituloPag> Selecione o horário</TituloPag>

      {detalhes.map((i, index) => {
        return (
          <Sessao key={index}>

            <h3>{i.weekday} - {i.date}</h3>

            <Horarios>

              {i.showtimes.map((hour, index) => {

                return (
                  <Link to={`/assentos/${hour.id}`}>
                    <Horario key={index} onClick={() => console.log(index)}> {hour.name}</Horario>
                  </Link>

                )
              })}
            </Horarios>
          </Sessao>
        )
      })}

      <Rodape>
        <div><img src={filmeSelecionado.posterURL} /></div>
         {filmeSelecionado.title}</Rodape>
      </ScreenContainer>
  )


}
const ScreenContainer = styled.div`
width:375px;
height:100%;
`
const TituloPag = styled.div`
display:flex;
justify-content: center;
margin-top: 50px;
margin-bottom: 50px;
font-size:24px;
`
const Sessao = styled.div`
margin-bottom: 23px;

h3{
  font-size: 20px;
  color: #293845;
  margin-left: 24px;
}

`
const Horarios = styled.div`
margin-top: 23px;
display: flex;


`

const Horario = styled.div`
width:82px;
height: 43px;
background-color:#E8833A;
border-radius: 3px;
margin-left: 24px;
display: flex;
align-items: center;
justify-content: center;
color:white;
text-decoration:none;

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