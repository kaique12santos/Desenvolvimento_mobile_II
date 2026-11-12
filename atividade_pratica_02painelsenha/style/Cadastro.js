import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    // Sombras para dar destaque (iOS e Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0056b3', // Azul escuro
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginTop: 12,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
    color: '#333',
  },
  // Caso queira envolver o botão de confirmar em uma View para dar margem
  botaoContainer: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden', // Mantém o botão dentro das bordas arredondadas
  }
});