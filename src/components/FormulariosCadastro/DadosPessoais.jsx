import React, {useState} from 'react';
import {TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({aoEnviar, validarCPF}) {
    const [nome,setNome] = useState("");
    const [sobrenome,setSobrenome] = useState("");
    const [cpf,setCpf] = useState("");
    const [promocoes,setPromocoes] = useState(true);
    const [novidades,setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

 return (
   <form 
   onSubmit={(event) => {
       event.preventDefault();
       aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
   }}
   >
       <TextField 
       value={nome}
       onChange={(event) => {
         setNome(event.target.value);
       }}
       id="nome" 
       label="Nome" 
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
       variant="outlined" 
       margin="normal" 
       fullWidth/>


       <TextField 
       value={cpf}
       onChange={(event) => {
         setCpf(event.target.value);
       }}
       onBlur={(event) => {
           const ehValido = validarCPF(cpf);
           setErros({cpf:ehValido})
       }}

       error={!erros.cpf.valido}
       helperText={erros.cpf.texto}
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
       Cadastrar
     </Button>
   </form>
 );
}

export default DadosPessoais;