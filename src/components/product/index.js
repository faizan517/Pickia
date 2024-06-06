import React, {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import AddBtn from '../addBtn';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import Minus from '../../assets/svgs/minus.svg';
import {useState} from 'react';
import Icons from '../../utils/Icons';

const {height, width} = Dimensions.get('window');

const Product = props => {
  const [count, setCount] = useState(1);
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
    isWishList,
  } = props;
  return (
    <SafeAreaView>
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
          ]}>
          <TouchableOpacity style={styles.primary} onPress={onPress}>
            <Image source={require('../../assets/logos/barkat.png')} />
          </TouchableOpacity>
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
              <AddBtn
                style={[
                  styles.btn,
                  {width: width * 0.095, height: height * 0.045},
                ]}
              />
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
      {type === 'sigma' && (
        <View
          style={[
            styles.conatiner,
            {
              flexDirection: 'row',
              width: width * 0.9,
              height: height * 0.15,
            },
            style,
          ]}>
          <TouchableOpacity
            style={[styles.primary, {bottom: 10}]}
            onPress={onPress}>
            <Image source={require('../../assets/logos/barkat.png')} />
          </TouchableOpacity>
          <View
            style={[
              {
                width: width * 0.63,
                height: height * 0.12,
                justifyContent: 'space-between',
              },
            ]}>
            <View style={[{flexDirection: 'row'}]}>
              <Text style={[styles.heading, {fontSize: width * 0.045}]}>
                {title}
              </Text>

              <Text
                style={[
                  styles.heading2,
                  {textAlign: 'right', marginLeft: 10, fontSize: width * 0.035},
                ]}>
                {weightTitle}
              </Text>
              <TouchableOpacity
                style={[{width: width * 0.7, alignItems: 'center'}]}>
                {isWishList ? '' : <Icons.Dots height={30} width={30} />}
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={[
                  styles.heading2,
                  {textAlign: 'left', fontSize: width * 0.037},
                ]}>
                Banaspati
              </Text>
            </View>
            <View style={styles.countView}>
              <TouchableOpacity
                style={styles.heading}
                onPress={() => setCount(count - 1)}>
                <Icons.Trash height={20} width={20} />
              </TouchableOpacity>
              <Text
                style={[
                  styles.detailDis,
                  {color: Colors.primary, fontSize: width * 0.05},
                ]}>
                {count}{' '}
              </Text>
              <TouchableOpacity
                style={styles.heading}
                onPress={() => setCount(count + 1)}>
                <Icons.Plus3 height={25} width={25} />
                {/* <Text style={styles.countHead}>+</Text> */}
              </TouchableOpacity>
            </View>
            <Text
              style={[
                styles.heading2,
                {
                  textAlign: 'left',
                  color: Colors.primary,
                  fontSize: width * 0.04,
                },
              ]}>
              PKR 700
            </Text>

            <View style={[{flexDirection: 'row'}]}>
              <Icons.Edit2 height={15} width={15} />
              <Text style={styles.heading2}> Edit</Text>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    alignItems: 'center',
    width: width * 0.25,
    height: height * 0.17,
    // backgroundColor:'red'
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
    ...Fonts.PoppinsRegular,
    fontWeight: '900',
    fontSize: width * 0.04,
    textAlign: 'center',
    color: 'black',
  },
  heading2: {
    ...Fonts.PoppinsRegular,
    fontSize: width * 0.03,
    textAlign: 'center',
    color: 'black',
  },
  btn: {
    width: width * 0.07,
    height: height * 0.033,
  },
  countView: {
    flexDirection: 'row',
    // borderWidth: 1,
    width: width * 0.29,
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
    // borderRadius: 5,
    // borderColor: 'lightgray',
  },
});
export default Product;
