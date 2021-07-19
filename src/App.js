import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormulariosCadastro/FormularioCadastro";
import "@fontsource/roboto";

import {Container, Typography } from '@material-ui/core';
import {validarCPF, validarSenha} from './models/cadastro';
import ValidacaoesCadastro from "./contexts/ValidacoesCadastro";


class App extends Component {
  render() {
    return (
        <Container component="article" maxWidth="sm">
        <Typography variant="h2" component="h1" align="center">Formulário de cadastro</Typography>
        <ValidacaoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha, nome:validarSenha}}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacaoesCadastro.Provider>
       </Container>
    );
  }
}

function aoEnviarForm(dados){
    console.log(dados);
}

export default App;