/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  Button,
  AppRegistry,
} from 'react-native';

const RootTagContext = require('react-native/Libraries/ReactNative/RootTagContext');

import {Colors} from 'react-native/Libraries/NewAppScreen';

const IncomingCallScreen: () => React$Node = () => {
  const rootTag = useContext(RootTagContext);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          contentContainerStyle={{flexGrow: 1}}>
          <Text style={styles.sectionTitle}>Incoming Call Screen</Text>
          <Button
            title={'launch main application'}
            onPress={() => {
              const keys = AppRegistry.getAppKeys();
              console.log('keys?!?!', keys);

              AppRegistry.runApplication('RNIncomingCall', {
                rootTag,
              });
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white' || 'rgba(255,0,0,0.5)',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default IncomingCallScreen;
