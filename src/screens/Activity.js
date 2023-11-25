import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Activity = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Activity Screen</Text>
      </View>
    </View>
  )
}

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
  });

export default Activity