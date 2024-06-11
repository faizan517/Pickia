import React from 'react';
// import Input from '../components/Input';
// import Btn from '../components/btn';

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
import Icons from '../../utils/Icons';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import Btn from '../../components/btn';
import Product from '../../components/product';
import Input from '../../components/Input';

const {height, width} = Dimensions.get('window');

const OrderDetails = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Icons.Cart2/>
      <Text style={styles.heading}>Add items to get started</Text> */}
      <Text
        style={[
          styles.heading2,
          {paddingHorizontal: 10, alignSelf: 'flex-start'},
        ]}>
        Your Cart
      </Text>

      <View style={styles.View}>
        <Icons.Map />
        <Text style={[styles.heading, {paddingHorizontal: 10}]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>
      <View style={styles.View}>
        <Icons.Phone />
        <Text style={[styles.heading, {paddingHorizontal: 10}]}>
          +92-3123456789
        </Text>
      </View>

      {/* <View style={styles.cartView}> */}
      <Text
        style={[
          styles.heading2,
          {paddingHorizontal: 10, alignSelf: 'flex-start'},
        ]}>
        Order List
      </Text>

      {/* <Text style={[styles.heading3, {color: Colors.white}]}>1 Item</Text> */}
      {/* </View> */}
      {/* </View> */}
      <Product type="sigma" orderDetails isWishList />
      <View style={styles.promoView}>
        <Input title="Promo code" placeholder="Promo code" />
      </View>
      <Text
        style={[
          styles.heading2,
          {paddingHorizontal: 10, alignSelf: 'flex-start'},
        ]}>
        Order Summary
      </Text>
      <View style={styles.odView}>
        <View style={styles.odViewNested}>
          <Text style={styles.heading3}>Order Amount</Text>
          <Text style={styles.heading3}>PKR 700</Text>
        </View>
        <View style={styles.odViewNested}>
          <Text style={styles.heading3}>Discount</Text>
          <Text style={styles.heading3}>----</Text>
        </View>
        <View style={styles.odViewNested}>
          <Text style={styles.heading3}>Delivery Charges</Text>
          <Text style={styles.heading3}>PKR 100</Text>
        </View>

        <View style={[styles.odViewNested, {marginVertical: width * 0.1}]}>
          <Text style={[styles.heading3]}>
            Total Amount{'\n'}Rs. 800
          </Text>
          <View style={styles.cartView}>
            <Text style={[styles.heading3, {color: Colors.white}]}>
              Delivered
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    fontSize: width * 0.04,
    ...Fonts.PoppinsRegular,
    fontWeight: '500',
    color: Colors.borderGray,
  },
  heading2: {
    fontSize: width * 0.05,
    ...Fonts.PoppinsBold,
    fontWeight: '800',
    color: Colors.black,
  },
  heading3: {
    fontSize: width * 0.04,
    ...Fonts.PoppinsBold,
    fontWeight: '800',
    color: Colors.black,
  },
  cartView: {
    height: height * 0.03,
    width: width * 0.2,
    borderRadius: 7,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  promoView: {
    height: height * 0.15,
    width: width,
    // borderRadius: 7,
    // backgroundColor: Colors.primary,
    alignItems: 'center',
    // justifyContent: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    borderTopColor: Colors.lightGray,
    paddingVertical: 20,
  },
  odView: {
    marginVertical: 15,
    // width:width*0.9,
    // backgroundColor:'red',
    height: height * 0.14,
    // flexDirection:'row',
    justifyContent: 'space-between',
  },
  odViewNested: {
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:1,
  },
  View: {
    width: width * 0.9,
    height: height * 0.055,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white2,
    margin: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
export default OrderDetails;
