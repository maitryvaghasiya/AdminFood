import { View, Text } from 'react-native'
import React from 'react'
import Menu from './Screens/container/PizzaList'
import { NavigationContainer } from '@react-navigation/native';
// import Stacknav from './android/app/container/Stacknav';
import { BottomNav } from './Screens/route/BottomNav';
import { Provider } from 'react-redux';
import { configStore } from './Screens/redux/store';
// import PizzaList from './android/app/container/PizzaList';
import PizzaList from './Screens/container/PizzaList';


export default function App() {

  let storeA = configStore();

  return (
    <>
      {/* <Menu /> */}
      <Provider store={storeA}>
        <NavigationContainer> 
        {/* <Stacknav /> */}
        <BottomNav />
       </NavigationContainer>
        {/* <Menu /> */}
        {/* <PizzaList/> */}
        {/* <AddPizzaScrn /> */}
        {/* <AddCategoryScrn /> */}
      </Provider>

    </>
  )
}