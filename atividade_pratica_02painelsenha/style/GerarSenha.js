import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 8,
    overflow: 'hidden',
    // Sombra leve
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  }
});