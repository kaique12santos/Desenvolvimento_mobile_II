import React, {useState} from 'react';
import { ScrollView, StyleSheet, Alert, SafeAreaView } from 'react-native';
import Cadastro from './src/Cadastro.jsx'; 
import GerarSenha from './src/GerarSenha.jsx'
import Chamada from './src/Chamada.jsx'
import Capa from './src/Capa.jsx'
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  // estados iniciais 
  const [dadosTemporarios, setDadosTemporarios] = useState(null); // Pega o que o Cadastro recebeu
  const [filaDeEspera, setFilaDeEspera] = useState([]);       
  const [pacienteNoPainel, setPacienteNoPainel] = useState(null); // Pega quem esta sendo exibido na tv
  const [mostrarCapa, setMostrarCapa] = useState(true);

  // Recebe os dados do Cadastro.jsx
  const handleSalvarCadastro = (dados) => {
    if(!dados.nome || !dados.idade || !dados.sexo) {
      Alert.alert("Erro", "Preencha todos os campos..");
      return;
    }
    setDadosTemporarios(dados);
    Alert.alert("Sucesso", "Paciente validado. Pressione 'Gerar Senha'.");
  };

  //Recebe o paciente finalizado do GerarSenha.js e coloca na fila
  const handleAdicionarNaFila = (pacienteFinalizado) => {
    setFilaDeEspera([...filaDeEspera, pacienteFinalizado]);
    setDadosTemporarios(null);
    Alert.alert("Pronto!", `Senha ${pacienteFinalizado.codigoSenha} adicionada à fila.`);
  };

  // Chamada.jsx
  const handleChamarProximo = () => {
    if (filaDeEspera.length === 0) return;

    const prioritarios = filaDeEspera.filter(paciente => paciente.prioridade === true);
    const comuns = filaDeEspera.filter(paciente => paciente.prioridade === false);

    let pacienteEscolhido;

    if (prioritarios.length > 0) {
      pacienteEscolhido = prioritarios[0]; // Pega o primeiro da fila prioritária
    } else {
      pacienteEscolhido = comuns[0]; // Pega o primeiro da fila comum
    }

    // Exibe na tv
    setPacienteNoPainel(pacienteEscolhido);

    // Remove quem foi chamado da fila de espera principal
    const novaFila = filaDeEspera.filter(
      paciente => paciente.codigoSenha !== pacienteEscolhido.codigoSenha
    );
    setFilaDeEspera(novaFila);
  };

  if (mostrarCapa) {
    return <Capa iniciar={() => setMostrarCapa(false)} />;
  }

  return (
    <LinearGradient 
  colors={['#E6F4F1', '#E8FEFF', '#E3E6FA']} 
  style={{ flex: 1 }}
    >
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        
        <Cadastro dados={handleSalvarCadastro} />

        <GerarSenha 
          paciente={dadosTemporarios} 
          onAdicionarNaFila={handleAdicionarNaFila} 
        />

        <Chamada 
          pacienteAtual={pacienteNoPainel}
          onChamarProximo={handleChamarProximo}
          totalFila={filaDeEspera.length}
        />

      </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  
  container: {
    padding: 20,
    paddingBottom: 50 
  },
});
