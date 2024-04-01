import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import {GtButton, GtText, GtView} from '@components/commons';
import {useAppDispatch, useAppSelector} from '@stores/hooks';
import {fontStyles, spaceStyles} from '@styles';
import {ThemeAct} from '@actions/ThemeAction';
import {useConnector} from '@utils/hooks';
import {AppDrawerRow} from './common/AppDrawerRow';
import {AppDrawerProps} from './index.type';

const AppDrawer = (props: AppDrawerProps) => {
  const {colors} = useTheme();

  const dispatch = useAppDispatch();

  const {mode} = useAppSelector(store => store.themeSto);

  const connected = useConnector();

  const {state, navigation, descriptors} = props;

  const {routes} = state;

  const handleNavigate = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <GtView color={colors.background} style={styles.wrapper}>
      <SafeAreaView style={styles.safe}>
        <GtView style={styles.header}>
          <GtText bold size={fontStyles.title}>
            Ford Otosan
          </GtText>
          <GtText>Case Mobile March 2024</GtText>
        </GtView>

        <FlatList
          style={styles.content}
          ListHeaderComponent={() => (
            <>
              <AppDrawerRow
                title={'Internet:'}
                text={`${connected}`}
                style={styles.item}
              />
              <AppDrawerRow
                title={'Theme:'}
                text={mode === 'light' ? 'Light' : 'Dark'}
                style={styles.item}
                onPress={() => dispatch(ThemeAct.toggleThemeMode())}
              />
            </>
          )}
          contentContainerStyle={styles.contentContainer}
          data={routes}
          keyExtractor={item => item.key}
          renderItem={({item}) => {
            const {options} = descriptors[item.key];

            const label = options?.title || item.name;

            return (
              <GtButton
                key={item.key}
                color={colors.backgroundSecondary}
                height={40}
                text={label}
                textColor={colors.text}
                style={styles.item}
                onPress={() => handleNavigate(item.name)}
              />
            );
          }}
        />

        <GtView style={styles.footer} />
      </SafeAreaView>
    </GtView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  safe: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spaceStyles.lg,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: spaceStyles.sm,
    paddingVertical: spaceStyles.lg,
  },
  contentSeparator: {
    height: spaceStyles.sm,
  },
  item: {
    marginBottom: spaceStyles.sm,
    padding: spaceStyles.xs,
  },
  footer: {
    height: 50,
    paddingHorizontal: spaceStyles.sm,
    marginBottom: spaceStyles.sm,
  },
});

export default AppDrawer;
export type {AppDrawerProps};
