import React  from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import Icons from '../../utils/Icons';

const{ height,width} = Dimensions.get('window')

const AddBtn = props => {
  const {title = '', onPress = () => {}, disabled = false, style={}} = props;
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress} disabled={disabled}>
      <Icons.Plus height={20} width={20}/>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'rgba(55, 183, 108, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.075,
    height: height * 0.04,
    borderRadius: 10,
  },
  title: {
    fontSize: 0.06 * width,
    fontWeight: '500',
    color: 'white',
  },
});
export default AddBtn;
