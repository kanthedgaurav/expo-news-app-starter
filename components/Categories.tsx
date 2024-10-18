import newsCategoryList from '@/constants/Categories'
import React, { useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View , ScrollView } from 'react-native'
import {Colors} from '@/constants/Colors'

type Props = {
    onCategoryChanged: (category: string) => void
}

const Categories = ({onCategoryChanged}: Props) => {
    const scrollRef = useRef<ScrollView>(null)
    const itemRef = useRef<TouchableOpacity[] | null[]>([])
    const [activeIndex, setActiveIndex] = React.useState(0) 
   
    const handleSelectCategory = (index: number) => {
        const selected = itemRef.current[index]
        setActiveIndex(index)

        selected?.measure((x) => {
            scrollRef.current?.scrollTo({x: x - 20, y: 0, animated: true})
    }
    )
    onCatChanged(newsCategoryList[index].slug)
    }



  return (
    <View>
    <Text style={styles.title}>Trending Right Now</Text>
    <ScrollView 
    ref={scrollRef}
    horizontal 
    showsHorizontalScrollIndicator={false} 
    contentContainerStyle={styles.itemWrapper}
    >
        {newsCategoryList.map((item,index) => (
            <TouchableOpacity 
            ref={(el)=> (itemRef.current[index] =el) }
            key={index} 
            style={[styles.item,activeIndex === index && styles.itemActive]}
            onPress={() => handleSelectCategory(index)}
            >
                <Text style={[styles.itemText, activeIndex=== index && styles.itemTextActive]}>{item.title}</Text>   
            </TouchableOpacity>
        ))}
    </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        marginBottom: 10,
        marginLeft: 20,
    },
    itemWrapper: {
        gap:20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    item:{
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 16,

    },
    itemText:{
        fontSize: 16,
        color: 'grey',
        letterSpacing: 0.5,
    },
    itemActive:{
        backgroundColor: Colors.tint,
        borderColor: Colors.tint,
    },
    itemTextActive:{
        color: 'white',
        fontWeight: '600',
    } ,
})