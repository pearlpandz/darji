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
import Logo from './../../assets/logo.png'


const AuthenticationPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#fff' }}>
      {/* <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}> */}
          <View style={styles.headerSection}>
            <Image style={styles.logo} source={Logo} />
            <Image style={styles.backgroundImage} source={Background} />
          </View>
          <View style={{ flex: 1, position: 'relative', top: -44 }}>
            <TabView navigation={navigation} />
          </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    height: 270,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  logo: {
    height: 100,
    width: 90,
    position: 'absolute',
    zIndex: 2
  }
});

export default AuthenticationPage;
