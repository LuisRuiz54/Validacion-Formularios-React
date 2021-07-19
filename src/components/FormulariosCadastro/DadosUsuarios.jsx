import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import ValidacaoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';


function DadosUsuario({aoEnviar}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacaoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes); 
  
    return(
         <form onSubmit={(event) =>{
             event.preventDefault();
             if(possoEnviar()){
             aoEnviar({email, senha});
            }
         }}
         
         
         >
             <TextField
             value={email}
             onChange = {(event) => {
                setEmail(event.target.value)
             }
            }
             id="email"
             label="email"
             name= "email"
             type="email"
             required
             variant="outlined" 
             margin="normal" 
             fullWidth
             />
             <TextField
              value={senha}
              onChange = {(event) => {
                 setSenha(event.target.value)
              }
             }
             onBlur={validarCampos}
             error={!erros.senha.valido}
             helperText={erros.senha.texto}
             id="senha"
             label="senha"
             name="senha"
             type="password"
             required
             variant="outlined" 
             margin="normal" 
             fullWidth
             />
             <Button type="submit" variant="contained" color="primary">
                 Proximo
             </Button>

         </form>
    );
}

export default DadosUsuario;