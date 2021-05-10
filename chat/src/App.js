import React from 'react'
import styled from 'styled-components'

const Container = styled.div ` 
border: 1px solid black;
height: 100vh;
width: 400px;
margin: auto;
box-sizing: border-box;
display: flex;
flex-direction: column;
background-color: #f0dc82;
`
const Input = styled.div ` 
flex-grow: 1;
display: flex;
flex-direction: column;
margin: 0 10px;


`
const Texto = styled.div `
display: flex; 

`
const Nome = styled.input `
width: 100px; 
`
const Mensagem = styled.input `
width: 400px; 
`
const CaixaTexto = styled.div ` 
padding: 6px 10px;
margin:5px;
width: 100px;
word-wrap: break-word;
background-color: #bcffd8;
align-self: flex-start;
border-radius: 5% 0 5px 10px;
`

const PosicaoTexto = styled.div ` 
padding: 6px 10px;
width: 100px;
background-color: #faf3d5;
align-self: flex-end;
word-wrap: break-word;
`
export class App extends React.Component {

  state = {
    pessoas: [
      
    ],
    valorNome: " ",
    valorNome2: " ",
    valorMensagem: " "
  }

  inputNome = (e) => {
    this.setState ({valorNome: e.target.value})
  }
  
  inputMensagem = (e) => {
    this.setState ({valorMensagem: e.target.value})
  }
  
  adicionar = () => {
    const novoNome = {
      nome: this.state.valorNome,
      
      mensagem: this.state.valorMensagem,
      
    };
    const guardarNome = [...this.state.pessoas, novoNome]

    this.setState ({pessoas: guardarNome, valorMensagem: "", valorNome2: this.state.valorNome})
  
  };
  
  listaDeNome = () => this.state.pessoas.map((pessoas, index) => {
       
      
    if (this.state.valorNome2 === pessoas.nome){
         
      return (
       <CaixaTexto key={index}> 
          <strong>{pessoas.nome}</strong>:{pessoas.mensagem}
       </CaixaTexto>
       
      )
    }else{
    return(
      <PosicaoTexto key={index}> 
          <strong>{pessoas.nome}</strong>{pessoas.mensagem}
      </PosicaoTexto>
    )}

  }) 
  render() {
    return (
        <Container>
            <Input/>
            {this.listaDeNome()}
              <Texto>
                <Nome type= "text" placeholder="Nome" value= {this.state.valorNome} onChange= {this.inputNome}/>
                <Mensagem type= "text" placeholder= "Mensagem" value= {this.state.valorMensagem} onChange= {this.inputMensagem}/>
                <button onClick={this.adicionar}>Enviar</button>
              </Texto>
        </Container>
            
    );
  }

}
export default App


