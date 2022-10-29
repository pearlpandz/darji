import React from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Image} from 'react-native';
import Navigation from '../../reusables/navigation';
import TabView from './tab';
import Background from './../../assets/images/background.png'
import Logo from './../../assets/images/logo.jpg'


const AuthenticationPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#fff' }}>
      {/* <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}> */}
          <View style={styles.headerSection}>
            {/* <Image style={styles.logo} source={Logo} /> */}
            <Image source={Background} />
          </View>
          <View style={{ flex: 1 }}>
            <TabView navigation={navigation} />
          </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    height: 220,
    position: 'relative'
  },
  logo: {
    height: 80,
    width: 150,
    position: 'absolute',
    left: 10,
    top: 80,
    zIndex: 2
  }
});

export default AuthenticationPage;
