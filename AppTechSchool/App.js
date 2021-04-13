import { createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Home';
import AboutScreen from './About';
import ContactScreen from './Contacts';
import FestScreen from './Fest';
import SubScreen from './Sub';
import SechScreen from './Sech';

const navigator = createStackNavigator(

    {
      Home: HomeScreen,
      About: AboutScreen,
      Contacts: ContactScreen,
      Fest: FestScreen,
      Sub: SubScreen,
      Sech: SechScreen,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions:{
        title: "Tech School",
        headerTransparent: false,
      }
    },
);


export default createAppContainer(navigator);

//npm install @react-navigation/native @react-navigation/stack
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
