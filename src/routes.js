import { createStackNavigator, createAppContainer } from 'react-navigation';

// Pages
import Main from './pages/main';

const AppNavigator = createStackNavigator({
    Main
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#0a54cc"
        },
        headerTintColor: "#FFFFFF"
    }
});

export default createAppContainer(AppNavigator);