import { Text, View } from "react-native";

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>This is the Detail of a Meal {mealId}</Text>
    </View>
  );
}

export default MealDetailsScreen;
