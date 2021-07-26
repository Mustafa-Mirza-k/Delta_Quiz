import React from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import InternetConnectionAlert from 'react-native-internet-connection-alert';
import styles from '../stylings';
const MainScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        source={{uri: 'https://delta-quiz.herokuapp.com/login'}}
      />
    </View>
  );
};

export default MainScreen;
