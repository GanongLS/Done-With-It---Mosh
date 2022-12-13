import {View, Text, StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const App = () => {
  const handlePress = () => console.log('pressed');
  // const 
  return (
    <SafeAreaView styles={styles.container}>
      <Text numberOfLines={1} style={styles.centeredText} onPress={handlePress}>
        Crazy App that will keep our mind sane. Magna sit aliqua anim officia
        dolor velit cillum aute id culpa commodo in ipsum. Ullamco eiusmod
        aliqua anim magna eu cillum. Dolore labore enim ex duis aliquip veniam
        cillum officia nulla deserunt id consectetur. Enim deserunt mollit
        fugiat consectetur ut sint ea minim quis Lorem Lorem exercitation velit.
        Ea adipisicing eiusmod anim exercitation do culpa officia eu Lorem.
        Laboris duis est laboris labore sunt et cupidatat ad fugiat anim et
        eiusmod sunt eu. Minim nostrud non enim eu ea minim cillum cillum
        excepteur.
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredText: {
    alignSelf: 'center',
  },
});

const some = StyleSheet.create({});
