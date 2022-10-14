import * as React from 'react';
import {observer} from "mobx-react";
import 'react-native-get-random-values'
import WebView from "react-native-webview";
import pageStore from "../../lib/store/page-store";
import {ActivityIndicator, StyleSheet} from "react-native";


export default observer(() => {

    const Loading = () => <ActivityIndicator
        style={[styles.container, styles.horizontal]}
        color={"blue"}
        size={'large'}
    />
    return (

        <WebView source={{uri: pageStore.link}}
                 startInLoadingState
                 renderLoading={Loading}/>

    );
})



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});