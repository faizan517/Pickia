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
import Search from '../../components/Search';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';
import Btn from '../../components/btn';
import Icons from '../../utils/Icons';

const {height, width} = Dimensions.get('window');

const CheckOut = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contactContainer}>
        <View style={styles.innerView}>
          <View style={[styles.circle,{backgroundColor:Colors.primary}]}>
            {/* <Text style={styles.heading}>1</Text> */}
            <Icons.Check height={15} width={15}/>
          </View>
          <Text style={styles.heading}>Time Slot</Text>
          <Text style={styles.heading2}>Select Delivery Time</Text>
        </View>
        <View style={styles.innerView}>
          <View style={styles.circle}>
            <Text style={styles.heading}>2</Text>
          </View>
          <Text style={styles.heading}>Address</Text>
          <Text style={styles.heading2}>Address Input</Text>
        </View>
        <View style={styles.innerView}>
          <View style={styles.circle}>
            <Text style={styles.heading}>3</Text>
          </View>
          <Text style={styles.heading}>Confirm</Text>
          <Text style={styles.heading2}>Check the Order</Text>
        </View>
      </View>
      <Text
        style={[
          styles.heading,
          {...Fonts.PoppinsRegular,alignSelf: 'flex-start', marginVertical: 5, marginHorizontal: 5},
        ]}>
        Select Your Delivery Timing
      </Text>
      <Text
        style={[
          styles.heading,
          {...Fonts.PoppinsRegular,alignSelf: 'flex-start', marginVertical: 5, marginHorizontal: 5},
        ]}>
        Delivery Day
      </Text>
      <ScrollView
        style={styles.innerView2}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        // contentContainerStyle={[{justifyContent:'space-around',alignItems:'center'}]}
      >
        <TouchableOpacity style={styles.dayView}>
          <Text style={styles.heading}>Monday</Text>
          <Text style={[styles.heading2, {fontSize: width * 0.025}]}>
            9 November
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dayView}>
          <Text style={styles.heading}>Tuesday</Text>
          <Text style={[styles.heading2, {fontSize: width * 0.025}]}>
            10 November
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dayView}>
          <Text style={styles.heading}>Wednesday</Text>
          <Text style={[styles.heading2, {fontSize: width * 0.025}]}>
            11 November
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dayView}>
          <Text style={styles.heading}>Thursday</Text>
          <Text style={[styles.heading2, {fontSize: width * 0.025}]}>
            12 November
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dayView}>
          <Text style={styles.heading}>Friday</Text>
          <Text style={[styles.heading2, {fontSize: width * 0.025}]}>
            13 November
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dayView}>
          <Text style={styles.heading}>Saturday</Text>
          <Text style={[styles.heading2, {fontSize: width * 0.025}]}>
            14 November
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dayView}>
          <Text style={styles.heading}>Sunday</Text>
          <Text style={[styles.heading2, {fontSize: width * 0.025}]}>
            15 November
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Text
        style={[
          [
            styles.heading,
            {...Fonts.PoppinsRegular,alignSelf: 'flex-start', marginVertical: 5, marginHorizontal: 5},
          ],
        ]}>
        Timing
      </Text>
      <View style={styles.TimeView}>
        <Text
          style={[
            styles.heading2,
            {color: Colors.primary,...Fonts.PoppinsRegular, fontSize: width * 0.04},
          ]}>
          10:00 AM - 5:00 PM
        </Text>
        <Icons.Clock />
      </View>
      <View style={[{height:height*0.43,justifyContent:'flex-end'}]}>
      <Btn title='Place Order' onPress={()=>navigation.navigate('CheckOut2')}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor:Colors.white,
  },
  contactContainer: {
    height: height * 0.15,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    
  },
  heading: {
    ...Fonts.Roboto,
    fontWeight: '500',
    fontSize: width * 0.04,
    color: Colors.black,
    // lineHeight:14
  },
  innerView: {
    height: height * 0.09,
    width: width * 0.3,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heading2: {
    ...Fonts.Roboto,
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
  dayView: {
    height: height * 0.05,
    width: width * 0.3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white2,
    marginHorizontal: 5,
  },
  innerView2: {
    height: height * 0.12,
  },
  TimeView: {
    height: height * 0.05,
    width: width * 0.9,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.borderGray,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
export default CheckOut;
