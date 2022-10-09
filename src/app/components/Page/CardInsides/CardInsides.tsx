import React, {useState} from 'react'
import {View, StyleSheet,  ScrollView,} from 'react-native'
import { dataInsideCard} from "../../general/DataCard";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {observer} from "mobx-react";
import 'react-native-get-random-values'
import {v4 as uuid} from 'uuid'
import {Image, Card, Text, Button} from "@rneui/themed";
import {Dialog} from "@rneui/themed";


const icon = <FontAwesome5 name={'check'}/>;
const iconDoc = <FontAwesome5 name={'pen'}/>;
const iconEx = <FontAwesome5 name={'exclamation'}/>;
const iconFile = <FontAwesome5 name={'file'}/>;

interface ICardInside {
    data: any
}

export default observer(({data}: ICardInside) => {

    const [visible1, setVisible1] = useState(false);
    const toggleDialog1 = () => {
        setVisible1(!visible1);
    };

    return (

        <View>

            <Button
                onPress={toggleDialog1}
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

            <Dialog
                isVisible={visible1}
                onBackdropPress={toggleDialog1}
                overlayStyle={styles.dialog}
            >
                {
                    dataInsideCard.map((d) => (

                        <View key={uuid()}>
                            <ScrollView>
                                <View key={uuid()}>
                                    <View>
                                        <Image
                                            containerStyle={{
                                                backgroundColor:"#fff",
                                                width: "100%",
                                                height: 150,
                                                borderRadius: 20,
                                                marginBottom: 10
                                            }}
                                            source={{uri: `${data.title}`}}/>
                                    </View>
                                    <View style={{margin: 10}}>

                                    </View>

                                    <Text key={uuid()}
                                          style={{
                                              fontWeight: 'bold',
                                              margin: 10,
                                              fontSize: 30,
                                              textAlign: 'center'
                                          }}>
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
                                        <View key={uuid()}
                                              style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                                            <Text style={{margin: 10, color: 'rgba(0,0,0,0.57)'}}>Условия</Text>
                                            <Text style={{margin: 10, color: 'rgba(0,0,0,0.57)'}}>{iconDoc}</Text>
                                        </View>
                                        <View key={uuid()} style={{paddingTop: 10, paddingBottom: 10}}>
                                            <Card containerStyle={styles.card}>
                                                <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                                    <Text style={[styles.text, {fontWeight: 'bold'}]}>
                                                        Рассмотрение заявки
                                                    </Text>
                                                    <View style={styles.viewText}>
                                                        <Text style={[styles.text]}>
                                                            {d.app}
                                                        </Text>
                                                        <Text style={[styles.text, {
                                                            fontWeight: 'bold',
                                                            color: '#0d6efd'
                                                        }]}>
                                                            {icon}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </Card>
                                            <Card containerStyle={styles.card}>
                                                <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                                    <Text style={[styles.text, {fontWeight: 'bold'}]}>
                                                        Пролонгация
                                                    </Text>
                                                    <View key={uuid()} style={styles.viewText}>
                                                        <Text key={uuid()} style={[styles.text]}>
                                                            {d.prolongation}
                                                        </Text>
                                                        <Text key={uuid()}
                                                              style={[styles.text, {
                                                                  fontWeight: 'bold',
                                                                  color: '#0d6efd'
                                                              }]}>
                                                            {icon}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </Card>
                                            <Card containerStyle={styles.card} key={uuid()}>
                                                <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                                    <Text key={uuid()} style={[styles.text, {fontWeight: 'bold'}]}>
                                                        Получение займа
                                                    </Text>
                                                    <View key={uuid()} style={styles.viewText}>
                                                        <Text key={uuid()} style={[styles.text]}>
                                                            {d.loanOne}
                                                        </Text>
                                                        <Text key={uuid()}
                                                              style={[styles.text, {
                                                                  fontWeight: 'bold',
                                                                  color: '#0d6efd'
                                                              }]}>
                                                            {icon}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </Card>
                                            <Card containerStyle={styles.card} key={uuid()}>
                                                <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                                    <Text key={uuid()} style={[styles.text, {fontWeight: 'bold'}]}>
                                                        Место заключения договора
                                                    </Text>
                                                    <View key={uuid()} style={styles.viewText}>
                                                        <Text key={uuid()} style={[styles.text]}>
                                                            {d.contract}
                                                        </Text>
                                                        <Text key={uuid()}
                                                              style={[styles.text, {
                                                                  fontWeight: 'bold',
                                                                  color: '#0d6efd'
                                                              }]}>
                                                            {icon}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </Card>
                                            <Card containerStyle={styles.card} key={uuid()}>
                                                <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                                    <Text key={uuid()} style={[styles.text, {fontWeight: 'bold'}]}>
                                                        Погашение
                                                    </Text>
                                                    <View key={uuid()} style={styles.viewText}>
                                                        <Text key={uuid()} style={[styles.text]}>
                                                            {d.repayment}
                                                        </Text>
                                                        <Text key={uuid()}
                                                              style={[styles.text, {
                                                                  fontWeight: 'bold',
                                                                  color: '#0d6efd'
                                                              }]}>
                                                            {icon}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </Card>
                                        </View>

                                    </View>

                                    <View key={uuid()}>
                                        <View key={uuid()}
                                              style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                                            <Text key={uuid()} style={{margin: 10, color: 'rgba(0,0,0,0.57)'}}>Требования
                                                к
                                                заемщику</Text>
                                            <Text key={uuid()}
                                                  style={{margin: 10, color: 'rgba(255,0,0,0.57)'}}>{iconEx}</Text>
                                        </View>

                                        <View style={{paddingTop: 10, paddingBottom: 10}} key={uuid()}>
                                            <Card containerStyle={styles.card} key={uuid()}>
                                                <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                                    <Text key={uuid()} style={[styles.text, {fontWeight: 'bold'}]}>
                                                        Минимальный возраст
                                                    </Text>
                                                    <View key={uuid()} style={styles.viewText}>
                                                        <Text key={uuid()} style={[styles.text]}>
                                                            {d.age}
                                                        </Text>
                                                        <Text key={uuid()}
                                                              style={[styles.text, {
                                                                  fontWeight: 'bold',
                                                                  color: '#0d6efd'
                                                              }]}>
                                                            {icon}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </Card>
                                            <Card containerStyle={styles.card} key={uuid()}>
                                                <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                                    <Text key={uuid()} style={[styles.text, {fontWeight: 'bold'}]}>
                                                        Гражданство РФ
                                                    </Text>
                                                    <View key={uuid()} style={styles.viewText}>
                                                        <Text key={uuid()} style={[styles.text]}>
                                                            {d.prolongation}
                                                        </Text>
                                                        <Text key={uuid()}
                                                              style={[styles.text, {
                                                                  fontWeight: 'bold',
                                                                  color: '#0d6efd'
                                                              }]}>
                                                            {icon}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </Card>
                                            <Card containerStyle={styles.card} key={uuid()}>
                                                <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                                    <Text key={uuid()} style={[styles.text, {fontWeight: 'bold'}]}>
                                                        Мобильный телефон
                                                    </Text>
                                                    <View key={uuid()} style={styles.viewText}>
                                                        <Text key={uuid()} style={[styles.text]}>
                                                            {d.mob}
                                                        </Text>
                                                        <Text key={uuid()}
                                                              style={[styles.text, {
                                                                  fontWeight: 'bold',
                                                                  color: '#0d6efd'
                                                              }]}>
                                                            {icon}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </Card>
                                            <Card containerStyle={styles.card} key={uuid()}>
                                                <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                                    <Text style={[styles.text, {fontWeight: 'bold'}]}>
                                                        Подтверждение платёжеспособности
                                                    </Text>
                                                    <View key={uuid()} style={styles.viewText}>
                                                        <Text key={uuid()} style={[styles.text]}>
                                                            {d.solvency}
                                                        </Text>
                                                        <Text key={uuid()}
                                                              style={[styles.text, {
                                                                  fontWeight: 'bold',
                                                                  color: '#0d6efd'
                                                              }]}>
                                                            {icon}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </Card>
                                        </View>


                                    </View>

                                    <View key={uuid()}>
                                        <View key={uuid()}
                                              style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                                            <Text style={{margin: 10, color: 'rgba(0,0,0,0.57)'}}>Необходимые
                                                документы</Text>
                                            <Text key={uuid()}
                                                  style={{
                                                      margin: 10,
                                                      color: 'rgba(255,0,0,0.57)'
                                                  }}>{iconFile}</Text>
                                        </View>
                                        <View key={uuid()} style={{paddingTop: 10, paddingBottom: 10}}>
                                            <Card containerStyle={styles.card} key={uuid()}>
                                                <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                                    <View key={uuid()} style={styles.viewText}>
                                                        <Text key={uuid()} style={[styles.text]}>
                                                            {d.profile}
                                                        </Text>
                                                        <Text key={uuid()}
                                                              style={[styles.text, {
                                                                  fontWeight: 'bold',
                                                                  color: '#0d6efd'
                                                              }]}>
                                                            {icon}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </Card>
                                            <Card containerStyle={styles.card} key={uuid()}>
                                                <View key={uuid()} style={{marginRight: 15, marginLeft: 15}}>
                                                    <View key={uuid()} style={styles.viewText}>
                                                        <Text key={uuid()} style={[styles.text]}>
                                                            {d.passpotr}
                                                        </Text>
                                                        <Text key={uuid()}
                                                              style={[styles.text, {
                                                                  fontWeight: 'bold',
                                                                  color: '#0d6efd'
                                                              }]}>
                                                            {icon}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </Card>
                                        </View>

                                    </View>
                                </View>
                            </ScrollView>
                        </View>

                    ))
                }
            </Dialog>
        </View>

    )

})

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9B8AFB',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 15,
        height: 44,

    },
    dialog: {
        backgroundColor: '#D9D6FE',
        borderRadius: 20,
        width: '85%',
        margin: 70
    },
    btn: {
        backgroundColor: 'rgba(0,0,0,0.17)',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 15,
        height: 44,

    },
    card: {
        borderRadius: 20,
        marginRight: 20,
        marginBottom: 10,
        marginLeft: 20,
        padding: 5
    },
    viewText: {
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text: {
        fontSize: 15
    },
})