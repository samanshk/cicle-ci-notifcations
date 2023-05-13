/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Animated, Dimensions, PanResponder} from 'react-native';

import React, {useEffect, useRef, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const ProgressBar = () => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        shadowColor: '#799871',
        elevation: 10,
        borderRadius: 50,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 7.62,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{fontSize: 10}}>1 of 5</Text>
      </View>
    </View>
  );
};
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const position = useRef(new Animated.ValueXY()).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const pandResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        console.log({position: position.setValue});
        console.log('Gesture', {gestureState});
        position.setValue({y: gestureState.dy});
      },
      onPanResponderRelease: (evt, gestureState) => {},
    }),
  ).current;

  useEffect(() => {
    console.log('Compnent mounted');

    return () => {
      console.log('Compnent unmounted');
    };
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const contents = ['blue', 'orange', 'white'];
  const deviceHeight = Dimensions.get('window').height;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={{backgroundColor: 'red', height: 100}}>
        <Text>Header</Text>
      </View>
      <View style={{flex: 1}}>
        {contents.map((color, index) => (
          <Animated.View
            key={index}
            style={{
              backgroundColor: color,
              position: 'absolute',
              bottom: 0,
              right: 0,
              left: 0,
              top: 0,
              // ...position.getLayout(),
            }}
            {...pandResponder.panHandlers}>
            <View>
              <Text>Content</Text>
            </View>
          </Animated.View>
        ))}
      </View>

      <View style={{backgroundColor: 'green', height: 100}}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
