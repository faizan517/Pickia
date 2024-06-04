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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {height, width} = Dimensions.get('window');

const Login = ({navigation}) => {
  return (
    <KeyboardAwareScrollView style={{backgroundColor: Colors.white}}>
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
        <TouchableOpacity
          style={styles.forgot}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.title3}>Forgot Password?</Text>
        </TouchableOpacity>
        <Btn
          style={styles.btn}
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <Text style={styles.title4}>
          Not a member yet?
          <Text
            style={{color: Colors.blue, ...Fonts.PoppinsThin}}
            onPress={() => navigation.navigate('Signup')}>
            Register
          </Text>{' '}
        </Text>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  primary: {
    alignItems: 'center',
    height: height * 0.15,
    width: width * 0.9,
  },
  title: {
    fontSize: 0.075 * width,
    fontWeight: '500',
    color: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    ...Fonts.PoppinsBlack,
  },
  title2: {
    fontSize: 0.04 * width,
    fontWeight: '300',
    color: Colors.borderGray,
  },
  title3: {
    fontSize: 0.04 * width,
    fontWeight: '300',
    color: Colors.blue,
    ...Fonts.PoppinsThin,
  },
  forgot: {
    right: 30,
    bottom: 50,
    alignSelf: 'flex-end',
  },
  title4: {
    fontSize: 0.04 * width,
    fontWeight: '300',
    color: Colors.borderGray,
    bottom: 50,
  },
});
export default Login;
