import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import styled from "styled-components/native";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import MainSection from "./src/components/MainSection";
import MainSectionTwo from "./src/components/MainSectionTwo";
import Constants from "expo-constants";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <Main>
          <MainSection />
          <MainSectionTwo />
        </Main>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: "#fff",
    marginHorizontal: 5,
  },

  text: {
    fontSize: 18,
  },
});

export default App;

const Main = styled.View``;
