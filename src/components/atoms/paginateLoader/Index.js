import React from "react";
import { Image } from "react-native";

import { Container } from "./Styles";

const PaginateLoader = () => {
  return (
    <Container>
      <Image
        source={require("../../../../assets/Loader/Circle Loader.gif")}
        style={{ height: 130, width: 130 }}
      />
    </Container>
  );
};

export default PaginateLoader;
