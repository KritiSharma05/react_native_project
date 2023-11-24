import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../App'
import Icon from 'react-native-vector-icons/FontAwesome'
import Parent from '../../screens/Parent'

type ShapesProps= NativeStackScreenProps<RootStackParamList,'Shapes'>
const Shapes = ({navigation}:ShapesProps) => {
    const [userInput, setUserInput] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState(''); // Initialize with an empty string
   
    const[mathtopics, setMathtopics] = useState([
      {
        id: 1,
        title: 'Introduction to Shapes ',
        routeName: 'Parent'
      },
      {
        id: 2,
        title: 'Hands on shape exploration',
        routeName: 'Shapes'
      },
      {
        id: 3,
        title: 'Shape hunting and sorting',
        routeName: 'LessonPlan'
      },
      {
        id: 4,
        title: 'Playdough shapes',
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
        <Pressable style={({ pressed }) => [styles.plusButton,{ backgroundColor: pressed ? '#C1D8C3' : '#FFFFFF' },]} onPress={()=>navigation.navigate("Parent")}>
                   <Icon name="plus" size={20} color="#B2533E" />
            </Pressable>
        <View style={styles.base1}>
            <FlatList 
            data={mathtopics}
            renderItem={({ item ,index}) => filterData(item)}/>

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

export default Shapes

const styles = StyleSheet.create({
    textInputContainer: {
        width:230,
        height:50,
        borderColor:"#186F65",
        borderWidth:2,
        paddingHorizontal: 36,
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
            width:"100%",
            height:70,
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
        plusButton: {
            position: 'absolute',
            top: 590, // Adjust the positioning as needed
            left: 300,  // Adjust the positioning as needed
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 25, // Make it a circle
            borderColor: '#B2533E',
            borderWidth: 2,
            zIndex: 1, // Ensures it's above other content
          },
        
})