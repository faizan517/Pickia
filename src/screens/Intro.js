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
import Fonts from '../utils/Fonts';

const{ height,width} = Dimensions.get('window')

const Intro = ({navigation}) => {
  return (
<ImageBackground style={styles.container} source={require('../assets/logos/splashScreen.png')}>
<View style={styles.scondary}>
</View>
<Icons.Pickia/>
<Text style={styles.title}>Welcome{'\n'}to our store</Text>
<Text style={styles.title2}>Ger your groceries in as fast as one hour</Text>
<Btn title='Get Started' style={styles.btn} onPress={()=>navigation.navigate('Login')}/>
</ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...Fonts.PoppinsRegular,
    fontSize: 0.08 * width,
    fontWeight: '500',
    color: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
  },
  title2: {
    ...Fonts.PoppinsRegular,
    fontSize: 0.04 * width,
    fontWeight: '400',
    color: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:5
  },
  scondary:{
    height:height*0.15,
    // width:width*0.6,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'
  },
  btn:{
    position:'absolute',
    bottom:80,
  }
});
export default Intro;