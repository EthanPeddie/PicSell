import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import colors from "../config/colors";

interface TextProps {
  title: string;
  textStyle?: TextStyle | TextStyle[];
}

const AppText = ({ title, textStyle }: TextProps) => {
  return <Text style={[styles.text, textStyle]}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.light,
  },
});

export default AppText;
