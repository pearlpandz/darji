import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

import { AuthContext, WelcomeContext } from './src/services/context';

import Welcome from './src/pages/Auth/welcome';

import AuthenticationPage from './src/pages/Auth';
import Login from './src/pages/Auth/login';
import Register from './src/pages/Auth/register';
import ForgetPassword from './src/pages/App/settings/forgetpassword';
import OtpValidation from './src/pages/Auth/otp';

import Profile from './src/pages/App/settings/profile';
import ChangePassword from './src/pages/App/settings/changepassword';

import HomePage from './src/pages/App/home';
import CartPage from './src/pages/App/cart';
import BlogPage from './src/pages/App/blogs';
import AccountPage from './src/pages/App/settings';
import SelectDesignOption from './src/pages/App/home/selectDesignOption';
import SelectDressToDesign from './src/pages/App/home/selectDressToDesign';
import ClothCategory from './src/pages/App/home/clothCategory';
import Measurement from './src/pages/App/home/measurement';
import SuccessMeasurement from './src/pages/App/home/successMeasurement';
import ClothSelection from './src/pages/App/home/clothSelection';
import ClothDetail from './src/pages/App/home/clothDetailView';
import ClothList from './src/pages/App/home/clothListView';

const WelcomeStack = createNativeStackNavigator();
const WelcomeStackScreen = () => (
  <WelcomeStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="intro">
    <WelcomeStack.Screen name="intro" component={Welcome} />
  </WelcomeStack.Navigator>
);

const AuthStack = createNativeStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="authindex">
    <AuthStack.Screen
      name="authindex"
      component={AuthenticationPage}
      options={{
        headerShown: false,
      }} />

    <AuthStack.Screen name="register" component={Register} options={{
      headerShown: true,
      title: 'Register',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      },
    }} />
    <AuthStack.Screen name="login" component={Login} options={{
      headerShown: false,
      title: 'Login',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      },
    }} />
    <AuthStack.Screen name="otp" component={OtpValidation} options={{
      headerShown: true,
      title: 'OTP Verification',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      },
    }} />
    <AuthStack.Screen name="changepassword" component={ChangePassword} options={{
      headerShown: true,
      title: 'Change Password',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      },
    }} />
    <AuthStack.Screen name="forgetpassword" component={ForgetPassword} options={{
      headerShown: true,
      title: 'Forget Password',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      },
    }} />
  </AuthStack.Navigator>
)

const Tab = createBottomTabNavigator();
const TabStackScreen = () => (
  <Tab.Navigator
    initialRouteName="design"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {

        // icon settings
        let iconName;
        if (route.name === 'landing') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'cart') {
          iconName = focused ? 'cart' : 'cart-outline';
        } else if (route.name === 'blog') {
          iconName = focused ? 'reader' : 'reader-outline';
        } else if (route.name === 'setting') {
          iconName = focused ? 'settings' : 'settings-outline';
        } else if (route.name === 'account') {
          iconName = focused ? 'person' : 'person-outline';
        }

        // You can return any component that you like here!
        return (
          <Ionicons name={iconName} size={18} color={color} />
        );
      },
      tabBarActiveTintColor: '#e8875b',
      tabBarInactiveTintColor: 'gray',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { height: 60, paddingBottom: 10, paddingTop: 5 },
    })}>
    <Tab.Screen
      name="landing"
      component={HomeStackScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
      }}
    />
    <Tab.Screen
      name="blog"
      component={BlogStackScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Blogs',
      }}
    />
    <Tab.Screen
      name="cart"
      component={CartPage}
      options={{
        headerShown: false,
        tabBarLabel: 'Cart',
      }}
    />
    <Tab.Screen
      name="account"
      component={AccountStackScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Account',
      }}
    />
  </Tab.Navigator>
);

