import React, {useContext, useEffect} from 'react';
import {Alert, Button, SafeAreaView} from 'react-native';
import LoginStyles from './styles';
import {GlobalContext} from '../../';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  NativeModuleError,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Login = () => {
  const styles = LoginStyles();
  const navigation = useNavigation();
  const globalValue = useContext(GlobalContext);
  const {showLoader} = globalValue;

  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      iosClientId:
        '146013331875-8r62v7of4u6qanjb6jgbqldadqnkidfq.apps.googleusercontent.com',
    });
  };

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  const signIn = async () => {
    try {
      showLoader(true);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      globalValue.setUser(userInfo);
      globalValue.setLoginError(null);
      navigateToHome();
    } catch (error) {
      const typedError = error as NativeModuleError;
      switch (typedError.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          // sign in was cancelled
          Alert.alert('cancelled');
          break;
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          Alert.alert('in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // android only
          Alert.alert('play services not available or outdated');
          break;
        default:
          Alert.alert('Something went wrong', typedError.toString());
          globalValue.setLoginError(typedError);
      }
    }
    showLoader(false);
  };

  const navigateToHome = () => {
    navigation.navigate('Home');
    navigation.reset({
      routes: [{name: 'Home'}],
    });
  };
  return (
    <SafeAreaView style={styles.root}>
      <Button title="Login" onPress={signIn} />
    </SafeAreaView>
  );
};

export default Login;
