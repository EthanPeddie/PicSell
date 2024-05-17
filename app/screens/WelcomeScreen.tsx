import React, { useMemo, memo } from "react";
import { View, ImageBackground, Dimensions, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppText from "../components/AppText";

const WelcomeScreen = () => {
  const { width, height } = Dimensions.get("window");

  const backgroundImageStyle = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height]
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://media.istockphoto.com/id/1391413216/photo/rising-prices-for-real-estate.jpg?s=612x612&w=0&k=20&c=1vud3tbKNcXMGB2AVe6b5dSG3DwqMTRk_j55yUIVdSE=",
        }}
        resizeMode="cover"
        style={backgroundImageStyle}
      >
        <View style={styles.textContainer}>
          <AppText title="PicSell" textStyle={styles.titleText} />
          <AppText
            title="Find Your Dream Place"
            textStyle={styles.subtitleText}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title="Login" />
          <AppButton title="Register" buttonStyle={styles.registerButton} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    alignItems: "center",
    paddingTop: 50,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitleText: {
    fontSize: 25,
    fontWeight: "500",
    color: colors.white,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
  },
  registerButton: {
    backgroundColor: colors.secondary,
  },
});

export default memo(WelcomeScreen);
