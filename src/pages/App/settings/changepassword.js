import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Button from '../../../reusables/button';
import Header from '../../../reusables/header';
import InputPassword from '../../../reusables/InputPassword';

function ChangePassword({ navigation }) {
  const [currentpassword, setCurrentPassword] = useState();
  const [newpassword, setNewPassword] = useState();
  const [confirmNewpassword, setConfirmNewPassword] = useState();


  return (
    <View style={styles.container}>
      {/* <Header title='change password' isIconRequired={true} icon="arrow-back" onPress={() => navigation.goBack()} /> */}

      <View style={[styles.changePassword]}>
        <View style={styles.passwordContainer}>
          <InputPassword placeholder="Current Password" value={currentpassword} onChangeText={(password) => setCurrentPassword(password)} />
        </View>
        <View style={styles.passwordContainer}>
          <InputPassword placeholder="New Password" value={newpassword} onChangeText={(password) => setNewPassword(password)} />
        </View>
        <View style={styles.passwordContainer}>
          <InputPassword placeholder="Confirm New Password" value={confirmNewpassword} onChangeText={(password) => setConfirmNewPassword(password)} />
        </View>
        <TouchableOpacity style={styles.passwordContainer} onPress={() => navigation.navigate('forgetpassword')}>
          <Text style={{ textTransform: 'capitalize', color: '#6da2d8' }}>forgetten password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        {/* <Button label="cancel" type="secondary" onPress={() => navigation.goBack()} /> */}
        <Button label="verify" type="primary" onPress={() => console.log('update password')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', position: 'relative' },
  changePassword: { padding: 10, marginVertical: 20 },
  passwordContainer: { marginBottom: 20 },
  btnContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default ChangePassword