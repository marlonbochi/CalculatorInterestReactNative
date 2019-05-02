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

    headerTitle: {
        fontSize: 19,
        color: "#FFF",
        fontWeight: "bold"
    },
    headerColor: {
        backgroundColor: "#0a54cc"
    },
    grid: {
        marginTop: 10
    },
    items: {
        flex: 1,
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: "#0a54cc",        
        margin: 4,
        flexGrow: 0,
        padding: 10,
        flexBasis: 0,
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between",
        color: "#FFFFFF"
    },
    item: {
        
    },
    itemText: {
        color: "#FFFFFF"
    }
});

export default styles;