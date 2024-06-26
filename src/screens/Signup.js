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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';

const {height, width} = Dimensions.get('window');

const Signup = ({navigation}) => {
  return (
    <KeyboardAwareScrollView style={{backgroundColor: Colors.white}}>
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
            <Text style={{color: Colors.primary}}> Terms of Service</Text> and{' '}
            <Text style={{color: Colors.primary}}> Privacy Policy.</Text>
          </Text>
        </TouchableOpacity>
        <Btn
          style={styles.btn}
          title="Signup"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <Text style={styles.title4}>
          Already have an account?
          <Text
            style={{color: Colors.blue, ...Fonts.Roboto,}}
            onPress={() => navigation.navigate('Login')}>
            {' '}Login
          </Text>
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
  title: {
    fontSize: 0.07 * width,
    fontWeight: '500',
    color: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    ...Fonts.PoppinsRegular
  },
  title2: {
    fontSize: 0.04 * width,
    fontWeight: '300',
    color: Colors.borderGray,
    ...Fonts.Roboto,

  },
  title3: {
    paddingHorizontal: 29,
    fontSize: 0.035 * width,
    fontWeight: '400',
    color: Colors.borderGray,
    bottom: 30,
    ...Fonts.PoppinsRegular
  },
  title4: {
    fontSize: 0.04 * width,
    fontWeight: '300',
    color: Colors.borderGray,
    bottom: 25,
    ...Fonts.Roboto,
  },
  primary: {
    alignItems: 'center',
  },
  btn: {},
});
export default Signup;
