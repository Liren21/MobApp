import * as React from 'react';

import {StyleSheet, View} from "react-native";
import pageStore from "../../lib/store/page-store";
import {observer} from "mobx-react";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Button} from "@rneui/themed";
import {Text} from "@rneui/themed";


export default observer(({navigation}: any) => {
    const loadScene = () => {
        navigation.navigate('Займ')
        pageStore.setHeader(false)
    }
    // const loadSceneTwo = () => {
    //     navigation.navigate('Политика конфидициальности')
    //
    // }


    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <View style={styles.mainText}>
                    <Text style={styles.textOne}>Добро пожаловать в </Text>
                </View>
                <View style={styles.mainText}>
                    <Text style={styles.textName}>Pro займ</Text>
                </View>
                <View style={styles.mainText}>
                    <Text style={styles.textOne}>Быстро, качественно, надежно</Text>
                </View>

                <View style={styles.containerText}>
                </View>

                <View style={styles.box}>
                    <Button
                        onPress={loadScene}
                        title="Займ"
                        icon={{
                            name: 'sign-out',
                            type: 'font-awesome',
                            size: 20,
                            color: 'white',
                        }}
                        iconRight
                        iconContainerStyle={{marginLeft: 10}}
                        titleStyle={{fontWeight: '700'}}
                        buttonStyle={{
                            backgroundColor: 'rgb(242,82,159)',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            borderRadius: 15,
                            height: 50,
                        }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 15,
                        }}
                    />

                </View>
                {/*<Text style={styles.textTwo} variant="bodyLarge">Используя приложение, вы соглашаетесь с <Text*/}
                {/*    style={styles.doc} onPress={loadSceneTwo}>политикой конфиденциальности</Text></Text>*/}
            </View>
        </SafeAreaProvider>
    )
})


const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        flex: 1,
        backgroundColor: '#F4C96C'
    },
    mainText: {
        marginBottom: 5,
        marginTop: 5,
    },
    containerOne: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 25
    },
    containerText: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textName: {
        color: "#193B59",
        fontWeight: "bold",
        fontSize: 70
    },
    textOne: {
        color: "#193B59",
        fontWeight: "bold",
    },
    textOnePod: {
        color: '#193B59',
        fontWeight: "bold",
        fontSize: 75
    },
    textBtn: {
        fontSize: 50,
        color: "#ffffff",
    },
    textTwo: {
        textAlign: "center",
        marginTop: 30,
        marginBottom: 30,
    },
    doc: {
        color: '#0d6efd'
    },
    box: {
        borderRadius: 15,
        marginTop: 70,
    }
});