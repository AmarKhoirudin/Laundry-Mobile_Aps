import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import { Color } from '../../utils';
import ButtonIcon from '../ButtonIcon';
import Gap from '../Gap';

const Saldo = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.informasiSaldo}>
        <View style={styles.wrapperText}>
          <Text style={styles.labelSaldo}>Saldo : </Text>
          <Text style={styles.valueSaldo}>Rp. 100.000</Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.labelPoint}>Antar Point : </Text>
          <Text style={styles.valuePoint}>100 points</Text>
        </View>
      </View>
      <View style={styles.buttonActions}>
          <ButtonIcon title="Add Point" />
          <Gap width={10} />
          <ButtonIcon title="Get Point" />
      </View>
    </View>
  );
};

export default Saldo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    padding: 17,
    marginHorizontal: 30,
    marginTop: -windowHeight * 0.07,
    borderRadius: 10,
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  informasiSaldo: {
    width: '60%',
  },
  wrapperText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  valueSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  },
  labelPoint: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Regular',
  },
  valuePoint: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Bold',
    color: Color.primary
  },
  buttonActions: {
      flex: 1,
      flexDirection: "row",
      justifyContent:"flex-end"
  }
});
