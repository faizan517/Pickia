import React from 'react';
import Product from '../../components/product';
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
import Search from '../../components/Search';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';
import Btn from '../../components/btn';

const {height, width} = Dimensions.get('window');

const AboutUs = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contactContainer}>
        <Text style={styles.heading}>
          Welcome to Taswog. This application is powered by Methologik Pvt Ltd.
          It is strongly recommended that you read the Terms and condition
          thoroughly before utilizing our Service. By accessing or utilization
          of the service constitutes your unconditional agreement to follow and
          be bound by these Terms & Conditions. In case if you disagree to any
          clause of the Terms and Conditions, then you shall not utilize or
          access the service. You hereby confirm that you have read, understood
          and accepted all contents. Taswog reserves the right at its absolute
          discretion to change the Terms & Conditions from time to time with or
          without any prior notice to its user. All such changes will be updated
          on the website and it is the user sole responsibility to read the
          Terms & Conditions on each occasion of using the Taswog website or
          application. Continuing used of Taswog will imply of approval being
          bound by the current Terms and Conditions. If you do not agree any
          clause of the Terms and Conditions, then you must not use Taswog
          website/ application.
        </Text>
      </View>
      {/* <Btn title="Call Now" /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // width:'90%',
    // backgroundColor: 'skyblue',
    padding: 16,
  },
  contactContainer: {
    // height: height * 0.5,
    width: width*0.9,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 40,
    // paddingVertical:30
  },
  heading: {
    ...Fonts.PoppinsRegular,
    fontWeight: '400',
    fontSize: width * 0.0379,
    color: Colors.black,
    lineHeight:19
  },
});
export default AboutUs;
