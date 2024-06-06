import React, {StyleSheet, Text, TextInput, Dimensions} from 'react-native';
import {View} from 'react-native';
import Icons from '../../utils/Icons';
import Colors from '../../utils/Colors';


const {height, width} = Dimensions.get('window');

const Search = props => {
  const {
    placeholder = 'Search Store',
    editable,
    keyboardType = 'default',
    style,
  } = props;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.icon}>
        <Icons.Vector height={20} width={20} />
      </View>
      <TextInput
        style={styles.input }
        placeholder={placeholder}
        placeholderTextColor={Colors.borderGray}
        editable={editable}
        keyboardType={keyboardType}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width*0.9,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.primary,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,
  },
  title: {
    fontSize: 0.06 * width,
    fontWeight: '400',
    color:Colors.black,
  },
  input: {
    flex:1,
    fontSize: 0.045 * width,
    paddingHorizontal:10,
  },
  // icon:{
  //   position:'absolute',
  //   top:15,
  //   left:10,
  // }
});
export default Search;
