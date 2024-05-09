import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const Add = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Add</Text>
      </View>
      <TouchableOpacity style={styles.touchable}>
        <Image source={require('../images/ll.jpg')} style={styles.image} />
      </TouchableOpacity>
      <TextInput placeholder="Enter Item Name" placeholderTextColor='black' style={styles.xx}/>
      <TextInput placeholder="Enter Item Desc" placeholderTextColor='black' style={styles.xx}/>
      <TextInput placeholder="Enter Item Price" placeholderTextColor='black' style={styles.xx}
      keyboardType='number-pad'/>
       <TouchableOpacity style={styles.blueButton}>
        <Text style={styles.buttonText}>Post Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems: 'start',
  },
  header: {
    width: 330,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Reduced marginBottom for demonstration
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  touchable: {
    width: 150, // Increased width for demonstration
    height: 150, // Increased height for demonstration
    alignSelf: 'center',
    marginTop: 20,
  
    justifyContent: 'center', // Added justifyContent for centering the image
    alignItems: 'center', // Added alignItems for centering the image
  },
  image: {
    width: '100%', // Set width to 100% to fit the TouchableOpacity
    height: '100%', // Set height to 100% to fit the TouchableOpacity
    resizeMode: 'contain',
  },
  xx:
  {
    width:300,
    height:50,
    borderWidth:1,
    alignSelf:'center',
    borderRadius:5,
    marginTop:20,paddingLeft:20,
  },
  blueButton: {
    backgroundColor: 'blue',
    width: 300,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  }
});

export default Add;
