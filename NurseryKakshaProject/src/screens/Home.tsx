import { Button, Image, Pressable, StyleSheet, Text, View ,ImageBackground } from 'react-native'
import React from 'react'

import { RootStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Icon1 from 'react-native-vector-icons/MaterialIcons';

type HomeProps= NativeStackScreenProps<RootStackParamList,'Home'>
const Home = ({navigation}:HomeProps) => {
  return (
    
        <View style={styles.base}>
            <View >
                <Text style={styles.title}>Nursery</Text><Text style={styles.title1}>Kaksha</Text>
                
            </View>
            <View style={styles.base1}>
                <View style={styles.buttonspace}>
                    <Pressable style={({ pressed }) => [styles.button,{ backgroundColor: pressed ? '#186F65' : '#FFFFFF' },]} onPress={()=>navigation.navigate("Parent")}>
                        <Text style={styles.buttonText}>
                             Parent
                        </Text>
                    </Pressable>
                </View>
                <Pressable style={({ pressed }) => [styles.button,{ backgroundColor: pressed ? '#186F65' : '#FFFFFF' },]} onPress={()=>navigation.navigate("Teacher")} >
                    <Text style={styles.buttonText}>
                          Teacher
                    </Text>
                </Pressable>
            </View>
        </View>
    
    
  )
}

export default Home

const styles = StyleSheet.create({
    base:{
        backgroundColor:"white",
        width:"100%",
        height:"100%",
        alignItems:"center",
        
    },
    image:{
        height:50,
        width:150,
        position:"relative",
        top:40,
        left:40
    },
    title:{
        fontFamily:"serif",
        fontSize:40,
        color:"#186F65",
        position:"relative",
        top:40,
        right:70,
        
    },
    title1:{
        fontFamily:"serif",
        fontSize:40,
        color:"#B2533E",
        position:"relative",
        bottom:10,
        left:86
    },
   base1:{
    // You may need to specify a border width
    width: 320,
    height: 474,
    flexShrink: 0,
    backgroundColor: 'white',
    position: 'relative', // Corrected the property name
    top: 50,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    elevation: 5, // This adds a shadow on Android
    shadowColor: '#000', // Shadow color (for iOS)
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (for iOS)
    shadowOpacity: 0.5, // Shadow opacity (for iOS)
    shadowRadius: 3,
    
   },
   button:{
    width:200,
    height:100,
    elevation: 5, // This adds a shadow on Android
    shadowColor: '#000', // Shadow color (for iOS)
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (for iOS)
    shadowOpacity: 0.5, // Shadow opacity (for iOS)
    shadowRadius: 3,
    borderRadius:10,
    
   },
   buttonText:{
    fontFamily:"serif",
    fontSize:30,
    position:"relative",
    left:50,
    top:30,
    color:"#B2533E",
   },
   buttonspace:{
    paddingBottom:40
   }
})