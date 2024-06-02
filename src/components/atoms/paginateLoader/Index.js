import React from "react";
import { Image } from "react-native";

import { Container } from "./Styles";

const PaginateLoader = () => {
  return (
    <Container>
      <Image
        source={require("../../../../assets/Loader/paginateLoader.gif")}
        style={{ height: 80, width: 80 }}
      />
    </Container>
  );
};

export default PaginateLoader;
