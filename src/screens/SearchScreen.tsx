import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../components/SearchInput'
import styles from '../theme/appTheme'

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <SearchInput />
    </SafeAreaView>
  )
}

export default SearchScreen
