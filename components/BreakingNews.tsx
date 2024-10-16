import { StyleSheet,View, Text, FlatList} from 'react-native'
import React ,{useState} from 'react'
import SliderItem from '@/components/SliderItem'
import { NewsDataType } from '@/types'
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'

type Props = {
  newsList: Array<NewsDataType>
}



const BreakingNews = ({newsList}: Props) => {
const [data, setData] = useState(newsList);
const [paginationIndex, setPaginationIndex] = useState(0);
const scrollX = useSharedValue(0);
const ref = useAnimatedRef<Animated.FlatList<any>>();

const onScrollHandler = useAnimatedScrollHandler({
  onScroll: (event) => {
    scrollX.value = event.contentOffset.x;
  }, 
});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BreakingNews</Text>
      <View style={styles.slideWrapper}>
        <Animated.FlatList 
        ref={ref}
        data={data} 
        keyExtractor={(_,index) => 'list_item$(index)'} 
        renderItem={({item,index}) => (
            <SliderItem slideItem={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled 
        onScroll={onScrollHandler}
        scrollEventThrottle={16}/>
        </View>
    </View>
  )
}

export default BreakingNews

const styles = StyleSheet.create({
    container: {
        marginBottom:10,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        marginBottom: 10,
        marginLeft: 20,
    },
    slideWrapper: {
        
        justifyContent: 'center',
    }
})
