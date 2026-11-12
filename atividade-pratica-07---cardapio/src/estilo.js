import { StyleSheet } from "react-native";

export default StyleSheet.create({
    containerBase: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
        textAlign: "center",
    },
    itemCard: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    nomeItem: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#424242",
    },
    precoItem: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#e53935",
    }
});