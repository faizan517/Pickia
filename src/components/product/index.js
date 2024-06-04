import React, {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
  SafeAreaView
} from 'react-native';
import AddBtn from '../addBtn';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
const {height, width} = Dimensions.get('window');

const Product = props => {
  const {
    title = 'Barkar oil',
    type = 'gama',
    pkrTitle = '3250',
    weightTitle = '1Kg',
    onPress = () => {},
    disabled = false,
    style = {},
    image,
    navigation,
  } = props;
  return (
    <SafeAreaView >
      {type === 'alpha' && (
        <View style={styles.conatiner}>
          <View style={styles.primary}>
            <Image source={require('../../assets/logos/rashan3.png')} />
          </View>
          <View style={styles.secondry}>
            <Text style={styles.heading}>{title}</Text>
            <View style={styles.tertiary}>
              <Text style={styles.heading}>
                PKR {'\n'}
                {pkrTitle}
              </Text>
              <AddBtn style={styles.btn} />
            </View>
          </View>
        </View>
      )}
      {type === 'beta' && (
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.conatiner,
            {
              width: width * 0.35,
              height: width * 0.43,
              borderWidth: 1,
              borderRadius: 20,
              borderColor: Colors.borderGray,
            },
          ]}>
          <View style={[styles.primary, {justifyContent: 'flex-end'}]}>
            <Image
              style={{}}
              source={require('../../assets/logos/vegetable.png')}
            />
          </View>
          <View
            style={[
              styles.secondry,
              {alignItems: 'center', justifyContent: 'center'},
            ]}>
            <Text style={styles.heading}>{title}</Text>
          </View>
        </TouchableOpacity>
      )}
      {type === 'gama' && (
        <View
          style={[
            styles.conatiner,
            {
              width: width * 0.37,
              height: height * 0.295,
              borderWidth: 0.5,
              borderRadius: 10,
            },
            style,
          ]}
          >
          <View style={styles.primary}>
            <Image source={require('../../assets/logos/barkat.png')} />
          </View>
          <View style={[styles.secondry, {width: width * 0.285}]}>
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.heading2}>{weightTitle}</Text>
            <View style={[styles.tertiary]}>
              <Text
                style={[
                  styles.heading,
                  {fontSize: width * 0.045, fontWeight: '700'},
                ]}>
                PKR{'\n'}
                {pkrTitle}
              </Text>
              <AddBtn style={[styles.btn,{width: width * 0.095 ,  height: height * 0.045,}]}/>
            </View>
          </View>
        </View>
      )}
      {type === 'delta' && (
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.conatiner,
            {
              width: width * 0.44,
              height: height * 0.1,
              flexDirection: 'row',
              borderRadius: 20,
              backgroundColor: Colors.white,
              elevation: 1,
            },
          ]}>
          <View style={[styles.primary, {justifyContent: 'flex-end'}]}>
            <Image style={{}} source={require('../../assets/logos/Rice.png')} />
          </View>
          <View
            style={[
              styles.secondry,
              {alignItems: 'center', justifyContent: 'center'},
            ]}>
            <Text
              style={[
                styles.heading,
                {
                  ...Fonts.PoppinsBlack,
                  fontWeight: '400',
                  fontSize: width * 0.05,
                },
              ]}>
              {title}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    alignItems: 'center',
    width: width * 0.23,
    height: height * 0.15,
  },
  primary: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondry: {
    flex: 1,
    width: width * 0.2,
  },
  tertiary: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Poppins',
    fontWeight: '900',
    fontSize: width * 0.04,
    textAlign: 'center',
    color: 'black',
  },
  heading2: {
    fontFamily: 'Poppins',
    fontSize: width * 0.03,
    textAlign: 'center',
    color: 'black',
  },
  btn: {
    width: width * 0.07,
    height: height * 0.033,
  },
});
export default Product;
