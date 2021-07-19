function validarCPF(cpf){
    if(cpf.length !== 11){
        return {valido:false, texto:"CPF deve ter 11 dígitos."}
    }else{
        return {valido:true, texto:"CPF valido!."}
    }
}

function validarSenha(senha){
    if(senha.length <4 || senha.length > 12){
        return {valido:false, texto:"Senha deve ter entre 4 e 12 dígitos."}
    }else{
        return {valido:true, texto:"Senha valida!."}
    }
}

export {validarCPF, validarSenha};