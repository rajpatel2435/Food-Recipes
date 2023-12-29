import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealDetail({ route,navigation }) {
  const catId = route.params.categoryId;

  return (
    <View>


      {/* Filter and display meals */}
      {MEALS.filter((item) => item.categoryIds.includes(catId)).map(
        (meal) => (
          <View key={meal.id}>
            <Image source={{ uri: meal.imageUrl}} style={{
                height:200,
                width:400,
            }}/>
            <Text>{meal.title}</Text>
            {/* Add more Text components to display other meal information */}
            <View>
                <Pressable onPress={()=>
                {
                    navigation.navigate('Recipies',{
                        id: meal.id,
                        title: meal.title
                    })
                }}>
                    <Text>Read more </Text>
                </Pressable>
                </View>
          </View>
        )
      )}
    </View>
  );
}

export default MealDetail;
