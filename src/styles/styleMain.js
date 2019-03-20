import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#0a54cc"
    },
    input: {
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#0a54cc"
    },
    formInput: {
        marginTop: 15
    },
    calculateBtn: {
        height: 42,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a54cc",
        borderRadius: 5,
        marginTop: 15
    },
    calculateBtnText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFF"
    }
});

export default styles;