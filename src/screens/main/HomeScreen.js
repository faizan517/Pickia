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

const {height, width} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Search style={styles.searchBox}/>
      <View style={styles.header}>
        <Text>Delivering to:</Text>
      </View>
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
      <View style={styles.groceriesHead}>
      <Text style={styles.heading}>Groceries</Text>
      <Text style={styles.heading2}>See all</Text>
      </View>
      <View style={styles.groceriesView}>
        <Product type='delta'/>
        <Product type='delta'/>
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
    padding:16
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
    // flexDirection:'row'
  },
  header:{
    height:height*0.15,
    // width:width*0.09,
    backgroundColor:'red',
    padding:-15
  },
  packagesView:{
    height:height*0.155,
    // width:width*0.09,
    // backgroundColor:'skyblue',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  groceriesView:{
    height:height*0.27,
    marginVertical:10,
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    // alignItems:'center'
    alignContent:"space-between"
    // alignSelf:'flex-end'
  },
  heading:{
    ...Fonts.PoppinsBlack,
    fontWeight:'900',
    fontSize: width * 0.05,
    color:'black'
  },
  heading2:{
    fontFamily:'poppins',
    fontWeight:'400',
    fontSize: width * 0.038,
    color:Colors.borderGray,
  },
  groceriesHead:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  searchBox:{
    width:width*0.85
  },
});
export default HomeScreen;
