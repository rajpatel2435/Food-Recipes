import { FlatList, Pressable } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import { useNavigation } from '@react-navigation/native';
import { View,Text } from 'react-native';



function CategoriesScreen({navigation}) {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
      padding:10
        }}>
<Pressable android_ripple={{color:'#ccc'}} onPress={()=>{
      navigation.navigate('MealsDetails',{
        categoryId: item.id,
        title: item.title,

      })
}
}>
 
        <View style={{
            height:200,
            width:200,
    padding:10,
            backgroundColor: item.color,
            justifyContent:'center',
            alignItems:'center'            
        }}>
<Text id={item.id}>
{item.title}
</Text>
        </View>
        </Pressable>    
        </View>
    )}
    
      numColumns={4}
    />
  );
}

export default CategoriesScreen;