import { StyleSheet } from "react-native";

export default StyleSheet.create({
    containerBase: {
        flex: 1,
        backgroundColor: "#2e2e2e",
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: "center",
        padding: 20,
        paddingBottom: 40,
    },
    titulo: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#f5c242", // Dourado Warcraft
        marginBottom: 15,
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: 1,
    },
    textoNormal: {
        fontSize: 16,
        color: "#dcdcdc",
        textAlign: "justify",
        marginBottom: 20,
        lineHeight: 24,
    },
   
    imagemCapa: {
        width: '100%', 
        aspectRatio: 16 / 9,
        borderRadius: 8,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: "#f5c242",
        backgroundColor: "#1a1a1a",// Fundo de fallback
    },
    botao: {
        backgroundColor: "#444",
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 6,
        width: "100%",
        alignItems: "center",
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#f5c242",
    },
    // Estilos específicos para os botões das facções
    botaoAlianca: {
        backgroundColor: "#004a93", // Azul da Aliança
        borderColor: "#d1a115",
    },
    botaoHorda: {
        backgroundColor: "#8c1616", // Vermelho da Horda
        borderColor: "#4a0b0b",
    },
    botaoDeuses: {
        backgroundColor: "#4a148c", // Roxo do Void/Deuses Antigos
        borderColor: "#8e24aa",
    },
    textoBotao: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    
    imagemFundo: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 25,
        
    },
    tituloCapa: {
        fontSize: 23.5,
        fontWeight: "bold",
        color: "#f5c242",
        textAlign: "center",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        marginBottom: 30,
    },
});