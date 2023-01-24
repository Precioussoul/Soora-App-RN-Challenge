import React from "react";
import { Image, StyleSheet, Text, TextInput } from "react-native";
import styled from "styled-components/native";

const MainSectionTwo = () => {
  return (
    <Container>
      <SectionHeader>
        <Section_subHeading>Coming soon</Section_subHeading>
        <Section_Heading>Get Notified {"\n"} When We Launch</Section_Heading>
        <Section_Input>
          <TextInput style={styles.textInput} keyboardType={"email-address"} />
          <NotifyButton>
            <Text style={styles.textButton}>Notify me</Text>
          </NotifyButton>
        </Section_Input>
        <Text style={styles.noSpam}>*Don't worry, we won't spam you</Text>
      </SectionHeader>
      <SectionImageWrapper>
        <Image
          style={styles.landingImage}
          source={require("../../assets/images/landing-image-2.png")}
          alt={"Soora App - the Islamic Social Media for Muslim Women"}
        />
      </SectionImageWrapper>
    </Container>
  );
};

export default MainSectionTwo;

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
  letter-spacing: 1px;
`;

const Section_Input = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  margin-bottom: 10px;
  border-radius: 100px;
  padding: 5px 5px;
  border: 1px solid #141414;
`;

const NotifyButton = styled.TouchableOpacity`
  background-color: #141414;
  border-radius: 16px;
  padding: 8px 12px;
  flex-direction: row;
  align-items: center;
`;

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
  textButton: {
    color: "#fff",
  },
  textInput: {
    width: "50%",
    backgroundColor: "transparent",
    outline: "none",
    border: 0,
    paddingLeft: 20,
  },
  noSpam: {
    marginBottom: 15,
    fontSize: 12,
  },
});

const SectionImageWrapper = styled.View`
  align-items: center;
`;
