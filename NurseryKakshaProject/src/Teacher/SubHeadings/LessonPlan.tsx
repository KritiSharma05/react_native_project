import { FlatList, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../App'
import Icon from 'react-native-vector-icons/FontAwesome'

type LessonProps= NativeStackScreenProps<RootStackParamList,'LessonPlan'>
const LessonPlan = ({navigation}:LessonProps) => {
  const [userInput, setUserInput] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState(''); // Initialize with an empty string
  
  const[mathtopics, setMathtopics] = useState([
    {
      id: 1,
      title: 'Numbers',
      routeName: 'Parent'
    },
    {
      id: 2,
      title: 'Shapes',
      routeName: 'Shapes'
    },
    {
      id: 3,
      title: 'Color',
      routeName: 'LessonPlan'
    },
    {
      id: 4,
      title: 'Alphabets',
      routeName: 'Parent'
    },
    {
      id: 5,
      title: 'Body Parts',
      routeName: 'Teacher'
    },
    {
      id: 6,
      title: 'Days',
      routeName: 'Parent'
    },
    {
      id: 7,
      title: 'Months',
      routeName: 'Teacher'
    },
    {
      id: 8,
      title: 'Weather',
      routeName: 'Parent'
    },
    {
      id: 9,
      title: 'Animals',
      routeName: 'Teacher'
    },
    {
      id: 10,
      title: 'Emotions',
      routeName: 'Parent'
    },
    {
      id: 11,
      title: 'Fruits',
      routeName: 'Teacher'
    },
    {
      id: 12,
      title: 'Vegetables',
      routeName: 'Parent'
    },
    
    
  ]);
   
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  
  const handleSort = (option: string) => {
    // Implement your sorting logic here
    let sortedTopics = [...mathtopics];
  
    if (option === 'sortByName') {
      sortedTopics.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === 'sortByColor') {
      sortedTopics.sort((a, b) => b.title.localeCompare(a.title));
    }
  
    // Update the state with the sorted topics
    setMathtopics(sortedTopics);
  
    // Close the modal
    toggleModal();
  };
  
  

  

  const filterData = (item: {
      [x: string]: any; id?: number; title: any; 
}) => {
    if (userInput === '') {
      return (
        <View style={styles.itemContainer}>
         <Pressable style={({ pressed }) => [styles.button,{ backgroundColor: pressed ? '#C1D8C3' : '#FFFFFF' },]} onPress={()=>navigation.navigate(item.routeName)}>
                  <Text style={styles.buttonText}>
                      {item.title}
                  </Text>
            </Pressable>      
        </View>
      );
    }
    if (item.title.includes(userInput)) {
      return (
        <View style={styles.itemContainer}>
          <Pressable style={({ pressed }) => [styles.button,{ backgroundColor: pressed ? '#C1D8C3' : '#FFFFFF' },]} onPress={()=>navigation.navigate(item.routeName)}>
                  <Text style={styles.buttonText}>
                      {item.title}
                  </Text>
            </Pressable>  
        </View>
      );
    }
  };

  return (
    <View style={styles.base}>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder='Enter your Search here....'
          onChangeText={(text) => setUserInput(text)}
        />
        <Pressable
          style={({ pressed }) => [styles.filterbutton,
            
            { backgroundColor: pressed ? '#C1D8C3' : '#FFFFFF' },
          ]} onPress={toggleModal}
        
        >
             <Icon name="sort" size={20} color="#B2533E" />
        </Pressable>    
        
      </View>
      <View style={styles.base1}>
      <FlatList 
        data={mathtopics}
        numColumns={2}
        renderItem={({ item ,index}) => filterData(item)}
        
      />
      </View>
      {/* Modal for sorting options */}
    <Modal visible={isModalVisible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Pressable  onPress={() => handleSort('sortByName')}>
            <Text>Asc order</Text>
          </Pressable>
          <View style={styles.line}></View>
          <Pressable   onPress={() => handleSort('sortByColor')}>
            <Text>Desc order</Text>
          </Pressable>
          <View style={styles.line}></View>
          <Pressable  onPress={toggleModal}>
            <Text>Cancel</Text>
          </Pressable>
        </View>
      </View>
      </Modal>
      
    </View>
    
  )
}

export default LessonPlan

const styles = StyleSheet.create({
  textInputContainer: {
    width:240,
    height:60,
    borderColor:"#186F65",
    borderWidth:2,
    paddingHorizontal: 36,
    paddingVertical: 8,
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop:50,
    right:40
  },
  filterbutton:{
    width:50,
    height:50,
    bottom:35,
    left:230,
    
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    marginHorizontal: 16,
    backgroundColor: 'white',
    paddingVertical: 16,
    borderRadius: 6,
  },
  base:{
    backgroundColor:"white",
    width:"100%",
    height:"100%",
    alignItems:"center",
    
},
base1:{
    // You may need to specify a border width
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    padding: 16,
    
    },
    button:{
        width:135,
        height:80,
        elevation: 5, // This adds a shadow on Android
        shadowColor: '#000', // Shadow color (for iOS)
        shadowOffset: { width: 0, height: 2 }, // Shadow offset (for iOS)
        shadowOpacity: 0.5, // Shadow opacity (for iOS)
        shadowRadius: 3,
        borderRadius:10,
        alignContent:"center",
        justifyContent:"center"
        },
        buttonText:{
        fontFamily:"serif",
        fontSize:20,
        color:"#B2533E",
        textAlign:"center"
        },
    modalContainer:{
      borderColor:"#186F65",
      borderWidth:1,
      width:80,
      top:110,
      left:270,
      backgroundColor:"white",
    },
    modalContent:{
       left :5,
    },
    line:{
      width:"100%",
      height:2,
      backgroundColor:"#186F65",
      right:5
    },
    
       

})