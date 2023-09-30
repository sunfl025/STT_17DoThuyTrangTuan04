import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Bai1a from './components/Bai1a';
import Bai1b from './components/Bai1b';
import Bai1c from './components/Bai1c';
import Bai1d from './components/Bai1d';
import Bai1e from './components/bai1e';
import Bai2a from './components/Bai2a';
import XMEye from './components/XMEye';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Bai1a" component={Bai1a} />
        <Drawer.Screen name="Bai1b" component={Bai1b} />
        <Drawer.Screen name="Bai1c" component={Bai1c} />
        <Drawer.Screen name="Bai1d" component={Bai1d} />
        <Drawer.Screen name="Bai1e" component={Bai1e} />
        <Drawer.Screen name="Bai2a" component={Bai2a} />
        <Drawer.Screen name="XMEye" component={XMEye} />

       
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


