
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';

import MainTabScreen from './MainTabScreen';
import SupportScreen from './SupportScreen';
import SettingsScreen from './SettingsScreen';
import BookmarkScreen from './BookmarkScreen';


const Drawer = createDrawerNavigator();

const App = () => {
  return(
    <NavigationContainer>
     {<Drawer.Navigator drawerContent = {props => <DrawerContent { ...props } />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
  </Drawer.Navigator>}
    </NavigationContainer>
  );
}

export default App;