import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';
import Btn from '../../components/btn';
import Input from '../../components/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icons from '../../utils/Icons';

const {height, width} = Dimensions.get('window');

const ViewProfile = ({navigation}) => {
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.ProfileImgVIew}>
          <Image
            style={[{height: height * 0.16, width: width * 0.34}]}
            source={require('../../assets/logos/woman.png')}
          />
        </View>
        <TouchableOpacity>
        <Text style={styles.heading}>Change Your Profile Picture</Text>
        </TouchableOpacity>
        <View style={styles.inputView}>
          <View style={styles.inputinneraView}>
            <Icons.ViewUser />
            <Input
              style={[{width: width * 0.7}]}
              ptitleStyle={[{color: Colors.black}]}
            />
          </View>
          <View style={[styles.inputinneraView, {width: width * 0.77}]}>
            <Icons.Phonecall3 />
            <Input
              style={[{width: width * 0.7}]}
              title="Phone"
              placeholder="+92 123456789"
              ptitleStyle={[{color: Colors.black}]}
            />
          </View>
          <View style={styles.inputinneraView}>
            <Icons.Viewlock />
            <Input
              style={[{width: width * 0.7}]}
              title="Password"
              placeholder="*****"
              stitleStyle={Colors.borderGray}
              ptitleStyle={[{color: Colors.black}]}
            />
          </View>
        </View>
        <View style={[{marginTop: 60}]}>
          <Btn title="Update" />
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  ProfileImgVIew: {
    height: height * 0.17,
    width: width * 0.35,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  heading: {
    ...Fonts.PoppinsMedium,
    fontWeight: '400',
    color: Colors.borderGray,
    lineHeight: 19,
    paddingBottom: 50,
  },
  inputView: {
    height: height * 0.37,
    width: width * 0.95,
    justifyContent: 'space-evenly',
  },
  inputinneraView: {
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ViewProfile;
