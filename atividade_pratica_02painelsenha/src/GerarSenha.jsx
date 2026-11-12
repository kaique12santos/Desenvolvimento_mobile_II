import React from 'react'
import {View,Button,Alert} from 'react-native'
import styles from '../style/GerarSenha'

export default function GerarSenha({paciente, onAdicionarNaFila}){
  const processaSenha = () =>{
  const idadeNum = parseInt(paciente.idade,10);
  let prioridade = false
  let especialidades = '';
    
    // separando as faixas etarias de prioridade
    if (idadeNum <=12){
      prioridade = true;
      especialidades = 'Pediatria / Neuropediatria'
    }else if (idadeNum <= 18){
      prioridade = false
      especialidades = 'Endocrinologia Pediátrica / Psiquiatria Infantil';
    }else if (idadeNum <=40){
      prioridade = false
      const especialidadePorSexo = paciente.sexo === 'F' ? 'Ginecologia' : 'Urologia';
      especialidades = `Dermatologia / ${especialidadePorSexo}`;
    }else if (idadeNum <=60){
      prioridade=false
      especialidades = 'Cardiologia / Ortopedia'
    }else {
      prioridade = true
      especialidades = 'Geriatria / Oftalmologia'
    }

    // gerando o codigo da senha
    const prefixo = prioridade ? 'P' : 'C'
    const num = Math.floor(Math.random()*100) + 1
    const codigoSenha = `${prefixo}-${num}`;

    // enviando tudo para o chamada.jsx
    onAdicionarNaFila({
      ...paciente,
      prioridade,
      especialidades,
      codigoSenha
    })
  }

  return (
    <View style={styles.container}>
      <Button style={styles.button} title="Gerar Senha" onPress={processaSenha} />
    </View> 
  )
}