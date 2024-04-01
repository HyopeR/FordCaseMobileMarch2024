import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {UserRepoItem, UserRepoItemProps} from '@components/items/UserRepoItem';
import {layoutStyles, spaceStyles} from '@styles';
import {UserRepoListProps} from './index.type';
import {GtEmptyManager, GtFlatList} from '@components/commons';
import {Navigation} from '@helpers/navigation';

const ITEM_MARGIN = spaceStyles.xs;
const ITEM_PADDING = spaceStyles.xs;
const ITEM_OFFSET = ITEM_MARGIN * 2;

export const UserRepoList = ({
  data,
  loading,
  numColumns,
  ...props
}: UserRepoListProps) => {
  const {colors} = useTheme();

  const renderItem = useCallback(
    ({item}: UserRepoItemProps) => {
      const columns = numColumns || 1;
      const maxWidth = (layoutStyles.screenWidth - ITEM_OFFSET) / columns;
      return (
        <UserRepoItem
          item={item}
          touchProps={{
            onPress: () => Navigation.navigate('main.detail', {userRepo: item}),
            style: {
              backgroundColor: colors.backgroundSecondary,
              margin: ITEM_MARGIN,
              padding: ITEM_PADDING,
              maxWidth: maxWidth,
            },
          }}
        />
      );
    },
    [colors.backgroundSecondary, numColumns],
  );

  return (
    <GtFlatList
      key={`list-${numColumns}`}
      numColumns={numColumns}
      data={data}
      style={styles.wrapper}
      contentContainerStyle={styles.contentContainer}
      renderItem={renderItem}
      keyExtractor={item => `${item.id}`}
      ListEmptyComponent={() => (
        <GtEmptyManager loading={loading} loaded={!loading} />
      )}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  emptyContainer: {
    flexGrow: 1,
    padding: spaceStyles.xs,
  },
});
