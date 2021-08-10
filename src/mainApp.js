import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import theme from './theme';
import {getJokesList} from './api';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';

Icon.loadFont();

const MainApp = props => {
  const [listData, setListData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setLoading] = useState(false);

  const renderListItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Icon name="smileo" size={30} style={styles.iconStyle} />
        <Text style={styles.itemText}>{item.joke}</Text>
      </View>
    );
  };

  const fetchJokesList = async url => {
    const response = await getJokesList(url);
    setLoading(false);
    setListData(page > 1 ? [...listData, ...response] : response);
  };

  useEffect(() => {
    (async () => {
      await setLoading(true);
      await fetchJokesList(`/search?page=${page}&limit=10&term=${searchText}`);
    })();
  }, [page, searchText]);

  const onScrollHandler = () => {
    setPage(page + 1);
  };

  const doSearch = async search => {
    setSearchText(search);
    if (search.length > 0) {
      setSearchText(search);
    } else {
      setSearchText('');
    }
    setPage(1);
  };

  const renderFooter = () => {
    return (
      <TouchableOpacity
        style={styles.loadMoreStyle}
        onPress={() => onScrollHandler()}>
        <Text style={{color: theme.COLORS.WHITE}}>Load More Jokes</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content
          titleStyle={{color: theme.COLORS.WHITE, fontSize: theme.SIZES.BASE}}
          title="Random Dad Jokes"
        />
      </Appbar.Header>
      <TextInput
        style={styles.searchBarStyle}
        placeholder="Search jokes"
        onChangeText={text => doSearch(text)}
        value={searchText}
        onSubmitEditing={() => console.log('Done search')}
        returnKeyType="done"
      />
      <FlatList
        style={styles.listStyle}
        data={listData}
        renderItem={item => renderListItem(item)}
        ListFooterComponent={() => renderFooter()}
        onEndThreshold={0}
      />
      {isLoading && <ActivityIndicator size="large" style={styles.loading} />}
    </View>
  );
};

export default MainApp;
