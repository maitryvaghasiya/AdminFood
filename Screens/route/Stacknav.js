import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Order from '../container/Order';
import Menu from '../container/Menu';
import Setting from '../container/Setting';
import PizzaList from '../container/PizzaList';
import AddCategoryScrn from '../container/AddCategoryScrn';
import AddPizzaScrn from '../container/AddPizzaScrn';


    const Stack = createNativeStackNavigator();

    const Ordering = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Order" component={Order} />
                {/* <Stack.Screen name="PizzaD" component={PizzaD} /> */}
            </Stack.Navigator>
        )
    }
    const FoodMenu = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="PizzaMenu" component={PizzaList} />
                <Stack.Screen name="AddCategory" component={AddCategoryScrn} />
                <Stack.Screen name="AddPizza" component={AddPizzaScrn} />
                {/* <Stack.Screen name="PizzaD" component={PizzaD} /> */}
            </Stack.Navigator>
        )
    }

    const Settings = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Setting" component={Setting} />
                {/* <Stack.Screen name="PizzaD" component={PizzaD} /> */}
            </Stack.Navigator>
        )
    }
    // const Pizza = () => {
    //     return (
    //         <Stack.Navigator>
    //             <Stack.Screen name="PizzaMenu" component={PizzaList} />
    //             {/* <Stack.Screen name="PizzaD" component={PizzaD} /> */}
    //         </Stack.Navigator>
    //     )
    // }

export{Ordering,FoodMenu,Settings}