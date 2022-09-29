import * as React from 'react';
import {Appbar,} from 'react-native-paper';
import {StyleSheet, Text} from "react-native";
import {observer} from "mobx-react";
import pageStore from "../../lib/store/page-store";


export default observer(() => {

    return (
        <>
            {
                pageStore.header ? <Appbar.Header style={styles.header}>
                    <Text>Мой займ</Text>
                </Appbar.Header> : null
            }
        </>
    );
})

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        textAlign: "center",
        justifyContent: "center",
    },


});