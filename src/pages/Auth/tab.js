import * as React from 'react';
import { View, useWindowDimensions, Text, Dimensions, StyleSheet, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Login from './login';
import Register from './register';

export default function TabPageView({ navigation, index, setIndex }) {
    const layout = useWindowDimensions();


    const [routes] = React.useState([
        { key: 'signin', title: 'Sign In' },
        { key: 'signup', title: 'Sign Up' }
    ]);

    const Route = ({ type }) => {
        return <ScrollView style={{ flex: 1 }}>
            {type === 'signin' ? <Login navigation={navigation} /> : <Register navigation={navigation} />}
        </ScrollView>
    };

    const renderScene = SceneMap({
        signin: () => <Route type='signin' />,
        signup: () => <Route type='signup' />,
    });

    const renderTabBar = (props) => {
        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                    return (
                        <TouchableOpacity
                            key={i}
                            style={styles.tabItem}
                            onPress={() => setIndex(i)}>
                            <Animated.Text style={{
                                color: i === index ? '#fff' : '#aaa',
                                fontWeight: i === index ? 'bold' : '400',
                                borderBottomWidth: 4,
                                borderColor: i === index ? '#e8875b' : 'transparent',
                                textTransform: 'uppercase',
                                letterSpacing: 1,
                                textAlign: 'center',
                                padding: 10
                            }}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    const tabViewMemo = React.useMemo(() => (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            swipeEnabled={true}
        />
    ), [index])

    return (
        <>
            {tabViewMemo}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
    },
    tabItem: {
        flex: 1,
    },
});