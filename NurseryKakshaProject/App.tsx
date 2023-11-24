import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home';
import Parent from './src/screens/Parent';
import Teacher from './src/screens/Teacher';
import SplashScreen from 'react-native-splash-screen';
import LessonPlan from './src/Teacher/SubHeadings/LessonPlan';
import MathList from './src/Teacher/SubHeadings/MathList';
import Shapes from './src/Teacher/SubHeadings/Shapes';


export type RootStackParamList = {
  Home: undefined;
  Parent: undefined;
  Teacher: undefined;
  LessonPlan:undefined;
  Math:undefined;
  Shapes:undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>()
const App = () => {
  useEffect(()=> {SplashScreen.hide();},[])
  return (
    
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerTintColor: '#B2533E',
        headerStyle: { backgroundColor: 'white' },
        animationTypeForReplace:"push",
        animation:"slide_from_right",
        
      }}  initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Parent" component={Parent} />
      <Stack.Screen name="Teacher" component={Teacher} />
      <Stack.Screen name="LessonPlan" component={LessonPlan} />
      <Stack.Screen name="Math" component={MathList} />
      <Stack.Screen name="Shapes" component={Shapes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  
})