import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect} from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Headers from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import axios from 'axios'
import { NewsDataType } from '@/types'
import BreakingNews from '@/components/BreakingNews'
import Categories from '@/components/Categories'
type Props = {}

const Page = (props: Props) => {
  const {top: safeTop} = useSafeAreaInsets();
  const [breakingNews, setBreakingNews] = useState<NewsDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {
    getBreakingNews();
  }, [])
  

  const getBreakingNews = async () => {
    try {
      const URL ='https://newsdata.io/api/1/news?apikey=pub_56113892992c7c124b62c5653e8f3ec9b6920&country=us&language=en&category=business&image=1';
      const response = await axios.get(URL);
      console.log(response.data.results);
      if ( response && response.data ) {
        setBreakingNews(response.data.results);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const onCatChanged = (category: string) => {
    console.log('Category:',category)
}
      
  return (
    <View style={[styles.container, {paddingTop:safeTop}]}>
      <Headers />
      <SearchBar />
      {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ): ( <BreakingNews newsList={breakingNews} />) }
    
      <Categories onCategoryChanged={onCatChanged}/>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
})