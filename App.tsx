import { StyleSheet, View } from 'react-native';
import { LoginScreen } from './screens';
import { 
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { TabController } from 'react-native-ui-lib';
import { NavigationContainer } from '@react-navigation/native';
import { CustomDrawerContent } from './custom_drawer_content';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LoginScreen />
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Homes" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

