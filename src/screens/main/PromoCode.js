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

const PromoCode = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Image source={require('../../assets/logos/promo.png')} />
        <View style={styles.innerView}>
          <Text style={styles.heading}>Housewife</Text>
          <Text style={styles.dis}>Get 20% off on your orderwith “HW20”.</Text>
        </View>
        <Text
          style={[
            styles.heading,
            {
              position: 'absolute',
              right: 15,
              bottom: 5,
              fontSize: width * 0.035,
              fontWeight: '500',
              color: Colors.primary,
            },
          ]}>
          Apply Now
        </Text>
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
  mainView: {
    width: width,
    height: height * 0.17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerView: {
    width: width * 0.6,
    height: height * 0.1,
    paddingHorizontal: 10,
  },
  heading: {
    color: Colors.black,
    fontSize: width * 0.05,
    ...Fonts.PoppinsBlack,
    fontWeight: '900',
    paddingVertical: 5,
  },
  dis: {
    color: Colors.borderGray,
    fontSize: width * 0.035,
    ...Fonts.PoppinsBlack,
    fontWeight: '500',
  },
});
export default PromoCode;
