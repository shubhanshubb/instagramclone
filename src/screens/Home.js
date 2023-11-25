import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const handlePress =() => {
        // navigation.navigate('BottomTab')
    }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="instagram" size={50} style={{color: 'white'}} />
        <Text style={styles.title}>Instagram Clone</Text>
        <Text style={styles.user}>Created By Shubhanshu Barnwal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    alignItems: 'center',
    paddingTop: '50%',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  user: {
    color: 'red',
    paddingTop: 10,
    paddingLeft: '30%',
    fontSize: 15,
  },
  buttonBox: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#FFC200',
    marginHorizontal: 150,
    marginTop: 200
  },
  button: {
    fontSize: 30,
    color: 'white',
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignSelf: 'center'
  },
});

export default Home;
