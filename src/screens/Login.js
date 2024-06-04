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
  KeyboardAvoidingView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fonts from '../utils/Fonts';
import Colors from '../utils/Colors';

const{ height,width} = Dimensions.get('window')

const Login = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={{backgroundColor: Colors.white}}>
      
    <SafeAreaView style={styles.container}>
      <View style={styles.primary}>
        <Image
          source={require('../assets/logos/logo.png')}
          style={{width: 60, height: 60}}
        />
        <Text style={styles.title}>Login</Text>
        <Text style={styles.title2}>Enter Your email and password</Text>
      </View>

      <Input />
      <Input
        title="Password"
        placeholder="******"
        keyboardType="visible-password"
      />
      <TouchableOpacity style={styles.forgot} onPress={()=>navigation.navigate('ForgotPassword')}>        
      <Text style={styles.title3}>forgot password?</Text>
      </TouchableOpacity>
      <Btn style={styles.btn} onPress={()=>navigation.navigate('HomeScreen')}/>
      <Text style={styles.title4}>
        Not a member yet?
        <Text style={{color: Colors.blue}} onPress={() => navigation.navigate('Signup')}>
          Register
        </Text>{' '}
      </Text>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width:width,
    height:height,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor
  },
  title: {
    fontSize: 0.07 * width,
    fontWeight: '500',
    color: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    ...Fonts.PoppinsBlack,
  },
  title2: {
    fontSize: 0.04 * width,
    fontWeight: '300',
    color: Colors.black,
  },
  title3: {
    fontSize: 0.04 * width,
    fontWeight: '300',
    color: Colors.blue,
  },
  forgot:{
    right: 36,
    bottom: 30,
    alignSelf: 'flex-end',
  },
  title4: {
    fontSize: 0.04 * width,
    fontWeight: '300',
    color: Colors.black,
    // bottom: 30,
    top:25
  },
  primary: {
    alignItems: 'center',
    height: height*0.15,
    width: width*0.9,
    backgroundColor:'red'
  },
  btn: {
  },
});
export default Login;
