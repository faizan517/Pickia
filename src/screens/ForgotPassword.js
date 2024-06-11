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
  SafeAreaView
} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

const{ height,width} = Dimensions.get('window')

const ForgotPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.primary}>
        <Text style={styles.title}>Recover Password</Text>
        <Text style={styles.title2}>Enter your email address below to reset password</Text>
      </View>

      <Input />
      <TouchableOpacity style={styles.forgot} onPress={()=>navigation.navigate('ForgotPassword')}>        
      </TouchableOpacity>
      <Btn style={styles.btn} title='Send' onPress={()=>navigation.navigate('Login')} />
    </SafeAreaView>
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
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title2: {
    fontSize: 0.035 * width,
    fontWeight: '300',
    color: 'black',
  },
  title3: {
    fontSize: 0.04 * width,
    fontWeight: '300',
    color: 'blue',
  },
  forgot:{
    right: 36,
    bottom: 10,
    alignSelf: 'flex-end',
  },
  title4: {
    fontSize: 0.04 * width,
    fontWeight: '300',
    color: 'black',
  },
  primary: {
    alignItems: 'center',
  },
  btn: {
  },
});
export default ForgotPassword;
