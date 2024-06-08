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
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';
import Btn from '../../components/btn';
import Icons from '../../utils/Icons';

const {height, width} = Dimensions.get('window');

const CheckOut3 = ({navigation}, props) => {
  const {isEmpty} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contactContainer}>
        <View style={styles.innerView}>
          <View style={[styles.circle, {backgroundColor: Colors.primary}]}>
            <Icons.Check height={15} width={15} />
          </View>
          <Text style={styles.heading}>Time Slot</Text>
          <Text style={styles.heading2}>Select Delivery Time</Text>
        </View>
        <View style={styles.innerView}>
          <View style={[styles.circle, {backgroundColor: Colors.primary}]}>
            <Icons.Check height={15} width={15} />
          </View>
          <Text style={styles.heading}>Address</Text>
          <Text style={styles.heading2}>Address Input</Text>
        </View>
        <View style={styles.innerView}>
          <View style={[styles.circle, {backgroundColor: Colors.primary}]}>
            <Icons.Check height={15} width={15} />
            {/* <Text style={styles.heading}>3</Text/> */}
          </View>
          <Text style={styles.heading}>Confirm</Text>
          <Text style={styles.heading2}>Check the Order</Text>
        </View>
      </View>

      <View style={styles.emptyView}>
        <Icons.bag />
        <Text
          style={[
            styles.heading,
            {fontSize: width * 0.05, textAlign: 'center'},
          ]}>
          Your Order Has Been {'\n'}Accepted
        </Text>
        <Text style={[styles.heading2, {textAlign: 'center'}]}>
          Your items has been placcd and is on it’s way to being processed
        </Text>
      </View>
      <View style={[styles.emptyView, {bottom: 50}]}>
        <Btn title="Continue Shopping" style={[{width: width * 0.65}]} onPress={()=>navigation.navigate('Home')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  contactContainer: {
    height: height * 0.15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  heading: {
    ...Fonts.PoppinsRegular,
    fontWeight: 'bold',
    fontSize: width * 0.04,
    color: Colors.black,
  },
  innerView: {
    height: height * 0.09,
    width: width * 0.3,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heading2: {
    ...Fonts.PoppinsRegular,
    fontWeight: '400',
    fontSize: width * 0.031,
    color: Colors.borderGray,
  },
  circle: {
    height: height * 0.04,
    width: width * 0.085,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white2,
  },
  emptyView: {
    height: height * 0.5,
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CheckOut3;
