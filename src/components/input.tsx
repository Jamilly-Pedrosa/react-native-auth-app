import { TextInput, StyleSheet, TextInputProps } from "react-native";

export function Input(props: TextInputProps) { // Componente de entrada de texto que recebe propriedades (props) como argumento.
    return (
        <TextInput style={styles.input} placeholder={props.placeholder} placeholderTextColor={styles.placeholder.color}/> //O mesmo componnete pode ser usado com propriedades diferentes, como placeholder, que é passado como props.placeholder. 
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 48,
        borderWidth: 1,
        borderColor: '#bcbcbc',
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 12,
    },
    placeholder: {
        color: '#bcbcbc',
    },
})