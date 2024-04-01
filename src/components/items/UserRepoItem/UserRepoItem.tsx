import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {GtText, GtTouch, GtView} from '@components/commons';
import {fontStyles} from '@styles';
import {UserRepoRow} from './common/UserRepoRow';
import {UserRepoItemProps} from './type';

const UserRepoItem = ({item, touchProps}: UserRepoItemProps) => {
  const {colors} = useTheme();

  const {style, ...omitTouchProps} = touchProps || {};

  const {forks_count, open_issues_count, watchers_count, language} = item;

  return (
    <GtTouch
      style={StyleSheet.compose(styles.touch, style)}
      {...omitTouchProps}>
      <GtView style={styles.wrapper}>
        <GtView style={styles.titleContainer}>
          <GtText medium style={styles.title} numberOfLines={2}>
            {item.name}
          </GtText>
        </GtView>

        <GtView style={styles.contentContainer}>
          <UserRepoRow
            icon={'CodeBraces'}
            title={'Language:'}
            text={language}
          />
          <UserRepoRow
            icon={'Fork'}
            title={'Forks:'}
            text={forks_count}
            color={colors.contrast(0.1)}
          />
          <UserRepoRow icon={'Eye'} title={'Watchers:'} text={watchers_count} />
          <UserRepoRow
            icon={'Bug'}
            title={'Issues:'}
            text={open_issues_count}
            color={colors.contrast(0.1)}
          />
        </GtView>
      </GtView>
    </GtTouch>
  );
};

const styles = StyleSheet.create({
  touch: {
    flex: 1,
    height: 150,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleContainer: {
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: fontStyles.body,
    textAlign: 'center',
  },
  contentContainer: {},
});

export default UserRepoItem;
