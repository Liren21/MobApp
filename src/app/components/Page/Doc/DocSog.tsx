import * as React from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {observer} from "mobx-react";
import {doc} from "../../general/DataCard";
import 'react-native-get-random-values'
import {v4 as uuid} from 'uuid'


export default observer(() => {

    return (
        <View style={styles.header}>
            <ScrollView>
                {
                    doc.map((doc) => (
                        <Text key={uuid()} style={styles.header}>{doc.title}</Text>
                    ))
                }
            </ScrollView>
        </View>
    );
})

const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: '#fff'
    },


});