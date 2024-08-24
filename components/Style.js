import { StyleSheet } from "react-native";
import React from "react";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111418",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: "#f0f2f5",
    borderRadius: 10,
    width: "100%",
  },
  input: {
    flex: 1,
    padding: 12,
    color: "#111418",
    fontSize: 16,
  },
  icon: {
    padding: 12,
    color: "#60758a",
  },
  total: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111418",
    marginVertical: 16,
    textAlign: "center",
  },
  totalText: {
    fontSize: 16,
    color: "#111418",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#f0f2f5",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111418",
  },
});
