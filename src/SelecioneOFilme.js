
import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom"


export default function SelecioneOFilme() {
  const [filmes, setFilmes] = useState(undefined)

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies`)
    promise.then((res) => {
      setFilmes(res.data)
    })

    promise.catch((err) => console.log(err.response.data))
  }, [])

  if (filmes === undefined) {
    return <div>Carregando...</div>
  }

  return (
    <ScreenContainer>
      <TituloPag>Selecione o filme</TituloPag>
      <Filmes >

        {filmes.map(filme =>
          <Link to={`/sessoes/${filme.id}`} key={filme.id}>
            <Filme data-test="movie">
              <img src={filme.posterURL} />
            </Filme>
          </Link>


        )}
      </Filmes>
    </ScreenContainer>




  );
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
const Filmes = styled.div`

 display: flex;
 justify-content: space-around;
 flex-wrap: wrap;
 margin-top: 20px;
  `
const Filme = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 145px;
height:209px;
background-color: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
margin-bottom: 11px;


  img{
  width: 129px;
  height:193px;
  
  }
  `