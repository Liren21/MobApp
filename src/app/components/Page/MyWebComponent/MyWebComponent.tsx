import * as React from 'react';
import {observer} from "mobx-react";
import WebView from "react-native-webview";
import {ActivityIndicator, BackHandler, StatusBar, StyleSheet, View} from "react-native";
import {useEffect, useRef, useState} from "react";
import {Adjust, AdjustEvent, AdjustConfig} from 'react-native-adjust';
import {AdjustOaid} from 'react-native-adjust-oaid';


export default observer(() => {
    const webViewRef = useRef(null)
    const [canGoBack, setCanGoBack] = useState(false)
    const [canGoForward, setCanGoForward] = useState(false)
    const [currentUrl, setCurrentUrl] = useState('https://liren21.github.io/#/')

    const backActive = () => {
        if (canGoBack) {
            // @ts-ignore
            webViewRef.current.goBack()
        }
        return true
    }

    Adjust.getSdkVersion(function (sdkVersion) {
        console.log("Adjust SDK version: " + sdkVersion);
    });
    const adjustConfig = new AdjustConfig("o7d1llcwgz5s", AdjustConfig.EnvironmentProduction);
    Adjust.create(adjustConfig);
    Adjust.componentWillUnmount();

    adjustConfig.setAttributionCallbackListener(function(attribution) {
        console.log(1)
        console.log("Attribution callback received");
        console.log("Tracker token = " + attribution.trackerToken);
        console.log("Tracker name = " + attribution.trackerName);
        console.log("Network = " + attribution.network);
        console.log("Campaign = " + attribution.campaign);
        console.log("Adgroup = " + attribution.adgroup);
        console.log("Creative = " + attribution.creative);
        console.log("Click label = " + attribution.clickLabel);
        console.log("Adid = " + attribution.adid);
        console.log("Cost type = " + attribution.costType);
        console.log("Cost amount = " + attribution.costAmount);
        console.log("Cost currency = " + attribution.costCurrency);
    });


    useEffect(() => {

        BackHandler.addEventListener('hardwareBackPress', backActive);
        () => BackHandler.removeEventListener('hardwareBackPress', backActive)
    }, [canGoBack])

    const Loading = () => <ActivityIndicator
        style={[styles.container, styles.horizontal]}
        color={"red"}
        size={'large'}
    />
    return (
        <View style={{flex: 1, width: "100%", height: "100%"}}>
            <StatusBar/>
            <WebView
                ref={webViewRef}
                source={{uri: currentUrl}}
                startInLoadingState
                renderLoading={Loading}
                onNavigationStateChange={
                    navState => {
                        setCanGoBack(navState.canGoBack)
                        setCanGoForward(navState.canGoForward)
                        setCurrentUrl(navState.url)
                    }
                }
            />
        </View>
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
