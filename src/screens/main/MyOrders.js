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

const MyOrders = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      
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
export default MyOrders;
