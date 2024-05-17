import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = () => {
  const data = [
    {title: 'car', icon: require('../images/car.png')},
    {title: 'Bicycle', icon: require('../images/bicycle.png')},
    {title: 'Furniture', icon: require('../images/furniture.png')},
    {title: 'laptop', icon: require('../images/laptop.png')},
    {title: 'smartPhone', icon: require('../images/smartphone.png')},
    {title: 'Home', icon: require('../images/home.png')},
    // Add more items as needed
  ];
  const renderItem = ({item, index}) => (
    <TouchableOpacity style={styles.touch}>
      <Image source={item.icon} style={styles.icn} />
      <Text
        style={{
          fontSize: 15,
          fontWeight: '600',
          color: 'black',
          marginTop: 10,
        }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Olx Clone</Text>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="search Items here..."
          style={styles.input}
          placeholderTextColor="gray"
        />
        <Image source={require('../images/search.png')} style={styles.icon} />
      </View>
      <Text style={styles.look}>What are you Lookings for?</Text>
      <View style={{marginTop: 20}}>
        <FlatList
          numColumns={3}
          data={data} // Array of data to be rendered
          renderItem={renderItem} // Function to render each item
        />
      </View>

      <Text style={styles.aa}>Posted Item</Text>
      <FlatList
        data={[1, 1, 1, 1, 1]}
        renderItem={({item,index}) => {
          return <TouchableOpacity style={styles.i}></TouchableOpacity>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logo: {
    fontSize: 30,
    fontWeight: '800',
    color: 'blue',
    marginTop: 20,
    marginLeft: 20,
  },
  searchBox: {
    alignSelf: 'center',
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
  },
  input: {
    fontSize: 17,
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 260,
    marginTop: -35,
  },
  look: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    marginTop: 30,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  icn: {
    width: 50,
    height: 50,
  },
  touch: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#DEDEDEF8',
    margin: 3,
  },
  aa: {
    fontSize: 22,
    color: 'black',
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 179,
    marginTop:1,
    textAlign: 'center',
  },
  i: {
    width: '90%',
    height:100,
    backgroundColor:"#fff",
    alignSelf:'center',
    marginTop:10,

  },
});

export default Home;
