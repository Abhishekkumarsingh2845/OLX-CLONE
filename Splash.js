import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Splash = ({navigation}) => {
  useEffect(()=>
    {
      setTimeout(()=>{
        navigation.navigate('HomeScreen');
      },2000)
     
    },[]);
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>OLX</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0004FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 50,
  color:'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
});

export default Splash;

