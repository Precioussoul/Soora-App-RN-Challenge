import React from "react";
import styled from "styled-components/native";
import { Image, StyleSheet, Text } from "react-native";

const Header = () => {
  return (
    <Navbar>
      <Image
        style={styles.image}
        source={require("../../assets/images/logo1.png")}
      />
      <ContactButton>
        <Text style={{ color: "white" }}>Contact us</Text>
        <ContactIcon source={require("../../assets/images/contact-icon.png")} />
      </ContactButton>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  padding-top: 15px;
`;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 30,
    resizeMode: "contain",
  },
});
const ContactIcon = styled.Image`
  width: 12px;
  height: 12px;
  margin-left: 5px;
`;

const ContactButton = styled.TouchableOpacity`
  background-color: #141414;
  border-radius: 8px;
  padding: 8px 12px;
  flex-direction: row;
  align-items: center;
`;
