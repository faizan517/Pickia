import React from 'react';
import Input from '../components/Input';
import Btn from '../components/btn';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from '../utils/Icons';
import Colors from '../utils/Colors';

const{ height,width} = Dimensions.get('window')

const Intro = ({navigation}) => {
  return (
<ImageBackground style={styles.container} source={require('../assets/logos/splashScreen.png')}>
<View style={styles.scondary}>
<Icons.Pickia />
<Text style={styles.title}>Welcome to our store</Text>
<Text style={styles.title2}>Ger your groceries in as fast as one hour</Text>
<Btn title='Get Started'/>
</View>
</ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 0.07 * width,
    fontWeight: '500',
    color: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center'
  },
  title2: {
    fontSize: 0.04 * width,
    fontWeight: '500',
    color: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },scondary:{
    height:height*0.5,
    width:width*0.6,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'
  }
});
export default Intro;
