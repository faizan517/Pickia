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

const {height, width} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={[{flexDirection:'row',}]}>
      <Text style={[styles.heading2,{}]}>Delivering to:</Text>
      <Text style={[styles.heading2,{}]}>Gulshan,Karachi:</Text>
      </View> */}

      <Search style={styles.searchBox} />

      <Image
        style={styles.header}
        source={require('../../assets/logos/Banner.png')}
      />
<ScrollView>

      <Text style={styles.heading}>Products</Text>
      <View style={styles.packagesView}>
        <Product type="alpha" />
        <Product type="alpha" />
        <Product type="alpha" />
      </View>
      <Text style={styles.heading}>Top Products</Text>
      <View style={styles.packagesView}>
        <Product type="alpha" />
        <Product type="alpha" />
        <Product type="alpha" />
      </View>
      <View style={styles.groceriesHead}>
        <Text style={styles.heading}>Groceries</Text>
        <TouchableOpacity>
          <Text style={styles.heading2}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.groceriesView}>
        <Product type="delta" />
        <Product type="delta" />
        <Product type="alpha" />
        <Product type="alpha" />
        <Product type="alpha" />
      </View>
</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    // flexDirection:'row'
  },
  header: {
    width: width,
  },
  packagesView: {
    height: height * 0.17,
    width: width * 0.9,
    // backgroundColor:'skyblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'red',
  },
  groceriesView: {
    height: height * 0.3,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    // alignItems:'center'
    alignContent: 'space-between',
    // alignSelf:'flex-end'
    // margin:5
  },
  heading: {
    ...Fonts.PoppinsBlack,
    fontWeight: '900',
    fontSize: width * 0.05,
    color: 'black',
    alignSelf: 'flex-start',
    paddingVertical:5
  },
  heading2: {
    fontFamily: 'poppins',
    fontWeight: '400',
    fontSize: width * 0.038,
    color: Colors.borderGray,
    paddingVertical:10
  },
  groceriesHead: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  searchBox: {
    width: width * 0.85,
    marginVertical:15
  },
});
export default HomeScreen;
