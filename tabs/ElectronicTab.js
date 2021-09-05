import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default class ElectronicTab extends React.Component{

  playSound1 = ()=>{

  }

  dnldSound1 = () => {
    
  }

  constructor(){
    super();
    this.state={
      sound: '',
    }
  }



  render(){
    return(
      <View>
        <Text style={styles.sfxText}>Sound1</Text>
        <TouchableOpacity onPress={this.playSound1} style={styles.sfxButton1}>Play</TouchableOpacity>
        <TouchableOpacity onPress={this.dnldSound1} style={styles.sfxButton2}>Download</TouchableOpacity>
      </View>
    )}
}

const styles = StyleSheet.create({
    sfxText:{
      textAlign: 'center',
      fontSize: 20,
    },
    sfxButton1:{
      textAlign: 'center',
      backgroundColor: '#3ac3e9',
      fontFamily: "arial",
      marginLeft: '20%',
      marginRight: '20%',
      paddingTop: '15px',
      paddingBottom: '15px',
    },
    sfxButton2:{
      textAlign: 'center',
      backgroundColor: '#1fd0a7',
      fontFamily: "arial",
      marginLeft: '20%',
      marginRight: '20%',
      paddingTop: '15px',
      paddingBottom: '15px',
    }
})