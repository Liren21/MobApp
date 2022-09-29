import * as React from 'react';
import {Card, Text} from 'react-native-paper';
import {ScrollView, StyleSheet, View} from 'react-native';
import {data} from "../../general/DataCard";
import {observer} from "mobx-react";
import 'react-native-get-random-values'
import {v4 as uuid} from 'uuid'
import { Button } from '@rneui/themed';


export default observer(({navigation}:any) => {
    const loadScene = () => {
        navigation.navigate('name')
    }

    return (
        <View style={styles.cardInfo}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.text}>Подайте заявку в 3-4 организации для 100% одобрения!</Text>
                    {
                        data.map((d) => (
                            <Card key={uuid()} onPress={loadScene} style={styles.card}>
                                <Card.Content>
                                    <Card.Cover style={{borderRadius: 20, marginBottom: 20}}
                                                source={{uri: 'https://acdn.tinkoff.ru/static/pages/files/66521906-d9f1-4dfa-8bcf-125e54474d31.png'}}/>
                                    <View style={styles.contentText}>
                                        <Text style={styles.textInCard}> {d.loan}</Text>
                                    </View>
                                    <View style={styles.contentText}>
                                        <Text style={
                                            styles.textInCard}> Сумма: <Text style={{fontWeight: 'bold'}}>{d.sum}</Text></Text>
                                    </View>
                                    <View style={styles.contentText}>
                                        <Text style={styles.textInCard}> Ставка: <Text style={{fontWeight: 'bold'}}>{d.bet}</Text> </Text>
                                    </View>

                                    <View style={styles.ko}>
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
                                            iconContainerStyle={{marginLeft: 10}}
                                            titleStyle={{fontWeight: '700'}}
                                            buttonStyle={{
                                                backgroundColor: 'rgb(242,82,159)',
                                                borderColor: 'transparent',
                                                borderWidth: 0,
                                                borderRadius: 15,
                                                height: 44,
                                            }}
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
                                                name: 'sign-out',
                                                type: 'font-awesome',
                                                size: 25,
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
                                                height: 44,
                                            }}
                                            containerStyle={{
                                                width: 70,
                                                marginHorizontal: 50,
                                                marginVertical: 10,
                                                borderRadius: 15,
                                            }}
                                        />
                                    </View>
                                </Card.Content>
                            </Card>
                        ))
                    }

                </View>
            </ScrollView>
        </View>
    );
})

const styles = StyleSheet.create({
    cardInfo:{
        backgroundColor: '#F4C96C'
    },
    ko: {
        padding: 20,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    container: {
        padding: 30,
    },
    card: {
        backgroundColor:'#4681F2',
        marginBottom: 30,
        borderRadius: 20,
    },
    text: {
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "bold"
    },
    contentText: {
        marginBottom: 20,
    },
    btn: {
        backgroundColor: "#F2529FFF",
    },
    btnText: {
        color: '#ffffff'
    },
    textInCard:{
        backgroundColor: 'rgb(255,255,255)',
        borderRadius: 20,
        width: 140,
        padding: 10
    }
});

