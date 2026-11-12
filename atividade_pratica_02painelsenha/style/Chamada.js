import { StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: { 
    marginVertical: 20, 
    padding: 15, 
    borderWidth: 2, 
    borderColor: '#333', 
    borderRadius: 8 
  },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  painelVisor: { 
    backgroundColor: '#f0f0f0', 
    padding: 20, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginBottom: 20 
  },
  senhaDestaca: { fontSize: 45, fontWeight: 'bold', color: '#333' },
  nome: { fontSize: 20, marginTop: 10 },
  especialidade: { fontSize: 16, color: '#555', marginTop: 8, textAlign: 'center' },
  prioridade: { fontSize: 16, fontWeight: 'bold', marginTop: 15 },
  vazio: { fontSize: 16, fontStyle: 'italic', color: '#777' }
});