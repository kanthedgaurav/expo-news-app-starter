import { StyleSheet,Text,TouchableOpacity,View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { NewsDataType } from '@/types'
import axios from 'axios'

type Props = {}

const NewsDetails = (props: Props) => {
    const {id} = useLocalSearchParams<{id: string}>()
    const [news, setNews] = useState<NewsDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNews();
  }, [])

    const getNews = async () => {
        try {
          const URL =`https://newsdata.io/api/1/news?apikey=pub_56113892992c7c124b62c5653e8f3ec9b6920&id=${id}`;
          const response = await axios.get(URL);
          console.log(response.data.results);
          if ( response && response.data ) {
            setNews(response.data.results);
            setIsLoading(false);
          }
        } catch (error) {
          console.error(error);
        }
      }

  return (
    <>
    <Stack.Screen options={{
        headerLeft: () => (
             <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
                <Ionicons name="heart-outline" size={24} color="black" />
            </TouchableOpacity>
        ),
    }} />
    <View>
        
        <Text>{news[0].content}</Text>
    </View>
    </>
  )
}

export default NewsDetails

const styles = StyleSheet.create({})