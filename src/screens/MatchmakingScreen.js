import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MatchmakingScreen = () => {
  const nextPerson = () => {};
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>{}</Text> // set Text to person 1
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>{}</Text> // set Text to person
          2
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

// create two buttons, one with first user, and second loops through everyone in your friends
// and every time it is clicked, it flips to the next user that fits requirements
// or else it's like "no people left"
// if next person is swiped, then it notes

export default MatchmakingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
