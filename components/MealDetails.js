import { View, Text, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability, textStyle }) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detail, textStyle]}>{duration}m</Text>
      <Text style={[styles.detail, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detail, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detail: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
