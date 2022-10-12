import {observer} from "mobx-react";
import WebView from "react-native-webview";
import {ActivityIndicator, StyleSheet} from "react-native";
import pageStore from "../../lib/store/page-store";


export default observer(() => {

    const Loading = () => <ActivityIndicator
        style={[styles.container, styles.horizontal]}
        color={'blue'}
        size={'large'}
    />
    return (
        <WebView
            source={{uri: pageStore.link}}
            startInLoadingState
            renderLoading={Loading}
        />
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