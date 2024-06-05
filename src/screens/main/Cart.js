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

const Cart = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Icons.Cart2/>
      <Text style={styles.heading}>Add items to get started</Text> */}
      <Text style={styles.heading2}>Your Cart</Text>
      <View
        style={[
          {
            flexDirection: 'row',
            // justifyContent: 'space-around',
            alignItems: 'center',
            height: height * 0.05,
            width: width,
            borderTopWidth: 1,
            borderTopColor: Colors.lightGray,
            borderBottomWidth: 1,
            borderBottomColor: Colors.lightGray,
          },
        ]}>
        <Text style={[styles.heading3, {paddingHorizontal: 10}]}>
          Oil & Ghee
        </Text>
        <View style={styles.cartView}>
          <Text
            style={[
              styles.heading3,
              {color: Colors.white},
            ]}>
            1 Item
          </Text>
        </View>
      </View>
      <Product type="sigma" />
      <View style={styles.promoView}>
        <Input title="Promo code" placeholder="Promo code" />
      </View>
      <View style={styles.odView}>
        <View style={styles.odViewNested}>
          <Text style={styles.heading3}>Sub Total</Text>
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
        <View style={styles.odViewNested}>
          <Text style={[styles.heading3, {color: Colors.primary}]}>
            Order Total
          </Text>
          <Text style={[styles.heading3, {color: Colors.primary}]}>
            PKR 800
          </Text>
        </View>
      </View>
      <View
        style={[
          {height: height * 0.14, justifyContent: 'space-between', top: 50},
        ]}>
        <Btn title="Secure Checkout" />
        <Btn title="Clear Cart" />
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
    width: width * 0.15,
    borderRadius: 7,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  promoView: {
    height: height * 0.25,
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
  },
});
export default Cart;
