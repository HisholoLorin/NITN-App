import React from 'react';
import { HorizontalRule } from './Styles';

const Divider = ({top, bottom, marginHorizontal}) => {
  return <HorizontalRule top={top} bottom={bottom} marginHorizontal={marginHorizontal}/>;
};

export default Divider;
