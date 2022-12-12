import styled from "styled-components";

export default function Sucesso() {
    return (
      
  
  <ScreenContainer>
      <TituloPag> Pedido feito com sucesso!</TituloPag> 
      
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