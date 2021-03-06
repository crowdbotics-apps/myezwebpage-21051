import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList125164Navigator from '../features/ArticleList125164/navigator';
import ArticleList125163Navigator from '../features/ArticleList125163/navigator';
import ArticleList125162Navigator from '../features/ArticleList125162/navigator';
import Maps125130Navigator from '../features/Maps125130/navigator';
import Add-Item125129Navigator from '../features/Add-Item125129/navigator';
import Maps125125Navigator from '../features/Maps125125/navigator';
import UserProfile125121Navigator from '../features/UserProfile125121/navigator';
import BlankScreen0125098Navigator from '../features/BlankScreen0125098/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList125164: { screen: ArticleList125164Navigator },
ArticleList125163: { screen: ArticleList125163Navigator },
ArticleList125162: { screen: ArticleList125162Navigator },
Maps125130: { screen: Maps125130Navigator },
Add-Item125129: { screen: Add-Item125129Navigator },
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
