import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: { 
    flex: 1,
  },
  image: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  text: { 
    color: '#154353', 
    fontSize: 25, 
    fontWeight: 'bold', 
    textShadowColor: 'rgba(255, 255, 255, 0.8)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});