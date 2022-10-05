import React, {useEffect} from "react";
import CardInfo from "../Page/Cards/CardInfo";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import InfoCard from "../Page/CardInsides/CardInsides";
import pageStore from "../../lib/store/page-store";
import DocSog from "../Page/Doc/DocSog";
import {observer} from "mobx-react";


const Stack = createStackNavigator();
export default observer(({}) => {
    useEffect(() => {
        {
            !pageStore.header
        }
    })
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*<Stack.Screen  name={'Мой займ'} options={{headerShown: false}}*/}
                {/*              component={Home}/>*/}
                <Stack.Screen name={'Займ'}  options={{
                    gestureEnabled: true,
                    headerTintColor:'#F2529FFF',
                    headerStyle:{
                        backgroundColor:'#4681F2'
                    },headerShown: false
                }} component={CardInfo}/>
                <Stack.Screen name={'name'} options={{
                    gestureEnabled: true,
                    title:'',
                    headerShown: false
                }} component={InfoCard}/>
                <Stack.Screen name={'Политика конфидициальности'} options={{
                    gestureEnabled: true,
                    title:'',
                    headerShown: false
                }} component={DocSog}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

})
