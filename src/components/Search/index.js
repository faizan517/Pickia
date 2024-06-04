import React, {StyleSheet, Text, TextInput, Dimensions} from 'react-native';
import {View} from 'react-native';
import Icons from '../../utils/Icons';
import Vector from '../../assets/svgs/vector.svg';

const {height, width} = Dimensions.get('window');

const Search = props => {
  const {
    placeholder = 'Search Store',
    editable,
    keyboardType = 'default',
    style,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Vector height={20} width={20} />
      </View>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        editable={editable}
        keyboardType={keyboardType}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(55, 183, 108, 1)',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,
  },
  title: {
    fontSize: 0.06 * width,
    fontWeight: '400',
  },
  input: {
    fontSize: 0.05 * width,
    paddingHorizontal:10
    // borderWidth: 1,
    // borderRadius: 10,
  },
  // icon:{
  //   position:'absolute',
  //   top:15,
  //   left:10,
  // }
});
export default Search;
