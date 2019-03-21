import React from 'react';
import { createAppContainer, createDrawerNavigator, DrawerItem, DrawerItems } from 'react-navigation';
import { ScrollView, SafeAreaView } from 'react-native';

// Pages
import Main from './pages/main';
import Historic from './pages/historic';

const CustomDrawerComponent = (props) =>(
    <SafeAreaView style={{flex: 1}}>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
);

const AppNavigator = createDrawerNavigator({
    Main,
    Historic
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#0a54cc"
        },
        headerTintColor: "#FFFFFF"
    },
    contentComponent: CustomDrawerComponent
});

export default createAppContainer(AppNavigator);