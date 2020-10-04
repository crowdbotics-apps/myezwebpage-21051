import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps125125Navigator from '../features/Maps125125/navigator';
import UserProfile125121Navigator from '../features/UserProfile125121/navigator';
import BlankScreen0125098Navigator from '../features/BlankScreen0125098/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps125125: { screen: Maps125125Navigator },
UserProfile125121: { screen: UserProfile125121Navigator },
BlankScreen0125098: { screen: BlankScreen0125098Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
