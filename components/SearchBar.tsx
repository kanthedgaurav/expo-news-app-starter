import { StyleSheet,View, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <View style = {styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color={Colors.lightGrey} />
        <TextInput placeholder="Search" autoCapitalize="none" style={styles.searchText} />
                </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginBottom:20,
    },
    searchBar :{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: 'lightgray',
        gap: 10
    },
    searchText: {
        fontSize: 16,
        color: Colors.dark,
        fontWeight: '500',
        flex: 1
    }
})