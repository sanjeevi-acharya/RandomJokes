import {StyleSheet, Dimensions} from 'react-native';
import theme from './theme';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBar: {
    width,
    alignItems: 'center',
    elevation: 0,
    backgroundColor: theme.COLORS.LIGHTBLUE,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 5,
    borderBottomWidth: 0.5,
    borderColor: 'lightgrey',
  },
  iconStyle: {
    color: theme.COLORS.LIGHTBLUE,
    alignSelf: 'center',
    marginRight: 10,
  },
  itemText: {
    width: '90%',
    fontSize: theme.SIZES.MEDIUM,
  },
  loadMoreStyle: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: theme.COLORS.LIGHTBLUE,
    padding: 10,
    borderRadius: 20,
  },
  searchBarStyle: {
    borderRadius: 20,
    height: 40,
    borderColor: '#DEDCEC',
    borderWidth: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginHorizontal: 20,
    width: '90%',
    marginTop: 10,
  },
  listStyle: {
    flex: 1,
    width: '100%',
    marginVertical: 20,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
