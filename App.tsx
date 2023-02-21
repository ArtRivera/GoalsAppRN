import { useState } from "react";
import { FlatList, View, ViewStyle, Button, StatusBar } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput, { Goal } from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addGoalHandler(enteredGoal: string) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { goal: enteredGoal, id: Math.random().toString() },
    ]);
    hideAddGoalHandler()
  }

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }

  function hideAddGoalHandler() {
    setIsModalVisible(false);
  }

  function deleteGoalHandler(id: string) {
    const newGoals = courseGoals.filter((goal) => goal.id !== id);
    setCourseGoals(newGoals);
  }

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle={"light-content"} />
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        isVisible={isModalVisible}
        onAddGoal={addGoalHandler}
        onClose={hideAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GoalItem goal={item} onDeleteItem={deleteGoalHandler} />
          )}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = {
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a"
  } as ViewStyle,
  goalsContainer: {
    flex: 4,
  } as ViewStyle,
};
