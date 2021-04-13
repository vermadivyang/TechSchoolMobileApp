import { createStackNavigator, createAppContainer} from 'react-navigation';
import { Linking } from "react-native-gesture-handler";
import React from 'react';
import HomeScreen from './Home';
import AboutScreen from './About';
import ContactScreen from './Contacts';
import FestScreen from './Fest';
import SubScreen from './Sub';
import SechScreen from './Sech';
import MapScreen from './Map';
import LinkScreen from './Link';

const navigator = createStackNavigator(

    {
      Home: HomeScreen,
      About: AboutScreen,
      Contacts: ContactScreen,
      Fest: FestScreen,
      Sub: SubScreen,
      Sech: SechScreen,
      Map: MapScreen,
      Link: LinkScreen,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions:{
        title: "Tech school",
        headerTransparent: false,
        headerBackTitle: 'Previous',
        headerTitleStyle: { fontSize: 19,},
      }
    },
);


export default createAppContainer(navigator);

//npm install @react-navigation/native @react-navigation/stack
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
//        headerLeft: <Git onPress={() => Linking.openURL('http://github.com')}/>,
