import * as React from 'react';
import { View, useWindowDimensions, Text, Dimensions, StyleSheet, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const Route = ({type}) => {
    return <ScrollView style={{flex: 1, backgroundColor: '#F7F7F7' }}>
        <View style={{padding:15, paddingBottom: 0 }}>
            <Text>{type} blogs will come</Text>
        </View>
    </ScrollView>
};

const renderScene = SceneMap({
    men: () => <Route type='men' />,
    women: () => <Route type='women' />,
    kid: () => <Route type='kid' />,
});


export default function TabPageView() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'men', title: 'Men' },
        { key: 'women', title: 'Women' },
        { key: 'kid', title: 'Kids' },
    ]);

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
                                color: i === index ? '#212224' : '#aaa',
                                fontWeight: i === index ? 'bold' : '400',
                                borderBottomWidth: 2,
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

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            swipeEnabled={true}
        />
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