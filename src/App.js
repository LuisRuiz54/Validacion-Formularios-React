import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormulariosCadastro/FormularioCadastro";
import "@fontsource/roboto";

import {Container, Typography } from '@material-ui/core';
class App extends Component {
  render() {
    return (
        <Container component="article" maxWidth="sm">
        <Typography variant="h2" component="h1" align="center">Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>
        </Container>
    );
  }
}

function aoEnviarForm(dados){
    console.log(dados);
}

function validarCPF(cpf){
    if(cpf.length !== 11){
        return {valido:false, texto:"CPF deve ter 11 digitos."}
    }else{
        return {valido:true, texto:"CPF valido!!."}
    }
}

export default App;