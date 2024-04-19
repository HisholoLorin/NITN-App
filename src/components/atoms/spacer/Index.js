import React from 'react';
import { View } from 'react-native';

const Spacer = ({ top, bottom, children  }) => {
  return (
    <View style={{ marginTop: top || 10, marginBottom: bottom || 10}}> 
        {children}
    </View>
  );
};

export default Spacer;
