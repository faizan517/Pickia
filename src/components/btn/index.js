import React, {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';
import Icons from '../../utils/Icons';

const {height, width} = Dimensions.get('window');

const Btn = props => {
  const {
    title = 'login',
    onPress = () => {},
    disabled = false,
    style = {},
    isTrue = false,
  } = props;
  return (
    <TouchableOpacity
      style={[isTrue ? styles.btn2 : styles.btn, style]}
      onPress={onPress}
      disabled={disabled}>
      {isTrue && <Icons.Logout height={20} width={20} />}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.6,
    height: height * 0.06,
    borderRadius: 10,
  },
  btn2: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: width * 0.6,
    height: height * 0.06,
    borderRadius: 10,
    flexDirection: 'row',
    paddingRight: 30,
  },
  title: {
    fontSize: 0.06 * width,
    fontWeight: '500',
    color: 'white',
    ...Fonts.PoppinsRegular,
  },
});
export default Btn;
