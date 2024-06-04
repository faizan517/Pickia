import React, {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
} from 'react-native';
import AddBtn from '../addBtn';

const {height, width} = Dimensions.get('window');

const Product = props => {
  const {
    title = 'Barkat Oil',
    type = 'gama',
    pkrTitle = '3250',
    weightTitle = '1Kg',
    onPress = () => {},
    disabled = false,
    style = {},
    image,
  } = props;
  return (
    <View>
      {type === 'alpha' && (
        <View style={styles.conatiner} onPress={onPress}>
          
          <View style={styles.primary}>
            <Image
              style={{
                height: 50,
                width: 50,
              }}
              source={require('../../assets/logos/rashan3.png')}
            />
          </View>
          <View style={styles.secondry}>
            <Text style={styles.heading}>{title}</Text>
            <View style={styles.tertiary}>
              <Text style={styles.heading}>{pkrTitle}</Text>
              <AddBtn />
            </View>
          </View>
        </View>
      )}
      {type === 'beta' && (
        <TouchableOpacity onPress={onPress}
          style={[
            styles.conatiner,
            {
              width: width * 0.35,
              // height: height * 0.2,

              borderWidth: 1,
              borderRadius: 20,
              borderColor: 'gray',
            },
          ]} >
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
          ]} onPress={onPress}>
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
              <AddBtn style={styles.btn} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    // backgroundColor: 'lightblue',
    alignItems: 'center',
    // justifyContent: 'center',
    width: width * 0.26,
    height: height * 0.2,
  },
  primary: {
    flex: 1,
    // width: width * 0.26,
    // height: height * 0.10,
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondry: {
    flex: 1,
    width: width * 0.23,
    // height: height * 0.10,
  },
  tertiary: {
    flex: 1,
    flexDirection: 'row',
    // width: width * 0.26,
    // height: height * 0.10,
    // backgroundColor:'blue',
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
    // fontWeight:'900',
    fontSize: width * 0.03,
    textAlign: 'center',
    color: 'black',
  },
  btn: {
    width: width * 0.1,
    height: height * 0.05,
  },
});
export default Product;
