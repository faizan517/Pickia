import React, {StyleSheet, Text, TextInput,Dimensions} from 'react-native';
import {View} from 'react-native';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

const{ height,width} = Dimensions.get('window')

const Input = props => {
  const {
    title = 'Email',
    placeholder = 'Email',
    editable,
    keyboardType = 'default',
    style,
    ptitleStyle,
  } = props;
  return (
    <View style={[styles.container,style]}>
      <Text style={[styles.title,ptitleStyle]}>{title}</Text>
      <TextInput
        style={styles.input}
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
    width: width*0.85,
    alignSelf: 'center',
  },
  title: {
    fontSize: 0.055 * width,
    fontWeight: '400',
    marginLeft: 1,
    color:Colors.black,
    ...Fonts.PoppinsRegular,
  },
  input: {
    fontSize: 0.05 * width,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray2,
    color:Colors.black,
  },
});
export default Input;
