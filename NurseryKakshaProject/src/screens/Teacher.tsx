import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

type TeacherProps= NativeStackScreenProps<RootStackParamList,'Teacher'>
const Teacher = ({navigation}:TeacherProps) => {
  return (
    <View style={styles.base}>
            <View >
                <Text style={styles.title1}>Teacher</Text>
                
            </View>
            <View style={styles.base1}>
              <View style={styles.buttonspace}>
                <Pressable style={({ pressed }) => [styles.button,{ backgroundColor: pressed ? '#186F65' : '#FFFFFF' },]} onPress={()=>navigation.navigate("LessonPlan")}>
                  <Text style={styles.buttonText}>
                      Lesson Plan
                  </Text>
                </Pressable>
              </View>
              <Pressable style={({ pressed }) => [styles.button,{ backgroundColor: pressed ? '#186F65' : '#FFFFFF' },]} onPress={()=>navigation.navigate("Teacher")} >
                <Text style={styles.buttonText}>
                    Fun Activity 
                  </Text>
              </Pressable>
            </View>
        </View>

  )
}

export default Teacher

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

title1:{
    fontFamily:"serif",
    fontSize:50,
    color:"#186F65",
    position:"relative",
    top:30,
    left:5
},
base1:{
// You may need to specify a border width
width: 320,
height: 474,
flexShrink: 0,
backgroundColor: 'white',
position: 'relative', // Corrected the property name
top: 80,
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
width:220,
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
fontSize:28,
position:"relative",
left:30,
top:30,
color:"#B2533E",


},
buttonspace:{
paddingBottom:40
}
})