import { StyleSheet, Platform} from "react-native";


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: "#000"
    },
});









export default styles;
