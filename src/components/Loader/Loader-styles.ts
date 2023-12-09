import {StyleSheet} from 'react-native';

const LoaderStyles = () =>
  StyleSheet.create({
    main: {
      position: 'absolute',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.7)',
      width: '100%',
      height: '100%',
    },
  });

export default LoaderStyles;
