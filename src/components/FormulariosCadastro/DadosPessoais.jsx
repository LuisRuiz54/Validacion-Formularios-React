import React, {useState} from 'react';
import {TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({aoEnviar, validacoes}) {
    const [nome,setNome] = useState("");
    const [sobrenome,setSobrenome] = useState("");
    const [cpf,setCpf] = useState("");
    const [promocoes,setPromocoes] = useState(true);
    const [novidades,setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}, nome:{valido:true, texto:""} })


    function validarCampos(event){
      const {name, value} = event.target;
      const novoEstado = {...erros}
      novoEstado[name] = validacoes[name](value);
      setErros(novoEstado);
    }

    function possoEnviar(){
      for(let campo in erros){
          if(!erros[campo].valido){
              return false 
          }
      }
      return true;
  }

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