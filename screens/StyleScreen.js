import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function StyleScreen() {
  return (
    <View style={styles.container}>
      <Text>Style Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StyleScreen;
