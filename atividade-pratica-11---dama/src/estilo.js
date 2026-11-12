import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'rgba(44, 44, 44, 0.40)', 
    borderRadius: 12,
    padding: 25,
    width: '100%',
    alignItems: 'center',
    elevation: 4,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#f5c242', 
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f5c242',
    marginBottom: 15,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#f5c242',
    textAlign: 'justify',
    fontWeight: 'bold',
    marginBottom: 12,
    lineHeight: 22,
  },
  avisoAcademico: {
    fontSize: 14,
    color: '#ff8a80',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    padding: 12,
    backgroundColor: '#3e2723',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ff5252',
  },
  botao: {
    backgroundColor: '#3e2723', // Marrom rústico
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 8,
    width: '90%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f5c242',
  },
  textoBotao: {
    color: '#f5c242',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  
  // ================= TELA DO JOGO =================
  areaJogo: {
    flex: 1,
    backgroundColor: '#111', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  placarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    backgroundColor: '#2c2c2c',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#f5c242',
  },
  textoPlacar: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f5c242',
  },
  turnoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  tabuleiro: {
    width: 360, 
    height: 360,
    flexDirection: 'column',
    paddingTop: 36,    // Foge da logo da Horda no topo
    paddingBottom: 40, // Foge do brasão da Aliança embaixo
    paddingLeft: 38,   // Foge da borda esquerda
    paddingRight: 38,  // Foge da borda direita
  },
  
  linha: {
    flexDirection: 'row',
    flex: 1,
  },
  casaClara: {
    flex: 1,
    backgroundColor: 'transparent', 
  },
  casaEscura: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  casaSelecionada: {
    borderWidth: 3,
    borderColor: '#ffeb3b',
    backgroundColor: 'rgba(255, 235, 59, 0.3)', 
  },
  
  // ================= DESIGN DAS PEÇAS =================
  peca: {
    // Reduzi de 85% para 70% para a peça caber folgada dentro do quadrado desenhado
    width: '80%',
    height: '80%', 
    borderRadius: 20, 
    borderWidth: 2, // Borda um pouco mais fina
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  pecaAlianca: {
    borderColor: '#1976d2', // Borda azul
    backgroundColor: '#002244',
  },
  pecaHorda: {
    borderColor: '#d32f2f', // Borda vermelha
    backgroundColor: '#4a0b0b',
  },
  pecaImagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pecaDama: {
    borderWidth: 4,
    borderColor: '#ffeb3b', 
  },

  // ================= OVERLAY DE VITÓRIA =================
  overlayVitoria: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    padding: 20,
  },
  textoVitoria: {
    fontSize: 22,
    color: '#f5c242',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  }
});