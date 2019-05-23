import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {        
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
        borderColor: "#0a54cc",
        paddingLeft: 15,
        paddingRight: 15
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
    },
    clearBtn: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        padding: 8
    },
    clearBtnText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#0a54cc"
    },
    headerTitle: {
        fontSize: 19,
        color: "#FFF",
        fontWeight: "bold"
    },
    headerColor: {
        backgroundColor: "#0a54cc"
    },
    bodyTitle: {
        paddingLeft: 15
    },
    grid: {
        marginTop: 10,
        paddingBottom: 20
    },
    gridHistoric: {
        paddingBottom: 20
    },
    items: {
        flex: 1,
        flexWrap: "wrap",
        alignItems: "center",
        borderColor: "#0a54cc",
        borderWidth: 1,
        margin: 4,
        flexGrow: 0,
        padding: 10,
        flexBasis: 0,
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between"
    },
    item: {
        
    },
    itemText: {
        color: "#0a54cc"
    },
    setHistoricBtn: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
    }
});

export default styles;