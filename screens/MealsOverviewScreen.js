import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  // route provided by Stack.Screen
  //   const route = useRoute(); for components not registered using Stack.Screen
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0; // that implies the category exists
  });

  useLayoutEffect(() => {
    // run effect simultaneously with component function execution
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]); // two external dependencies

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
