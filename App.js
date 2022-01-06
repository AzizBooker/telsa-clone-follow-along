import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.carContainer}>
      <ImageBackground 
      source={require('./assets/images/ModelS.jpeg')}
      style={styles.image}
    />
          <View style={styles.textContainer} >
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
          </View>
      </View>
      
      <StatusBar style="hidden" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer:{
        width:'100%',
        height:'100%'
  },
  textContainer:{
      marginTop:'30%',
      width:'100%',
      alignItems:"center"
  },
  title:{
    fontSize:40,
    fontWeight:'500'
  },
  subtitle:{
      fontSize:16
  },
  image:{
    position:'absolute',
    width:"100%",
    height:'100%',
    resizeMode:'cover',
   
  }
});
