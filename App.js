import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetail from './screens/MealDetail';
import Recipies from './screens/Recipies';


const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <>
<StatusBar />

<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name='Meals Categories' component={CategoriesScreen} />
  <Stack.Screen name='MealsDetails' component={MealDetail} options={({route})=>({
      title: route.params && route.params.title
      ? route.params.title
      : 'Meals Categories',
  })} />
  <Stack.Screen name='Recipies' component={Recipies} options={({route})=>({
  title: route.params && route.params.title ? route.params.title :'New Recipies',
  })}  />
  
</Stack.Navigator>

</NavigationContainer>
   
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});