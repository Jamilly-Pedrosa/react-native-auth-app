import { Stack } from "expo-router"; //Importa o componente Stack do pacote expo-router, que é usado para criar uma pilha de navegação na aplicação.

export default function Layout() { //default export da função Layout, que é o componente principal da aplicação.
    return <Stack screenOptions={{ headerShown: false }} /> 
}