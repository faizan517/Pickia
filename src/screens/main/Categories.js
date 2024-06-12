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

const {height, width} = Dimensions.get('window');

const Categories = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Search style={styles.searchBox} />
      <View style={styles.CategoriesView}>
        <Product type="beta" onPress={() => navigation.navigate('SubCategories')}/>
        <Product type="beta" onPress={() => navigation.navigate('SubCategories')}/>
        <Product type="beta" />
        <Product type="beta" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width:'90%',
    // backgroundColor: 'skyblue',
    padding: 16,
    backgroundColor:Colors.white,
  },
  CategoriesView: {
    width: width * 0.9,
    height: height * 0.5,
    flexWrap: 'wrap',
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-around',
    alignSelf: 'center',
  },
  searchBox:{
    elevation:5,
    borderWidth:0,
    backgroundColor:Colors.white,
  },
});
export default Categories;
