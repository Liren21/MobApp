import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {data} from "../../general/DataCard";
import {observer} from "mobx-react";
import 'react-native-get-random-values'
import {v4 as uuid} from 'uuid'
import {Button, Card, Image, Text} from '@rneui/themed';
import CardInsides from "../CardInsides/CardInsides";
import pageStore from "../../../lib/store/page-store";


export default observer(({navigation}: any) => {

    const web = ({val}: { val: any }) => {
        navigation.navigate('web')
        pageStore.setLink(val)
    }
    return (
        <SafeAreaView style={styles.cardInfo}>
            <ScrollView>
                <Text style={styles.text}>Подайте заявку в 3-4 организации для 100% одобрения!</Text>
                <View>

                    {
                        data.map((d) => (

                            <Card key={uuid()} containerStyle={styles.card}>

                                <View style={styles.row}>
                                    <Image
                                        containerStyle={{width: "50%", height: 150, borderRadius: 20, marginBottom: 10}}
                                        source={{uri: `${d.title}`}}/>
                                    <View>
                                        <View style={styles.contentText}>
                                            <Text style={styles.secondText}>{d.loan}</Text>
                                        </View>
                                        <View style={styles.contentText}>
                                            <Text style={styles.secondText}>Сумма: {d.sum}</Text>
                                        </View>
                                        <View style={styles.contentText}>
                                            <Text style={styles.secondText}>Ставка: {d.bet}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.ko}>
                                    <Button
                                        testID={d.link}
                                        onPress={() => web({val: d.link})}
                                        title=""
                                        icon={{
                                            name: 'sign-out',
                                            type: 'font-awesome',
                                            size: 25,
                                            color: 'white',
                                        }}
                                        titleStyle={{fontWeight: '700'}}
                                        buttonStyle={styles.btn}
                                        containerStyle={{
                                            width: 70,
                                            marginHorizontal: 50,
                                            marginVertical: 10,
                                            borderRadius: 15,
                                        }}
                                    />

                                    <CardInsides data={d}/>
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
        backgroundColor: '#D9D6FE',

    },
    ko: {
        justifyContent: 'space-evenly',
        flexDirection: 'row-reverse'
    },
    card: {
        borderColor: '#ffffff',
        marginBottom: 10,
        borderRadius: 30,
    },
    text: {
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "bold"
    },
    contentText: {
        marginBottom: 18,
    },
    secondText: {
        fontWeight: 'bold',
        color: '#9B8AFB',
        backgroundColor: "rgba(0,0,0,0.05)",
        padding: 10,
        borderRadius: 13,
    },
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

