import React from "react";
import {TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>
        <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth/>
        <TextField id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth/>
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