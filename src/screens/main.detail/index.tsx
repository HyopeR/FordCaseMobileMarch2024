import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {GtLayout} from '@components/layouts';
import {MainStackRoute} from '@routes';
import {UserRepos} from '@helpers/types';
import {fontStyles, spaceStyles} from '@styles';
import {UserRepoDetailRow} from './common/UserRepoDetailRow';

const MainDetailScreen = ({route}: MainStackRoute<'main.detail'>) => {
  const {colors} = useTheme();

  useEffect(() => {
    const {userRepo} = route.params;

    if (userRepo) {
      setRepo(userRepo);
    }
  }, [route]);

  const [repo, setRepo] = useState<UserRepos[0] | undefined>(undefined);

  return (
    <GtLayout>
      <ScrollView style={styles.wrapper}>
        {repo && (
          <>
            <UserRepoDetailRow
              style={{...styles.row, justifyContent: 'center'}}
              text={repo.name}
              textProps={{size: fontStyles.title}}
            />

            <UserRepoDetailRow
              color={colors.backgroundSecondary}
              style={styles.row}
              title={'Owner:'}
              text={repo.owner.login}
            />

            <UserRepoDetailRow
              style={styles.row}
              title={'Language:'}
              text={repo.language}
            />

            <UserRepoDetailRow
              color={colors.backgroundSecondary}
              style={styles.row}
              title={'Id:'}
              text={repo.id}
            />

            <UserRepoDetailRow
              style={styles.row}
              title={'Node Id:'}
              text={repo.node_id}
            />

            <UserRepoDetailRow
              color={colors.backgroundSecondary}
              style={styles.row}
              title={'Private:'}
              text={`${repo.private}`}
            />

            <UserRepoDetailRow
              style={styles.row}
              title={'Fork:'}
              text={`${repo.fork}`}
            />

            <UserRepoDetailRow
              color={colors.backgroundSecondary}
              style={styles.row}
              title={'Size:'}
              text={repo.size}
            />

            <UserRepoDetailRow
              style={styles.row}
              title={'Forks:'}
              text={repo.forks_count}
            />

            <UserRepoDetailRow
              color={colors.backgroundSecondary}
              style={styles.row}
              title={'Watchers:'}
              text={repo.watchers_count}
            />

            <UserRepoDetailRow
              style={styles.row}
              title={'Issues:'}
              text={repo.open_issues_count}
            />
          </>
        )}
      </ScrollView>
    </GtLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  row: {
    minHeight: 30,
    marginBottom: spaceStyles.xs,
    paddingHorizontal: spaceStyles.xs,
  },
});

export default MainDetailScreen;
