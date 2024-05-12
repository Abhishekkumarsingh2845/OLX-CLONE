import {View, Text, StyleSheet, Image, PermissionsAndroid} from 'react-native';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {type} from 'os';

const Add = () => {
  const [photo, setPhoto] = useState({
    assets: [
      {
        fileName: '',
        fileSize: 2242730,
        height: 4000,
        originalPath: '',
        type: 'image/jpeg',
        uri: '',
        width: 2250,
      },
    ],
  });
  const[name,setName]=useState('');
  const[price,setPrice]=useState('');
  const[desc,setdesc]=useState('');

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        opencamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const opencamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    if(!result.didCancel)
      {
        setPhoto(result)
      }
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Add</Text>
      </View>
      <TouchableOpacity
        style={styles.touchable}
        onPress={requestCameraPermission}>
        {photo.assets[0].uri == '' ? (
          <Image source={require('../images/ll.jpg')} style={styles.image} />
        ) : (
          <Image source={{uri: photo.assets[0].uri}} style={styles.image} />
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="Enter Item Name"
        placeholderTextColor="black"
        style={styles.xx}
        value={name}
        onChangeText={txt=>setName(txt)}
      />
      <TextInput
        placeholder="Enter Item Desc"
        placeholderTextColor="black"
        style={styles.xx}
        value={desc}
        onChangeText={txt=>setdesc(txt)}
      />
      <TextInput
        placeholder="Enter Item Price"
        placeholderTextColor="black"
        style={styles.xx}
        keyboardType="number-pad"
        value={price}
        onChangeText={txt=>setPrice(txt)}
      />
      <TouchableOpacity style={styles.blueButton}>
        <Text style={styles.buttonText}>Post Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
  xx: {
    width: 300,
    height: 50,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 20,
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
  },
});

export default Add;
