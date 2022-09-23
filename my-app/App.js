import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'

import Restaurantes from "./pages/Restaurantes/"
import Descricao from "./pages/Descricao/"

const Stack = createNativeStackNavigator()


export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
 
    <Stack.Screen name = "IFooy" component = {Restaurantes}/>
      <Stack.Screen name = "Descricao" component = {Descricao} options={{ title: 'Descrição' }}/>

    </Stack.Navigator>
   </NavigationContainer>
  );
}