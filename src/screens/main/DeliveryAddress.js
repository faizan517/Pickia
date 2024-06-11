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
import { useState } from 'react';
import FadeModal from '../../components/FadeModal';
import Input from '../../components/Input';

const {height, width} = Dimensions.get('window');

const DeliveryAddress = ({navigation}, props) => {
  const [modal, setModal] = useState(false);
  const {isEmpty} = props;
  return (
    <SafeAreaView style={styles.container}>
      {isEmpty ? (
        <View style={styles.emptyView}>
          <Icons.Delivery2 height={150} width={150} />
          <Text
            style={[
              styles.heading2,
              {position: 'absolute', bottom: 150, fontSize: width * 0.04},
            ]}>
            Add Delivery Address
          </Text>
        </View>
      ) : (
        <ScrollView
          style={styles.innerView2}
          showsVerticalScrollIndicator={false}>
          <View style={styles.TimeView}>
            <Text
              style={[
                styles.heading2,
                {
                  color: Colors.primary,
                  fontSize: width * 0.045,
                  paddingHorizontal: 10,
                  fontWeight: '700',
                },
              ]}>
              <Icons.Home />
              Home
            </Text>
            <Text style={[styles.heading2, {bottom: 6}]}>+92-3123456789</Text>
            <Text style={[styles.heading2]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <View style={[{position: 'absolute', top: 10, right: 10}]}>
              <Icons.checkCircle height={20} width={20} />
            </View>
          </View>
          <View style={styles.TimeView}>
            <Text
              style={[
                styles.heading2,
                {
                  color: Colors.black,
                  fontSize: width * 0.045,
                  paddingHorizontal: 10,
                  fontWeight: '700',
                },
              ]}>
              <Icons.Briefcase />
              Work
            </Text>
            <Text style={[styles.heading2, {bottom: 6}]}>+92-3123456789</Text>
            <Text style={[styles.heading2]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </ScrollView>
      )}
      <TouchableOpacity style={styles.addressView} onPress={()=>setModal(true)}>
        <Icons.squarePlus />
        <Text style={[styles.heading, {left: 10}]}>Add New Address</Text>
      </TouchableOpacity>
      <FadeModal isVisible={modal}>
        <TouchableOpacity style={styles.ripple} onPress={() => setModal(false)}>
          <Icons.Close />
        </TouchableOpacity>
        <Text style={styles.heading}>Add Address</Text>
        <View style={[{height:height*0.45,justifyContent:'space-evenly'}]}>
        <Input title='Name' placeholder='Other' />
        <Input title='Address' placeholder='Building/floor name, Apt/flt number etc' />
        <Input title='Phone no'  placeholder='+92-123456789' />
        </View>
        <Btn
          title="Save"
          style={styles.btn2}
          onPress={() => setModal(false)}
        />
      </FadeModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    ...Fonts.PoppinsRegular,
    fontWeight: 'bold',
    fontSize: width * 0.04,
    color: Colors.black,
  },
  heading2: {
    ...Fonts.PoppinsRegular,
    fontWeight: '400',
    fontSize: width * 0.031,
    color: Colors.borderGray,
  },
  addressView: {
    height: height * 0.05,
    width: width * 0.9,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    elevation: 5,
    flexDirection: 'row',
    marginVertical: 10,
  },
  innerView2: {
    height: height * 0.35,
  },
  TimeView: {
    height: height * 0.15,
    width: width * 0.9,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.borderGray,
    paddingVertical: 12,
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  emptyView: {
    height: height * 0.5,
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ripple: {
    position: 'absolute',
    left: 10,
    top: 15,
  },
});
export default DeliveryAddress;
