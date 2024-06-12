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
import Icons from '../../utils/Icons';
import ProductList from './ProductList';

const {height, width} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.headView, {}]}>
        {/* <Text
          style={[
            styles.heading2,
            {color: Colors.primary, paddingHorizontal: 5},
          ]}>
          Delivering to:
        </Text>
        <Text style={[styles.heading2, {right:65}]}>Gulshan,Karachi</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
        <Icons.CartIcon  />
        </TouchableOpacity> */}
      </View>

      <Search style={styles.searchBox} />

      <Image
        style={styles.header}
        source={require('../../assets/logos/Banner.png')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Products</Text>
        <View style={styles.packagesView}>
          <Product type="alpha" onPress={()=>navigation.navigate('Cart')}/>
          <Product type="alpha" onPress={()=>navigation.navigate('Cart')}/>
          <Product type="alpha" onPress={()=>navigation.navigate('Cart')}/>
        </View>
        <Text style={styles.heading}>Top Products</Text>
        <View style={styles.packagesView}> 
          <Product type="alpha" onPress={()=>navigation.navigate('Cart')}/>
          <Product type="alpha" onPress={()=>navigation.navigate('Cart')}/>
          <Product type="alpha" onPress={()=>navigation.navigate('Cart')}/>
        </View>
        <View style={styles.groceriesHead}>
          <Text style={styles.heading}>Groceries</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Categories')}>
            <Text style={styles.heading2}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.groceriesView}>
          <Product type="delta" onPress={()=>navigation.navigate('ProductList')}/>
          <Product type="delta" onPress={()=>navigation.navigate('ProductList')}/>
          <Product type="alpha" onPress={()=>navigation.navigate('Cart')}/>
          <Product type="alpha" onPress={()=>navigation.navigate('Cart')}/>
          <Product type="alpha" onPress={()=>navigation.navigate('Cart')}/>
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
    backgroundColor: Colors.white,
  },
  header: {
    width: width,
  },
  packagesView: {
    height: height * 0.17,
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  groceriesView: {
    height: height * 0.3,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'space-between',
  },
  heading: {
    ...Fonts.PoppinsRegular,
    fontWeight: '500',
    fontSize: width * 0.05,
    color: Colors.black,
    alignSelf: 'flex-start',
    paddingTop: 10,
  },
  heading2: {
    ...Fonts.PoppinsRegular,
    fontWeight: '400',
    fontSize: width * 0.038,
    color: Colors.borderGray,
  },
  groceriesHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBox: {
    width: width * 0.85,
    marginVertical: 15,
  },
  headView: {
    width: width*0.95,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
});
export default HomeScreen;
