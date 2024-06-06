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

const ContactUS = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contactContainer}>
        <Text style={styles.heading}>Contact our customer care center</Text>
        <Text style={styles.heading}>+92-1234556789</Text>
      </View>
        <Btn title='Call Now'/>
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
    height: height * 0.05,
    width: width,
    // backgroundColor: 'red',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginVertical:40,
    // paddingVertical:30
  },
  heading: {
    ...Fonts.PoppinsRegular,
    fontWeight: '400',
    fontSize: width * 0.05,
    color: Colors.borderGray,
  },
});
export default ContactUS;