const CommonStack = createNativeStackNavigator();
const CommonStackScreen = () => (
  <CommonStack.Navigator screenOptions={{ headerShown: false }}>
    <CommonStack.Screen name="myprofile" component={Profile} options={{
      headerShown: false,
    }} />
    <CommonStack.Screen name="clothcategory" component={ClothCategory} options={() => ({
      title: "Cloth Category",
      headerShown: true,
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    })}
    />
    <CommonStack.Screen name="clothselection" component={ClothSelection} options={() => ({
      title: "Cloth Selection",
      headerShown: true,
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    })}
    />
    <CommonStack.Screen name="clothdetail" component={ClothDetail} options={() => ({
      title: "Cloth Detail",
      headerShown: false
    })}
    />
    <CommonStack.Screen name="clothlist" component={ClothList} options={() => ({
      title: "Cloth List",
      headerShown: false
    })}
    />
    <CommonStack.Screen name="measurement" component={Measurement} options={() => ({
      title: "Measurement",
      headerShown: false
    })}
    />
    <CommonStack.Screen name="successMeasurement" component={SuccessMeasurement} options={() => ({
      title: "Measurement",
      headerShown: false
    })}
    />
  </CommonStack.Navigator>
);

// Home page and it's stack screens
const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="home" component={HomePage} />
    <HomeStack.Screen name="selectdesign" component={SelectDesignOption} options={({ route }) => ({
      title: route.params.title,
      headerShown: true,
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    })}
    />
    <HomeStack.Screen name="selectdress" component={SelectDressToDesign} options={({ route }) => ({
      title: route.params.title,
      headerShown: true,
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    })}
    />
  </HomeStack.Navigator>
);

// Blog page and it's stack screens
const BlogPageStack = createNativeStackNavigator();
const BlogStackScreen = () => (
  <BlogPageStack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }}>
    <BlogPageStack.Screen name="index" component={BlogPage} />
  </BlogPageStack.Navigator>
);

// Account page and it's stack screens
const AccountPageStack = createNativeStackNavigator();
const AccountStackScreen = () => (
  <AccountPageStack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }}>
    <AccountPageStack.Screen name="index" component={AccountPage} />
  </AccountPageStack.Navigator>
);


const RootStack = createNativeStackNavigator();
const RootStackScreen = ({ isWelcomed, isAuthenticated }) => {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isAuthenticated ? isWelcomed ? 'App' : 'Welcome' : 'Auth'}>
      {
        isAuthenticated ?
          isWelcomed ?
            <>
              <RootStack.Screen
                name="App"
                component={TabStackScreen}
                options={{
                  headerShown: false,
                }} /><RootStack.Screen
                name="Common"
                component={CommonStackScreen}
                options={{
                  headerShown: false,
                }} />
            </> :
            <RootStack.Screen name="Welcome" component={WelcomeStackScreen} /> :
          <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{
              headerShown: false,
            }} />
      }
    </RootStack.Navigator>
  );
};

const App = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [isAuthenticated, setAuthStatus] = useState(false);
  const [isWelcomed, setWelcome] = useState(false);
  const [isCheckedAsyncStorage, setChecked] = useState(false);

  useEffect(() => {
    const checkAsyncStorage = async () => {
      const _isFirstVisit = await AsyncStorage.getItem('isFirstVisit')
      if (_isFirstVisit === 'true') {
        setWelcome(true);
      } else {
        console.log('user first open');
        setWelcome(false);
      };

      const _isAuthenticated = await AsyncStorage.getItem('isAuthenticated')
      if (_isAuthenticated === 'true') {
        console.log('user already logged in');
        setAuthStatus(true);
      } else {
        console.log('user not logged in');
        setAuthStatus(false);
      };

      setChecked(true);
    };

    checkAsyncStorage();
  }, [AsyncStorage]);

  return (
    <WelcomeContext.Provider value={{ isWelcomed, setWelcome }}>
      <AuthContext.Provider value={{ isAuthenticated, setAuthStatus }}>
        <NavigationContainer>
          <StatusBar style="auto" />
          {
            isCheckedAsyncStorage ?
              <RootStackScreen
                isAuthenticated={isAuthenticated}
                isWelcomed={isWelcomed}
              /> :
              null
          }
        </NavigationContainer>
      </AuthContext.Provider>
    </WelcomeContext.Provider>
  )
};

export default App;
