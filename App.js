import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ConsultaScreen from './src/screens/ConsultaScreen';
import InicialScreen from './src/screens/InicialScreen';
import CadastroScreen from './src/screens/CadastroScreen';
 
// Criando o Stack Navigator
const Stack = createStackNavigator();
 
export default function App() {
 
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicial">
          <Stack.Screen name="Página Inicial" component={InicialScreen}/>
 
          <Stack.Screen name="Cadastro" component={CadastroScreen}/>
 
          <Stack.Screen name="Consulta" component={ConsultaScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}