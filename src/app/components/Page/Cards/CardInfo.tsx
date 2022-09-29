import * as React from 'react';
import {Text} from 'react-native-paper';
import {ScrollView, StyleSheet, View} from 'react-native';
import {data} from "../../general/DataCard";
import {observer} from "mobx-react";
import 'react-native-get-random-values'
import {v4 as uuid} from 'uuid'
import {Button, Card, Image} from '@rneui/themed';


export default observer(({navigation}: any) => {
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
                            <Card key={uuid()} containerStyle={styles.card}>

                                <Image
                                    containerStyle={{width:"100%",height:150,borderRadius: 20, marginBottom: 20}}
                                    source={{uri: `${d.title}`}}/>
                                <View style={styles.contentText}>
                                    <Text style={styles.textInCard}> {d.loan}</Text>
                                </View>
                                <View style={styles.contentText}>
                                    <Text style={
                                        styles.textInCard}> Сумма: <Text
                                        style={{fontWeight: 'bold'}}>{d.sum}</Text></Text>
                                </View>
                                <View style={styles.contentText}>
                                    <Text style={styles.textInCard}> Ставка: <Text
                                        style={{fontWeight: 'bold'}}>{d.bet}</Text> </Text>
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
        </View>
    );
})

const styles = StyleSheet.create({
    cardInfo: {
        backgroundColor: '#F4C96C'
    },
    ko: {
        justifyContent: 'space-evenly',
        flexDirection: 'row-reverse'
    },
    container: {
        padding: 10,
    },
    card: {
        backgroundColor: '#4681F2',
        marginBottom: 10,
        borderRadius: 20,
        borderColor:'rgba(70,129,242,0)'
    },
    text: {
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "bold"
    },
    contentText: {
        marginBottom: 10,
    },
    chance: {
        marginBottom: 10,
    },
    btn: {
        backgroundColor: 'rgb(242,82,159)',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 15,
        height: 44,

    },
    btnText: {
        color: '#ffffff'
    },
    textInCard: {
        backgroundColor: 'rgb(255,255,255)',
        borderRadius: 20,
        width: 160,
        padding: 10
    }
});

