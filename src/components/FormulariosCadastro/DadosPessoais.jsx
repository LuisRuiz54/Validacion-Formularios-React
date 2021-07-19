import React, {useState, useContext} from 'react';
import {TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import ValidacaoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({aoEnviar}) {
    const [nome,setNome] = useState("");
    const [sobrenome,setSobrenome] = useState("");
    const [cpf,setCpf] = useState("");
    const [promocoes,setPromocoes] = useState(true);
    const [novidades,setNovidades] = useState(true);
    const validacoes = useContext(ValidacaoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);
    
  
 return (
   <form 
   onSubmit={(event) => {
       event.preventDefault();
       if(possoEnviar()){
       aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
       }
   }}
   >
       <TextField 
       value={nome}
       onChange={(event) => {
         setNome(event.target.value);
       }}
       onBlur={validarCampos}
       error={!erros.nome.valido}
       helperText={erros.nome.texto}
       id="nome" 
       label="Nome" 
       name= "nome"
       variant="outlined" 
       margin="normal" 
       fullWidth/>
       

       <TextField 
       value={sobrenome}
       onChange={(event) => {
         setSobrenome(event.target.value);
       }}
       id="sobrenome" 
       label="Sobrenome" 
       name= "sobrenome"
       variant="outlined" 
       margin="normal" 
       fullWidth/>


       <TextField 
       value={cpf}
       onChange={(event) => {
         setCpf(event.target.value);
       }}
       onBlur={validarCampos}    

       error={!erros.cpf.valido}
       helperText={erros.cpf.texto}
       name = "cpf"
       id="cpf" 
       label="Cpf" 
       variant="outlined"
       margin="normal" 
       fullWidth/>


    <FormControlLabel control={<Switch checked={promocoes} onChange={(event) => {
      setPromocoes(event.target.checked)
    }}
      name="Promocoes" color="primary" />}
      label="Promocoes"/>
     
     <FormControlLabel control={<Switch checked={novidades} onChange={(event) => {
      setNovidades(event.target.checked)
    }}
      name="Novidades" color="secondary" />}
      label="Novidades"/>

     <Button type="submit" variant="contained" color="primary">
       Proximo
     </Button>
   </form>
 );
}

export default DadosPessoais;