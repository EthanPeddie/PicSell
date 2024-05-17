import { Text, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import React from "react";
import { memo } from "react";
import colors from "../config/colors";

interface ButtonProps {
  title: string;
  buttonStyle?: ViewStyle | ViewStyle[];
}

const AppButton = memo(({ title, buttonStyle }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  text: {
    color: colors.light,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AppButton;
