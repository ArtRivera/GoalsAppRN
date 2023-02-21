import { View, Text, TextInput, Button, ViewStyle, Modal, Image, ImageStyle } from "react-native";
import React, { useState } from "react";

export interface Goal {
  goal: string;
  id: string;
}

interface GoalInputProps {
  onAddGoal: (goal: string) => void;
  onClose: () => void;
  isVisible: boolean;
}

const GoalInput = ({
  onAddGoal,
  onClose,
  isVisible = false,
}: GoalInputProps) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  function handleGoalInputHandle(enteredText: string) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={handleGoalInputHandle}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onClose} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#311b6b'
  } as ViewStyle,
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    color: "#120438",
    width: "100%",
    padding: 8,
  } as ViewStyle,
  buttonContainer: {
    flexDirection: "row",
    paddingTop: 20
  } as ViewStyle,
  button: {
    width: 100,
    marginHorizontal: 8
  } as ViewStyle,
  image: {
    width: 100,
    height: 100,
    margin: 20
  } as ImageStyle
};

export default GoalInput;
