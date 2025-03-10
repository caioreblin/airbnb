import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    inputField: {
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ababab",
        borderRadius: 8,
        backgroundColor: "#fff",
    },
    btn: {
        backgroundColor: Colors.primary,
        height: 50,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    btnText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "mon-b",
    },
    btnIcon: {
        position: "absolute",
        left: 16,
    },
    footer: {
        position: "absolute",
        height: 100,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: Colors.grey,
    },
});
