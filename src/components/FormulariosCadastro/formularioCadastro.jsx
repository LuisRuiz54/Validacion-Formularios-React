import React, {useState} from "react";
import {TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
     const [nome,setNome] = useState("");
     const [sobrenome,setSobrenome] = useState("");


  return (
    <form 
    onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome);
    }}
    >
        <TextField 
        value={nome}
        onChange={(event) => {
            let tmpNome = event.target.value;
            if (tmpNome.length >= 3) {
             tmpNome = tmpNome.substr(0, 3);
            }
            setNome(tmpNome);
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


        <TextField id="cpf" label="Cpf" variant="outlined" margin="normal" fullWidth/>

     <FormControlLabel control={<Switch 
       name="Promocoes" defaultChecked color="primary" />}
       label="Promocoes"/>
      
      <FormControlLabel control={<Switch 
       name="Novidades" defaultChecked color="secondary" />}
       label="Novidades"/>

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;