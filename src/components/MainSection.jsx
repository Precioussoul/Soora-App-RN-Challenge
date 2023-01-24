import React from "react";
import { Image, StyleSheet } from "react-native";
import styled from "styled-components/native";

const MainSection = () => {
  return (
    <Container>
      <SectionHeader>
        <Section_subHeading>Coming soon</Section_subHeading>
        <Section_Heading>Bringing {"\n"} Muslims Together</Section_Heading>
        <Section_Cta>
          <ButtonAppStore>
            <Image
              style={styles.image}
              source={require("../../assets/images/apple-store.png")}
              alt={"click to go Apple App Store"}
            />
          </ButtonAppStore>
          <ButtonPlayStore>
            <Image
              style={styles.image}
              source={require("../../assets/images/google-play.png")}
              alt={"click to go Google Play Store"}
            />
          </ButtonPlayStore>
        </Section_Cta>
      </SectionHeader>
      <SectionImageWrapper>
        <Image
          style={styles.landingImage}
          source={require("../../assets/images/landing-image-1.png")}
          alt={"Soora App - the Islamic Social Media for Muslim Women"}
        />
      </SectionImageWrapper>
    </Container>
  );
};

export default MainSection;

const Container = styled.View`
  padding: 0 10px;
`;

const SectionHeader = styled.View`
  align-items: center;
  margin-top: 40px;
`;

const Section_subHeading = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Section_Heading = styled.Text`
  font-weight: 900;
  font-size: 40px;
  text-align: center;
`;

const Section_Cta = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
  margin-bottom: 20px;
`;

const ButtonAppStore = styled.TouchableOpacity``;

const ButtonPlayStore = styled.TouchableOpacity``;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 30,
    resizeMode: "contain",
  },
  landingImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

const SectionImageWrapper = styled.View`
  align-items: center;
`;
