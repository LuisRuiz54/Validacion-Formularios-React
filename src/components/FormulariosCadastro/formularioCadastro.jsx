import { Typography } from "@material-ui/core";
import React, {useState} from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";

    function FormularioCadastro({aoEnviar, validarCPF}) {
    const [etapaAtual, setEtapa] = useState(1);

    function formularioAtual(etapa){
        switch (etapa){
            case 0 : 
            return <DadosUsuario/>;
              case 1 : 
                return <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>;
                 case 2 :
                     return <DadosEntrega/>;
             default:
                 return <Typography>Erro ao seleccionar o Formulario</Typography>        
        }
    }

  return (
      <>
      {formularioAtual(etapaAtual)}
      </>
  );
}

//<DadosUsuario/>
//<DadosPessoais  aoEnviar={aoEnviar} validarCPF={validarCPF}/>
//<DadosEntrega/>

export default FormularioCadastro;