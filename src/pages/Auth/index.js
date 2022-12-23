import React, {useMemo, useEffect} from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Image} from 'react-native';
import Navigation from '../../reusables/navigation';
import TabPageView from './tab';
import Background from './../../assets/images/background.png'
import Logo from './../../assets/logo.png'

const AuthenticationPage = ({ navigation, route }) => {
  const [index, setIndex] = React.useState(route.params?.initialIndex || 0);

  const tabView = useMemo(() => (
    <TabPageView navigation={navigation} index={index} setIndex={setIndex} />
  ), [index])

  useEffect(() => {
    if(route.params?.initialIndex) {
      setIndex(route.params?.initialIndex)
    }
  }, [route.params])
  
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#fff' }}>
      {/* <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}> */}
          <View style={styles.headerSection}>
            <Image style={styles.logo} source={Logo} />
            <Image style={styles.backgroundImage} source={Background} />
          </View>
          <View style={{ flex: 1, position: 'relative', top: -44 }}>
            {tabView}
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
