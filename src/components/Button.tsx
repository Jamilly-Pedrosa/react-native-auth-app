import {Text, StyleSheet, TouchableOpacity, TouchableOpacityProps} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
    label: string;
}

export function Button({ label, ...rest }: ButtonProps) { //rest é um operador que permite que você passe todas as propriedades restantes para o componente TouchableOpacity. Isso é útil quando você quer passar propriedades adicionais para o componente, como onPress, style, etc.
    return (
        <TouchableOpacity style={style.container} activeOpacity={0.8} {...rest}>
            <Text style={style.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 44,

        backgroundColor: '#4f0eb1',
        alignItems: 'center',
        justifyContent: 'center',

        padding: 8,
        borderRadius: 8,
        
    },
    label: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500',
    },
})