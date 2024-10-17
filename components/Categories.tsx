import newsCategoryList from '@/constants/Categories'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View , ScrollView } from 'react-native'


type Props = {}

const Categories = (props: Props) => {
  return (
    <View>
    <Text style={styles.title}>Trending Right Now</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.itemWrapper}>
        {newsCategoryList.map((item,index) => (
            <TouchableOpacity key={index}>
                <Text>{item.title}</Text>   
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
})