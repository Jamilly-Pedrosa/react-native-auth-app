import { View, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform, Alert} from 'react-native'
import { Link } from 'expo-router'

import { Input} from '@/components/input'
import { Button } from '@/components/Button'

export default function Index() { //default export da função Index, que é o componente principal da aplicação.
    
    function handleLogin() { //handleLogin é uma função que será chamada quando o usuário clicar no botão de login.  
        Alert.alert('Entrar', 'Função de login ainda não implementada.');
    }

    return ( //Retorna apenas um componente View.
        <KeyboardAvoidingView 
            style={{flex: 1}} 
            behavior={Platform.select({ios: 'padding', android: 'height'})}
        >
            <ScrollView 
                contentContainerStyle={{flexGrow: 1}} 
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false} //Oculta a barra de rolagem vertical.
            > 
                <View style={styles.container}>  
                    <Image 
                        source={require("@/assets/image1.png")}
                        style={styles.ilustration}
                    />

                    <Text style={styles.title}>Entrar</Text>
                    <Text style={styles.subtitle}>Acesse sua conta com e-mail e senha.</Text>

                <View style={styles.form}>
                    <Text>E-mail</Text>
                    <Input placeholder="Digite seu e-mail" keyboardType="email-address" /> 
                    
                    <Text>Senha</Text>
                    <Input placeholder="Digite sua senha" secureTextEntry/> 
                    
                    <Button label="Entrar" onPress={handleLogin}/>              
                </View>

                <Text style={styles.footerText}>
                    Não possui uma conta?  
                    <Link href="/signup" style={styles.link}>
                        Cadastre-se aqui
                    </Link>
                </Text>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

// Define os estilos para o componente
const styles = StyleSheet.create({
    container: {
        flex: 1, 

        backgroundColor: '#fdfdfd',

        padding: 32,
    },

    ilustration: {
        width: '100%',
        height: 300,
        resizeMode: 'contain', //resizeMode: 'contain' mantém a proporção da imagem, ajustando-a para caber dentro do espaço disponível.
        marginTop: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: '900',
        textAlign: 'center',
        marginTop: 12,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 16,
    },
    form: {
        marginTop: 24,
        gap: 12,
    },
    link: {
        color: '#4f0eb1',
        fontWeight: '500',
    },
    footerText: {
        textAlign: 'center',
        marginTop: 18,
        marginBottom: 18,
        color: '#b7b7b7',
    }
})