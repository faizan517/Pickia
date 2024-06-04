import React, {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';


const{ height,width} = Dimensions.get('window')

const Btn = props => {
  const {title = 'login', onPress = () => {}, disabled = false, style={}} = props;
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress} disabled={disabled}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: width*0.6,
    height: height* 0.06,
    borderRadius: 10,
  },
  title: {
    fontSize: 0.06 * width,
    fontWeight: '500',
    color: 'white',
    ...Fonts.PoppinsRegular
  },
});
export default Btn;
