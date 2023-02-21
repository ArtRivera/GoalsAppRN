import { View, Text, ViewStyle, TextStyle, Pressable } from "react-native";
import React from "react";
import { Goal } from "./GoalInput";

interface GoalItemProps {
  goal: Goal;
  onDeleteItem: (id: string) => void;
}

const GoalItem = ({ goal, onDeleteItem }: GoalItemProps) => {
  function handleDeleteItem() {
    onDeleteItem(goal.id);
  }

  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      style={({ pressed }) => pressed && styles.pressed}
      onPress={handleDeleteItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{goal.goal}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = {
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    height: 30,
  } as ViewStyle,
  pressed: {
    opacity: 0.5,
  } as ViewStyle,
  goalText: {
    color: "white",
  } as TextStyle,
};
