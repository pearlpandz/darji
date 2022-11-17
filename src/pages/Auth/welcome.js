import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { WelcomeContext } from '../../services/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const slides = [
  {
    key: 1,
    title: 'Customize Your Cloths',
    text: 'we provide a feature that allows you to customise and order a shirt of your own choice',
    image: require('./../../assets/images/men.png'),
    backgroundColor: '#B9B0A2',
  },
  {
    key: 2,
    title: 'Alter Your Cloths',
    text: 'we have introduced the ability to alter your clothes yourself to make changes to past orders',
    image: require('./../../assets/images/women.jpg'),
    backgroundColor: '#D97D54',
  },
  {
    key: 3,
    title: 'Get Measured via AR',
    text: 'use the latest technology of AR you can now take measurement of your body easily with a perfect fit',
    image: require('./../../assets/images/men.png'),
    backgroundColor: '#87BCBF',
  }
];

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    paddingBottom: 7,
    marginBottom: 20
  },
  imgContainer: {
    overflow: 'hidden',
    height: 300,
    marginBottom: 30,
    borderRadius: 20
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: Dimensions.get('window').width - 100,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    paddingBottom: 15,
    textTransform: 'capitalize',
    textAlign: 'center',
    lineHeight: 26
  },
  skipBtn: {
    fontSize: 14,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '400',
  },
  nextBtn: {
    fontSize: 14,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  dotStyle: {
    height: 7,
    width: 7,
    backgroundColor: '#0000004D',
  },
  activeDotStyle: {
    backgroundColor: '#fff',
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
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.imgContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };
  const onDone = async () => {
    setWelcome(true);
    await AsyncStorage.setItem('isFirstVisit', String(true))
  }; 
  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      onDone={onDone}
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
