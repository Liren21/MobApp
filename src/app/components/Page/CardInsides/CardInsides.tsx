import React from 'react'
import {View, TouchableWithoutFeedback, StyleSheet, Linking, ScrollView} from 'react-native'
import {dataInsideCard} from "../../general/DataCard";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button, Text, Card} from "react-native-paper";
import {observer} from "mobx-react";
import 'react-native-get-random-values'
import {v4 as uuid} from 'uuid'

const icon = <FontAwesome5 name={'check'}/>;
const iconDoc = <FontAwesome5 name={'pen'}/>;
const iconEx = <FontAwesome5 name={'exclamation'}/>;
const iconFile = <FontAwesome5 name={'file'}/>;
const iconEntry = <FontAwesome5 name={'arrow-right'}/>;


export default observer(() => {
    const open = () => {
        let url = 'http://www.baidu.com';
        Linking.openURL(url)
    }


    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    dataInsideCard.map((d) => (
                        <View key={uuid()}>

                            <Card.Cover key={uuid()} style={{borderRadius: 20, margin: 20}}
                                        source={{uri: 'https://acdn.tinkoff.ru/static/pages/files/66521906-d9f1-4dfa-8bcf-125e54474d31.png'}}/>

                            <Text key={uuid()}
                                  style={{fontWeight: 'bold', margin: 10, fontSize: 30, textAlign: 'center'}}>
                                Первый займ бесплатно всем</Text>
                            <View key={uuid()} style={styles.viewText}>
                                <Text style={styles.text}>
                                    Ставка
                                </Text>
                                <Text style={[styles.text, {fontWeight: 'bold'}]}>
                                    {d.bat}
                                </Text>
                            </View>
                            <View key={uuid()} style={styles.viewText}>
                                <Text style={styles.text}>
                                    Сумма
                                </Text>
                                <Text style={[styles.text, {fontWeight: 'bold'}]}>
                                    {d.sumOne}
                                </Text>
                            </View>
                            <View
                                key={uuid()}
                                style={{
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}
                            />
                            <View key={uuid()}>
                                <View key={uuid()} style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                                    <Text style={{margin: 10, color: 'rgba(0,0,0,0.57)'}}>Условия</Text>
                                    <Text style={{margin: 10, color: 'rgba(0,0,0,0.57)'}}>{iconDoc}</Text>
                                </View>
                                <View key={uuid()} style={{paddingTop: 10, paddingBottom: 10}}>
                                    <Card style={{
                                        borderRadius: 20,
                                        marginRight: 20,
                                        marginBottom: 10,
                                        marginLeft: 20,
                                        padding: 5
                                    }}>
                                        <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                            <Text style={[styles.text, {fontWeight: 'bold'}]}>
                                                Рассмотрение заявки
                                            </Text>
                                            <View style={styles.viewText}>
                                                <Text style={[styles.text]}>
                                                    {d.app}
                                                </Text>
                                                <Text style={[styles.text, {fontWeight: 'bold', color: '#0d6efd'}]}>
                                                    {icon}
                                                </Text>
                                            </View>
                                        </View>
                                    </Card>
                                    <Card style={{
                                        borderRadius: 20,
                                        marginRight: 20,
                                        marginBottom: 10,
                                        marginLeft: 20,
                                        padding: 5
                                    }}>
                                        <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                            <Text style={[styles.text, {fontWeight: 'bold'}]}>
                                                Пролонгация
                                            </Text>
                                            <View key={uuid()} style={styles.viewText}>
                                                <Text key={uuid()} style={[styles.text]}>
                                                    {d.prolongation}
                                                </Text>
                                                <Text key={uuid()}
                                                      style={[styles.text, {fontWeight: 'bold', color: '#0d6efd'}]}>
                                                    {icon}
                                                </Text>
                                            </View>
                                        </View>
                                    </Card>
                                    <Card style={{
                                        borderRadius: 20,
                                        marginRight: 20,
                                        marginBottom: 10,
                                        marginLeft: 20,
                                        padding: 5
                                    }} key={uuid()}>
                                        <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                            <Text key={uuid()} style={[styles.text, {fontWeight: 'bold'}]}>
                                                Получение займа
                                            </Text>
                                            <View key={uuid()} style={styles.viewText}>
                                                <Text key={uuid()} style={[styles.text]}>
                                                    {d.loanOne}
                                                </Text>
                                                <Text key={uuid()}
                                                      style={[styles.text, {fontWeight: 'bold', color: '#0d6efd'}]}>
                                                    {icon}
                                                </Text>
                                            </View>
                                        </View>
                                    </Card>
                                    <Card style={{
                                        borderRadius: 20,
                                        marginRight: 20,
                                        marginBottom: 10,
                                        marginLeft: 20,
                                        padding: 5
                                    }} key={uuid()}>
                                        <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                            <Text key={uuid()} style={[styles.text, {fontWeight: 'bold'}]}>
                                                Место заключения договора
                                            </Text>
                                            <View key={uuid()} style={styles.viewText}>
                                                <Text key={uuid()} style={[styles.text]}>
                                                    {d.contract}
                                                </Text>
                                                <Text key={uuid()}
                                                      style={[styles.text, {fontWeight: 'bold', color: '#0d6efd'}]}>
                                                    {icon}
                                                </Text>
                                            </View>
                                        </View>
                                    </Card>
                                    <Card style={{
                                        borderRadius: 20,
                                        marginRight: 20,
                                        marginBottom: 10,
                                        marginLeft: 20,
                                        padding: 5
                                    }} key={uuid()}>
                                        <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                            <Text key={uuid()} style={[styles.text, {fontWeight: 'bold'}]}>
                                                Погашение
                                            </Text>
                                            <View key={uuid()} style={styles.viewText}>
                                                <Text key={uuid()} style={[styles.text]}>
                                                    {d.repayment}
                                                </Text>
                                                <Text key={uuid()}
                                                      style={[styles.text, {fontWeight: 'bold', color: '#0d6efd'}]}>
                                                    {icon}
                                                </Text>
                                            </View>
                                        </View>
                                    </Card>
                                </View>

                            </View>

                            <View key={uuid()}>
                                <View key={uuid()} style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                                    <Text key={uuid()} style={{margin: 10, color: 'rgba(0,0,0,0.57)'}}>Требования к
                                        заемщику</Text>
                                    <Text key={uuid()} style={{margin: 10, color: 'rgba(255,0,0,0.57)'}}>{iconEx}</Text>
                                </View>

                                <View style={{paddingTop: 10, paddingBottom: 10}} key={uuid()}>
                                    <Card style={{
                                        borderRadius: 20,
                                        marginRight: 20,
                                        marginBottom: 10,
                                        marginLeft: 20,
                                        padding: 5,
                                    }} key={uuid()}>
                                        <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                            <Text key={uuid()} style={[styles.text, {fontWeight: 'bold'}]}>
                                                Минимальный возраст
                                            </Text>
                                            <View key={uuid()} style={styles.viewText}>
                                                <Text key={uuid()} style={[styles.text]}>
                                                    {d.age}
                                                </Text>
                                                <Text key={uuid()}
                                                      style={[styles.text, {fontWeight: 'bold', color: '#0d6efd'}]}>
                                                    {icon}
                                                </Text>
                                            </View>
                                        </View>
                                    </Card>
                                    <Card style={{
                                        borderRadius: 20,
                                        marginRight: 20,
                                        marginBottom: 10,
                                        marginLeft: 20,
                                        padding: 5
                                    }} key={uuid()}>
                                        <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                            <Text key={uuid()} style={[styles.text, {fontWeight: 'bold'}]}>
                                                Гражданство РФ
                                            </Text>
                                            <View key={uuid()} style={styles.viewText}>
                                                <Text key={uuid()} style={[styles.text]}>
                                                    {d.prolongation}
                                                </Text>
                                                <Text key={uuid()}
                                                      style={[styles.text, {fontWeight: 'bold', color: '#0d6efd'}]}>
                                                    {icon}
                                                </Text>
                                            </View>
                                        </View>
                                    </Card>
                                    <Card style={{
                                        borderRadius: 20,
                                        marginRight: 20,
                                        marginBottom: 10,
                                        marginLeft: 20,
                                        padding: 5
                                    }} key={uuid()}>
                                        <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                            <Text key={uuid()} style={[styles.text, {fontWeight: 'bold'}]}>
                                                Мобильный телефон
                                            </Text>
                                            <View key={uuid()} style={styles.viewText}>
                                                <Text key={uuid()} style={[styles.text]}>
                                                    {d.mob}
                                                </Text>
                                                <Text key={uuid()}
                                                      style={[styles.text, {fontWeight: 'bold', color: '#0d6efd'}]}>
                                                    {icon}
                                                </Text>
                                            </View>
                                        </View>
                                    </Card>
                                    <Card style={{
                                        borderRadius: 20,
                                        marginRight: 20,
                                        marginBottom: 10,
                                        marginLeft: 20,
                                        padding: 5
                                    }} key={uuid()}>
                                        <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                            <Text style={[styles.text, {fontWeight: 'bold'}]}>
                                                Подтверждение платёжеспособности
                                            </Text>
                                            <View key={uuid()} style={styles.viewText}>
                                                <Text key={uuid()} style={[styles.text]}>
                                                    {d.solvency}
                                                </Text>
                                                <Text key={uuid()}
                                                      style={[styles.text, {fontWeight: 'bold', color: '#0d6efd'}]}>
                                                    {icon}
                                                </Text>
                                            </View>
                                        </View>
                                    </Card>
                                </View>


                            </View>

                            <View key={uuid()}>
                                <View key={uuid()} style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                                    <Text style={{margin: 10, color: 'rgba(0,0,0,0.57)'}}>Необходимые документы</Text>
                                    <Text key={uuid()}
                                          style={{margin: 10, color: 'rgba(255,0,0,0.57)'}}>{iconFile}</Text>
                                </View>
                                <View key={uuid()} style={{paddingTop: 10, paddingBottom: 10}}>
                                    <Card style={{
                                        borderRadius: 20,
                                        marginRight: 20,
                                        marginBottom: 10,
                                        marginLeft: 20,
                                        padding: 5
                                    }} key={uuid()}>
                                        <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                            <View key={uuid()} style={styles.viewText}>
                                                <Text key={uuid()} style={[styles.text]}>
                                                    {d.profile}
                                                </Text>
                                                <Text key={uuid()}
                                                      style={[styles.text, {fontWeight: 'bold', color: '#0d6efd'}]}>
                                                    {icon}
                                                </Text>
                                            </View>
                                        </View>
                                    </Card>
                                    <Card style={{
                                        borderRadius: 20,
                                        marginRight: 20,
                                        marginBottom: 10,
                                        marginLeft: 20,
                                        padding: 5
                                    }} key={uuid()}>
                                        <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                            <View key={uuid()} style={styles.viewText}>
                                                <Text key={uuid()} style={[styles.text]}>
                                                    {d.passpotr}
                                                </Text>
                                                <Text key={uuid()}
                                                      style={[styles.text, {fontWeight: 'bold', color: '#0d6efd'}]}>
                                                    {icon}
                                                </Text>
                                            </View>
                                        </View>
                                    </Card>
                                </View>

                            </View>
                        </View>


                    ))
                }
                <TouchableWithoutFeedback onPress={open}>
                    <Button style={{marginRight: 20, padding: 10, backgroundColor: 'rgb(9,209,17)', marginLeft: 20,marginBottom:20}}
                            mode="contained">
                        <Text variant="titleMedium" style={{color: '#ffffff'}}>Перейти {iconEntry}</Text>
                    </Button>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    )

})

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#ffffff'
    },
    viewForText: {},
    viewText: {
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text: {
        fontSize: 15
    },
})