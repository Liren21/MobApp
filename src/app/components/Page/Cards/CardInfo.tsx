import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {data} from "../../general/DataCard";
import {observer} from "mobx-react";
import 'react-native-get-random-values'
import {v4 as uuid} from 'uuid'
import {Button, Card, Image, Text} from '@rneui/themed';


export default observer(({navigation}: any) => {
    const loadScene = () => {
        navigation.navigate('name')
    }

    return (
        <SafeAreaView style={styles.cardInfo}>
            <ScrollView>
                <Text style={styles.text}>Подайте заявку в 3-4 организации для 100% одобрения!</Text>
                <View style={styles.container}>

                    {
                        data.map((d) => (
                            <Card key={uuid()} containerStyle={styles.card}>
                                <View style={styles.row}>
                                    <Image
                                        containerStyle={{width: "50%", height: 150, borderRadius: 20, marginBottom: 10}}
                                        source={{uri: `${d.title}`}}/>
                                    <View>
                                        <View style={styles.contentText}>
                                            <Text style={{fontWeight: 'bold'}}>{d.loan}</Text>
                                        </View>
                                        <View style={styles.contentText}>
                                            <Text style={{fontWeight: 'bold'}}>Сумма: {d.sum}</Text>
                                        </View>
                                        <View style={styles.contentText}>
                                            <Text style={{fontWeight: 'bold'}}>Ставка: {d.bet}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.ko}>
                                    <Button
                                        onPress={loadScene}
                                        title=""
                                        icon={{
                                            name: 'sign-out',
                                            type: 'font-awesome',
                                            size: 25,
                                            color: 'white',
                                        }}
                                        iconRight
                                        titleStyle={{fontWeight: '700'}}
                                        buttonStyle={styles.btn}
                                        containerStyle={{
                                            width: 70,
                                            marginHorizontal: 50,
                                            marginVertical: 10,
                                            borderRadius: 15,
                                        }}
                                    />

                                    <Button
                                        onPress={loadScene}
                                        title=""
                                        icon={{
                                            name: 'info',
                                            type: 'font-awesome',
                                            size: 25,
                                            color: 'white',
                                        }}
                                        iconRight
                                        titleStyle={{fontWeight: '700'}}
                                        buttonStyle={styles.btn}
                                        containerStyle={{
                                            width: 70,
                                            marginHorizontal: 50,
                                            marginVertical: 10,
                                            borderRadius: 15,
                                        }}
                                    />
                                </View>
                            </Card>
                        ))
                    }

                </View>
            </ScrollView>
        </SafeAreaView>
    );
})

const styles = StyleSheet.create({
    cardInfo: {
        paddingTop: 100,
        backgroundColor: '#D9D6FE'
    },
    ko: {
        justifyContent: 'space-evenly',
        flexDirection: 'row-reverse'
    },
    container: {},
    card: {
        marginBottom: 10,
        borderRadius: 25,
        borderColor: 'rgba(70,129,242,0)'
    },
    text: {
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "bold"
    },
    contentText: {
        marginTop: 17,
        marginBottom: 17,
    },
    chance: {},
    btn: {
        backgroundColor: '#9B8AFB',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 15,
        height: 44,

    },
    btnText: {
        color: '#ffffff'
    },
    row: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
});

