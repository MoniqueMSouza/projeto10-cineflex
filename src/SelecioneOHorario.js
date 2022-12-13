import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom"

export default function SelecioneOHorario({ filmeSelecionado, setFilmeSelecionado }) {

  const { filmeId } = useParams()
  const [detalhes, setDetalhes] = useState(undefined)
  const [dia, setDia] = useState()
  const [data, setData] = useState()
  const [hora, setHora] = useState()

function SalvarEstados(index) {
setDia(data.weekday)
setData(data.date)
setHora(index)
console.log(dia)
console.log(data)
console.log(hora)

  }
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

      {detalhes.map((data, index) => {
        return (
          <Sessao data-test="movie-day"key={index}>
            <Data>
              {data.weekday} - {data.date}
            </Data>
            <Horarios>

              {data.showtimes.map((hora, index) => {

                return (
                  <Link to={`/assentos/${hora.id}`}>
                    <Horario data-test="showtime" key={index} onClick={()=> SalvarEstados(index)}> {hora.name}</Horario>
                  </Link>

                )
              })}
            </Horarios>
          </Sessao>
        )
      })}

      <Rodape data-test="footer">
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



`
const Data = styled.div`
font-size: 20px;
  color: #293845;
  margin-left: 24px;
`
const Horarios = styled.div`
margin-top: 23px;
display: flex;


`

const Horario = styled.button`
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
border:none;

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