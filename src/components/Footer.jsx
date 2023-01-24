import { Linking } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSocialIcons>
        <IconWrapper
          onPress={() =>
            Linking.openURL(
              "https://www.facebook.com/profile.php?id=100086249187059"
            )
          }
        >
          <IconImage
            source={require("../../assets/images/facebook.png")}
            alt={"Soora Facebook link"}
          />
        </IconWrapper>
        <IconWrapper
          onPress={() => Linking.openURL("https://twitter.com/SooraTheApp")}
        >
          <IconImage
            source={require("../../assets/images/twitter.png")}
            alt={"Soora Twitter link"}
          />
        </IconWrapper>
        <IconWrapper
          onPress={() => Linking.openURL("https://www.sooratheapp.com/")}
        >
          <IconImage
            source={require("../../assets/images/instagram.png")}
            alt={"Soora Instagram link"}
          />
        </IconWrapper>
        <IconWrapper
          onPress={() => Linking.openURL("https://www.sooratheapp.com/")}
        >
          <IconImage
            source={require("../../assets/images/tiktok.png")}
            alt={"Soora tiktok link"}
          />
        </IconWrapper>
        <IconWrapper
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/channel/UCS2_jKjdg5KTLo-1zFXDO8A"
            )
          }
        >
          <IconImage
            source={require("../../assets/images/youtube.png")}
            alt={"Soora Youtube link"}
          />
        </IconWrapper>
      </FooterSocialIcons>
      <FooterCopyright>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Soora. All right Reserved
        </CopyrightText>
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.View`
  margin-top: 30px;
`;
const IconWrapper = styled.TouchableOpacity`
  border: 2px solid #141414;
  border-spacing: 1px;
  padding: 14px 10px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  margin: 0 20px;
`;
const IconImage = styled.Image`
  width: 20px;
  height: 20px;
`;

const FooterSocialIcons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const FooterCopyright = styled.View`
  padding: 15px;
  align-items: center;
  justify-content: center;
  background-color: "red";
  border-top-width: 2px;
  border-top-color: #14141470;
`;
const CopyrightText = styled.Text``;
