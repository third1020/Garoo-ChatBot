import React from 'react';
import { StyleSheet, Text, View ,ActivityIndicator, AsyncStorage,Alert,} from 'react-native';
import ChatBot from 'react-native-chatbot';


import { Button } from 'react-native-elements';


import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import PropTypes from 'prop-types';

export default class PlaySound extends React.Component {
    static navigationOptions = {
        title: 'PlaySound',
    };

    constructor(props)
        {
          super(props);

          this.audioPlayer = new Expo.Audio.Sound();

        }

        playSound1 = async () => {
            try {
              await this.audioPlayer.unloadAsync()
              await this.audioPlayer.loadAsync({ uri: 'https://instaud.io/_/3cxi.mp3' });
              await this.audioPlayer.playAsync();
            } catch (err) {
              console.warn("Couldn't Play audio", err)
            }
        }

        playSound2 = async () => {
            try {
              await this.audioPlayer.unloadAsync()
              await this.audioPlayer.loadAsync({ uri: 'https://instaud.io/_/3cxc.mp3' });
              await this.audioPlayer.playAsync();
            } catch (err) {
              console.warn("Couldn't Play audio", err)
            }
        }

        playSound3 = async () => {
            try {
              await this.audioPlayer.unloadAsync()
              await this.audioPlayer.loadAsync({ uri: 'https://instaud.io/_/3cxk.mp3' });
              await this.audioPlayer.playAsync();
            } catch (err) {
              console.warn("Couldn't Play audio", err)
            }
        }

        playSound4 = async () => {
            try {
              await this.audioPlayer.unloadAsync()
              await this.audioPlayer.loadAsync({ uri: 'https://instaud.io/_/3cxl.mp3' });
              await this.audioPlayer.playAsync();
            } catch (err) {
              console.warn("Couldn't Play audio", err)
            }
        }

        playSound5 = async () => {
            try {
              await this.audioPlayer.unloadAsync()
              await this.audioPlayer.loadAsync({ uri: 'https://instaud.io/_/3cxn.mp3' });
              await this.audioPlayer.playAsync();
            } catch (err) {
              console.warn("Couldn't Play audio", err)
            }
        }

        playSound6 = async () => {
            try {
              await this.audioPlayer.unloadAsync()
              await this.audioPlayer.loadAsync({ uri: 'https://instaud.io/_/3cxo.mp3' });
              await this.audioPlayer.playAsync();
            } catch (err) {
              console.warn("Couldn't Play audio", err)
            }
        }

        playSound7 = async () => {
            try {
              await this.audioPlayer.unloadAsync()
              await this.audioPlayer.loadAsync({ uri: 'https://instaud.io/_/3cxc.mp3' });
              await this.audioPlayer.playAsync();
            } catch (err) {
              console.warn("Couldn't Play audio", err)
            }
        }

        playSound8 = async () => {
            try {
              await this.audioPlayer.unloadAsync()
              await this.audioPlayer.loadAsync({ uri: 'https://instaud.io/_/3cxc.mp3' });
              await this.audioPlayer.playAsync();
            } catch (err) {
              console.warn("Couldn't Play audio", err)
            }
        }

        playSound9 = async () => {
            try {
              await this.audioPlayer.unloadAsync()
              await this.audioPlayer.loadAsync({ uri: 'https://instaud.io/_/3cxr.mp3' });
              await this.audioPlayer.playAsync();
            } catch (err) {
              console.warn("Couldn't Play audio", err)
            }
        }

        StopSound = async () => {
            try {
              await this.audioPlayer.pauseAsync();
            } catch (err) {
              console.warn("Can't stop", err)
            }
        }

  render() {
return (
  <View>

  <Button title="A quiet thought" onPress={this.playSound1} />
  <Button title="Big wave hit land" onPress={this.playSound2} />
  <Button title="Flickering" onPress={this.playSound3} />
  <Button title="Kiss the sky" onPress={this.playSound4} />
  <Button title="Lifting dreams" onPress={this.playSound5} />
  <Button title="Love you" onPress={this.playSound6} />
  <Button title="Script aura + Song-B" onPress={this.playSound8} />
  <Button title="Shattered paths" onPress={this.playSound9} />


  <Button title="Stop" onPress={this.StopSound} />

  </View>

    );

    }

  }



PlaySound.propTypes = {
  steps: PropTypes.object,
};

PlaySound.defaultProps = {
  steps: undefined,
};
