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
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('window');

const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.primary}>
        <Image
          source={require('../assets/logos/logo.png')}
          style={{width: 60, height: 60}}
        />
        <Text style={styles.title}>Signup</Text>
        <Text style={styles.title2}>Enter Your Credential to countinue</Text>
      </View>
      <Input
        title="User Name"
        placeholder="Faizan"
        keyboardType="visible-password"
      />

      <Input />
      <Input
        title="Password"
        placeholder="******"
        keyboardType="visible-password"
      />

      <TouchableOpacity
        style={styles.forgot}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.title3}>
          By continuing you agree to our{' '}
          <Text style={{color: 'rgba(55, 183, 108, 1)'}}>
            {' '}
            Terms of Service
          </Text>{' '}
          and{' '}
          <Text style={{color: 'rgba(55, 183, 108, 1)'}}> Privacy Policy.</Text>
        </Text>
      </TouchableOpacity>
      <Btn style={styles.btn} />
      <Text style={styles.title4}>
        Already have an account?
        <Text
          style={{color: 'blue'}}
          onPress={() => navigation.navigate('Login')}>
          Login
        </Text>{' '}
      </Text>
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
    fontFamily:'Poppins',
  },
  title2: {
    fontSize: 0.04 * width,
    fontWeight: '300',
    color: 'black',
    
  },
  title3: {
    paddingHorizontal: 29,
    fontSize: 0.035 * width,
    fontWeight: '300',
    color: 'black',
  },
  forgot: {
    // right: 36,
    // bottom: 10,
    // alignSelf: 'flex-end',
  },
  title4: {
    fontSize: 0.04 * width,
    fontWeight: '300',
    color: 'black',
    // bottom: 30,
  },
  primary: {
    alignItems: 'center',
  },
  btn: {},
});
export default Signup;
