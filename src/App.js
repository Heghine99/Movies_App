import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {store} from './state-management/store';

import Home from './screens/HomeScreens/Home';
import Details from './screens/detailsScreen/Details';
import Liked from './screens/LikedScreens/Liked';
import Profile from './screens/ProfileScreens/Profile';
import Dislike from './screens/DislikeScreen/dislike';
import Save from './screens/SaveScreens/Save';
import Rating from './screens/RatingScreens/Rating';
import colors from './assets/colors/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DarkModeContextProvider} from './components/Context/context';
import {DarkModeContext} from './components/Context/context';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const {mode} = useContext(DarkModeContext);

  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {backgroundColor: mode ? colors.white : colors.gray},
        activeTintColor: colors.orange,
        inactiveTintColor: mode ? colors.gray : colors.white,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Movies App"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Dislike"
        component={Dislike}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="dislike1" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="heart" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" size={32} color={color} />
          ),
          // backgroundColor: mode ? colors.white : colors.gray,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <DarkModeContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Save"
              component={Save}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Rating"
              component={Rating}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DarkModeContextProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.black,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
