import React, {useContext, useEffect} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import HomeStyles from './styles';
import {GlobalContext} from '../../';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Home = () => {
  const styles = HomeStyles();
  const globalValue = useContext(GlobalContext);
  const {user} = globalValue.user;

  console.log(globalValue.user);

  useEffect(() => {
    return () => {
      GoogleSignin.signOut();
    };
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      {user?.photo ? (
        <Image
          source={{uri: user?.photo}}
          style={{
            height: 200,
            width: 200,
            borderRadius: 200,
            marginVertical: 24,
          }}
        />
      ) : null}
      <Text>{`Welcome ${user?.name}`}</Text>
      <Text>{`Your email: ${user?.email}`}</Text>
    </SafeAreaView>
  );
};

export default Home;
