import React, {useState} from 'react';
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
import Icons from '../../utils/Icons';
import {Rating} from 'react-native-ratings';
import Minus from '../../assets/svgs/minus.svg';
import Edit from '../../assets/svgs/edit.svg';

import Btn from '../../components/btn';
import Input from '../../components/Input';

const {height, width} = Dimensions.get('window');

const ProductDetails = ({navigation}, props) => {
  const [count, setCount] = useState(1);
  const {istap = false} = props;
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/logos/barkat2.png')} />

      <View style={styles.secondry}>
        <View style={styles.secondryNested}>
          <Text style={styles.heading}>Barkat</Text>
          <Text style={styles.heading2}>5 piece Price</Text>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={12}
            onFinishRating={this.ratingCompleted}
          />
        </View>
        {istap ? (
          <TouchableOpacity>
            <Icons.Heart height={25} width={25} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Icons.FilledHeart height={25} width={25} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.secondry}>
        <View style={styles.countView}>
          <TouchableOpacity
            style={styles.heading}
            onPress={() => setCount(count - 1)}>
            <Minus height={20} width={20} />
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
            <Icons.Plus2 />
            {/* <Text style={styles.countHead}>+</Text> */}
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>PKR 700</Text>
      </View>
      <View style={styles.detailView}>
        <Text style={styles.detailHeading}>Product Details</Text>
        <Text style={styles.detailDis}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Text>
        <Text style={styles.detailHeading}>Reviews</Text>
        <Text style={styles.detailDis}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Text>
        <View style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
          <Text style={styles.detailHeading}>Write your review</Text>
          <TouchableOpacity
            onPress={() => {
              <Input />;
            }}>
            <Edit height={20} width={20} />
          </TouchableOpacity>
        </View>
      </View>
      <Btn title="Add to Cart" onPress={() => navigation.navigate('Cart')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor:Colors.white,
  },
  primary: {},
  heading: {
    fontSize: width * 0.065,
    color: Colors.black,
    ...Fonts.Roboto,
    fontWeight: '500',
  },
  heading2: {
    fontSize: width * 0.04,
    color: Colors.borderGray,
    ...Fonts.Roboto,
    fontWeight: '400',
  },

  secondry: {
    flexDirection: 'row',
    width: width * 0.9,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  secondryNested: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  nested: {
    width: width * 0.2,
    flexDirection: 'row',
  },
  detailView: {
    height: height * 0.4,
  },
  detailHeading: {
    fontSize: width * 0.05,
    color: Colors.black,
    ...Fonts.PoppinsRegular,
    fontWeight: '500',
  },
  detailDis: {
    fontSize: width * 0.032,
    color: Colors.black,
    ...Fonts.PoppinsRegular,
    fontWeight: '300',
    paddingVertical: 2,
  },
  countView: {
    flexDirection: 'row',
    borderWidth: 1,
    width: width * 0.25,
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'lightgray',
  },
});
export default ProductDetails;
