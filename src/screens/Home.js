import React, { useEffect, useState } from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import BreedList from '../components/BreedList';
import LogoIcon from '../assets/LogoIcon';

const Home = () => {
  const [cats, setCats] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getCats = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://api.thecatapi.com/v1/breeds?limit=10&page=${currentPage}`
    );
    if (data?.length > 0) {
      setCats([...cats, ...data]);
    }
    setIsLoading(false);
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={style.loader}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    if (searchKey === '') {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearch = async () => {
    if (searchKey !== '' && searchKey?.length > 2) {
      const { data } = await axios.get(
        ` https://api.thecatapi.com/v1/breeds/search?name=${searchKey}`
      );
      setSearchData(data);
    } else {
      getCats();
    }
  };

  useEffect(() => {
    getCats();
  }, [currentPage]);

  useEffect(() => {
    handleSearch();
  }, [searchKey]);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <LogoIcon />
      </View>
      <View style={style.searchInput}>
        <TextInput
          style={style.textInput}
          placeholder="Search Cat..."
          onChangeText={setSearchKey}
        />
      </View>
      <FlatList
        style={style.listContainer}
        data={searchKey !== '' ? searchData : cats}
        renderItem={({ item }) => <BreedList item={item} />}
        keyExtractor={(item, index) => item.id + index}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0.8}
      />
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#F7D716',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  searchInput: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  listContainer: {
    marginTop: 4,
  },
  textInput: {
    fontSize: 16,
  },
  item: {
    backgroundColor: 'red',
    margin: 20,
  },
  loader: {
    marginVertical: 16,
    alignItems: 'center',
  },
});
