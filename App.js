
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import SeasonalScreen from './screens/SeasonalScreen'
import ContactScreen from './screens/ContactScreen'
import AboutScreen from './screens/AboutScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';


//const Stack = createStackNavigator()
//const Drawer = createDrawerNavigator()


export default function App() {
  return (
    <>
    <NavigationContainer>
      
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
