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

const {height, width} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Delivering to:</Text>
      </View>
      <Search/>
        <Text style={styles.heading}>Products</Text>
      <View style={styles.packagesView}>
        <Product type='alpha'/>
        <Product type='alpha'/>
        <Product type='alpha'/>
      </View>
      <Text style={styles.heading}>Top Products</Text>
      <View style={styles.packagesView}>
        <Product type='alpha'/>
        <Product type='alpha'/>
        <Product type='alpha'/>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:15
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
    // flexDirection:'row'
  },
  header:{
    height:height*0.2,
    // width:width*0.09,
    backgroundColor:'red',
    padding:-15
  },
  packagesView:{
    height:height*0.2,
    // width:width*0.09,
    backgroundColor:'skyblue',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  heading:{
    fontFamily:'poppins',
    fontWeight:'500',
    fontSize: width * 0.055,
    color:'black'
  },
});
export default HomeScreen;
