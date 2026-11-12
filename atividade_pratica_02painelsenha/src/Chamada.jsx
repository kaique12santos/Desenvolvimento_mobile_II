import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../style/Chamada'

export default function Chamada({ pacienteAtual, onChamarProximo, totalFila }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Painel de Chamada</Text>

      <View style={styles.painelVisor}>
        {pacienteAtual ? (
          <>
            <Text style={styles.senhaDestaca}>{pacienteAtual.codigoSenha}</Text>
            <Text style={styles.nome}>Paciente: {pacienteAtual.nome}</Text>
            <Text style={styles.especialidade}>Especialidade: {pacienteAtual.especialidades}</Text>
            <Text style={[styles.prioridade, { color: pacienteAtual.prioridade ? 'red' : 'blue' }]}>
              {pacienteAtual.prioridade ? '🔴 ATENDIMENTO PREFERENCIAL' : '🔵 ATENDIMENTO GERAL'}
            </Text>
          </>
        ) : (
          <Text style={styles.vazio}>Nenhum paciente chamado no momento.</Text>
        )}
      </View>

      <Button
        title={`Chamar Próximo (Aguardando: ${totalFila})`}
        onPress={onChamarProximo}
        color="#28a745"
        disabled={totalFila === 0}
      />
    </View>
  );
}
