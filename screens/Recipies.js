import React from 'react'
import { MEALS } from '../data/dummy-data';
import { View,Text } from 'react-native';
View
function Recipies({route}) {

    const title= route.params.id;
    console.log(title);
  return (
<>
<View>
   {/* Filter and display meals */}
   {MEALS.filter((item) =>item.id==title).map((item)=>(
    <View key={item.id}>
<Text>
{item.steps}
    
   
</Text>

        </View>
   ))


}

   
 
</View>
</>
  )
}

export default Recipies