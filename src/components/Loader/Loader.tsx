import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {ILoaderProps} from './Loader-interface';
import LoaderStyles from './Loader-styles';

const Loader: React.FC<ILoaderProps> = ({visible}) => {
  const styles = LoaderStyles();
  return visible ? (
    <View style={styles.main}>
      <ActivityIndicator />
    </View>
  ) : null;
};

export default Loader;
