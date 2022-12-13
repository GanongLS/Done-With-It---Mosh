import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import LogoGanin from './assets/img/ganin_logo.svg';

const App = () => {
  const handlePress = () => console.log('pressed');
  // const
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.box}></View>
        <Text
          numberOfLines={1}
          style={styles.centeredText}
          onPress={handlePress}>
          Crazy App that will keep our mind sane.
        </Text>
        <LogoGanin width="100" height="100" />
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    // lineHight: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredText: {
    // flex: 1,
    alignSelf: 'center',
    // justifySelf: 'center'
  },
  logo_image: {
    height: 200,
    width: 200,
    backgroundColor: 'red',
  },
});

const some = StyleSheet.create({});
