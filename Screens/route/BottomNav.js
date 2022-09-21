import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { FoodMenu, Ordering, RestoListMenu, Settings } from './Stacknav';


const Tab = createBottomTabNavigator();

export const BottomNav = () => {
    return (
        <Tab.Navigator
            
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Menu') {
                    iconName = focused
                    return <MaterialIcons name={'delivery-dining'} size={30} color={color} />;    
                  } else if (route.name === 'Order') {
                    iconName = focused 
                    return <Ionicons name={"restaurant"} size={22} color={color} />;
                  } else if (route.name === 'Setting') {
                    iconName = focused 
                    return <Ionicons name={'file-tray-full-sharp'} size={22} color={color} />;
                
                  }
      
                //   return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#32B768',
                tabBarInactiveTintColor:"#6B7280",

                headerShown: false,
              })}

        >
            <Tab.Screen name="Order" component={Ordering} />
            <Tab.Screen name="Menu" component={FoodMenu} />
            <Tab.Screen name="Setting" component={Settings} />

        </Tab.Navigator>
    )
}
