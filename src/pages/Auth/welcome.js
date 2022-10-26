import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { WelcomeContext } from '../../services/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const slides = [
  {
    key: 1,
    title: 'buy a property',
    text: 'the right place to find your dream home',
    image: require('./../../assets/images/buy.png'),
    backgroundColor: '#fff',
  },
  {
    key: 2,
    title: 'rent a property',
    text: 'the right place to find the idel lessee',
    image: require('./../../assets/images/rent.png'),
    backgroundColor: '#fff',
  },
  {
    key: 3,
    title: 'list a property',
    text: 'the place where you can sell your property with the best price',
    image: require('./../../assets/images/list.png'),
    backgroundColor: '#fff',
  },
  {
    key: 4,
    title: 'commercial list',
    text: 'your place to choose the highest investment return unit from the commercial list',
    image: require('./../../assets/images/commercial.png'),
    backgroundColor: '#fff',
  },
];

const styles = StyleSheet.create({
  slideContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 200,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    paddingBottom: 7,
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingTop: 100,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: Dimensions.get('window').width - 40,
  },
  text: {
    fontSize: 16,
    color: '#404040',
    paddingBottom: 15,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  skipBtn: {
    fontSize: 14,
    color: '#717172',
    textTransform: 'uppercase',
    fontWeight: '400',
  },
  nextBtn: {
    fontSize: 14,
    color: '#105091',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  dotStyle: {
    height: 7,
    width: 7,
    backgroundColor: '#ecebeb',
  },
  activeDotStyle: {
    backgroundColor: '#a0c3e4',
    height: 7,
    width: 35,
  },
});

function Welcome({ navigation }) {
  // const [showRealApp, setShowRealApp] = useState(false);

  const { setWelcome } = useContext(WelcomeContext);

  const _renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.slideContainer,
          { backgroundColor: item.backgroundColor },
        ]}>
        <View style={[styles.slide]}>
          <View style={styles.imgContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };
  const _onDone = async () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state

    setWelcome(true);
    // await AsyncStorage.setItem('isFirstVisit', true.toString()) // temp hide
    setTimeout(() => {
      navigation.navigate('App', {
        screen: 'landing'
      });
    }, 1000);
  };
  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
      showSkipButton={true}
      skipLabel={<Text style={styles.skipBtn}>skip</Text>}
      nextLabel={<Text style={styles.nextBtn}>next</Text>}
      doneLabel={<Text style={styles.nextBtn}>get started</Text>}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
    />
  );
}

export default Welcome;
