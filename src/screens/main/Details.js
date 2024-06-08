import React from 'react';
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
import Colors from '../../utils/Colors';
import Btn from '../../components/btn';
import Icons from '../../utils/Icons';
import Fonts from '../../utils/Fonts';

const {height, width} = Dimensions.get('window');

const Details = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.CoverView}>
        <View style={styles.ProfileImgVIew}>
          <Image
            style={[{height: height * 0.1, width: width * 0.2}]}
            source={require('../../assets/logos/woman.png')}
          />
        <Text style={[styles.heading2]}>User Name</Text>
        <Text style={[styles.heading2,{fontSize:width*0.03,color:Colors.white,fontWeight:'300'}]}>Username@gmai.com</Text>

        </View>
        <Image
          style={styles.CoverView}
          resizeMode="cover"
          source={require('../../assets/logos/woman.png')}
          blurRadius={2}
        />
      </View>
      <View style={styles.DetailsView}>
        <TouchableOpacity
          style={styles.disView}
          onPress={() => navigation.navigate('MyOrders')}>
          <Icons.CartIcon height={20} width={20} />
          <Text style={styles.heading}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.disView}
          onPress={() => navigation.navigate('ViewProfile')}>
          <Icons.ProfileDetails height={20} width={20} />
          <Text style={styles.heading}>Profile Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.disView} onPress={()=>navigation.navigate('DeliveryAddress')}>
          <Icons.Deliveryaddress height={20} width={20} />
          <Text style={styles.heading}>Delivery Address</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.disView}
          onPress={() => navigation.navigate('PromoCode')}>
          <Icons.PromoCode />
          <Text style={styles.heading}>Promo Code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.disView}
          onPress={() => navigation.navigate('ContactUS')}>
          <Icons.PhoneCall height={20} width={20} />
          <Text style={styles.heading}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.disView}
          onPress={() => navigation.navigate('Terms')}>
          <Icons.Aligncenter height={20} width={20} />
          <Text style={styles.heading}>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.disView}
          onPress={() => navigation.navigate('AboutUs')}>
          <Icons.QuestionMark height={20} width={20} />
          <Text style={styles.heading}>About Us</Text>
        </TouchableOpacity>
      </View>
      <Btn
        title="Log Out"
        isTrue={true}
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width:'90%',
    // backgroundColor: 'skyblue',
    alignItems: 'center',
    padding: 16,
  },
  CoverView: {
    height: height * 0.2,
    width: width,
    backgroundColor: 'red',
  },
  DetailsView: {
    height: height * 0.6,
    width: width,
    // backgroundColor: 'pink',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  disView: {
    height: height * 0.065,
    width: width * 0.6,
    // backgroundColor: 'blue',
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    // elevation: 5,
    // backgroundColor: 'white',
    paddingLeft: 15,
  },
  heading: {
    fontSize: width * 0.04,
    paddingHorizontal: 10,
    color: Colors.black,
    ...Fonts.PoppinsBlack,
    fontWeight: '400',
    lineHeight: width * 0.08,
    textAlign: 'left',
  },
  heading2: {
    fontSize: width * 0.04,
    paddingVertical: 1,
    color: Colors.white,
    ...Fonts.PoppinsBlack,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  ProfileImgVIew: {
    position: 'absolute',
    zIndex: 1,
    top: 30,
    left: 15,
    // height: height * 0.06,
    // width: width * 0.09,
    // borderRadius: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingVertical: 30,
  },
});
export default Details;
