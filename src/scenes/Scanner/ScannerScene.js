// @flow

import React, {Component, Fragment} from 'react';
import {Alert, StyleSheet, View, Text} from 'react-native';
import {ActionButton, Toolbar, Snackbar} from 'react-native-material-ui';
import {BarCodeScanner, Permissions} from 'expo';

import {statusBarHeight, WINDOW_WIDTH} from '../../constants/sizes';

type Props = {
  navigation: *,
};

type State = {
  hasCameraPermission: ?boolean,
  showSnackbar: boolean,
};

export default class ScannerScene extends Component<Props, State> {
  state = {
    hasCameraPermission: null,
    showSnackbar: false,
  };

  async componentDidMount() {
    let {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  render() {
    let {showSnackbar, hasCameraPermission} = this.state;

    return (
      <Fragment>
        <View style={styles.root}>
          <Toolbar
            leftElement="menu"
            onLeftElementPress={this.props.navigation.toggleDrawer}
            centerElement="Scan a QR"
          />
          {hasCameraPermission === null ? (
            <Text>Requesting for camera permission.</Text>
          ) : hasCameraPermission === false ? (
            <Text>No access to camera.</Text>
          ) : (
            <BarCodeScanner
              onBarCodeScanned={this._onBarCodeScanned}
              style={styles.barcodeScanner}
            />
          )}
          {!showSnackbar && (
            <ActionButton
              icon="attach-money"
              onPress={this._toggleSnackbarVisibility}
            />
          )}
          <Snackbar
            visible={showSnackbar}
            message="Confirm Payment?"
            onRequestClose={() => this.setState({showSnackbar: false})}
            actionText="YES"
            onActionPress={this._onConfirmPayPress}
            timeout={0}
          />
        </View>
      </Fragment>
    );
  }

  _onBarCodeScanned = ({type, data}: {type: string, data: string}) => {
    Alert.alert(
      `Bar code with type ${type} and data ${data} has been scanned!`,
    );
  };

  _toggleSnackbarVisibility = () => {
    this.setState({showSnackbar: !this.state.showSnackbar});
  };

  _onConfirmPayPress = () => {
    this.setState({showSnackbar: false});
    this.props.navigation.navigate('Success');
  };
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  barcodeScanner: {
    flex: 1,
    width: WINDOW_WIDTH,
    // height: WINDOW_WIDTH,
  },
});
