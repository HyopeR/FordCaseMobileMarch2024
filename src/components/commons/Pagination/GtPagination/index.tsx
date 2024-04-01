import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import GtView from '../../View/GtView';
import GtText from '../../Text/GtText';
import GtTouch from '../../Button/GtTouch';
import GtIcon from '../../Icon/GtIcon';
import {fontStyles, spaceStyles} from '@styles';
import {usePagination} from './hooks';
import {GtPaginationProps} from './index.type';

const GtPagination = ({
  count,
  page,
  boundaryCount = 1,
  siblingCount = 0,
  onChange,
  style,
}: GtPaginationProps) => {
  const {colors} = useTheme();

  const items = usePagination({page, count, boundaryCount, siblingCount}, [
    page,
    count,
    boundaryCount,
    siblingCount,
  ]);

  const isFirst = page === 1;
  const isLast = page === count;

  const itemContentProps = useMemo(() => ({size: fontStyles.title}), []);
  const itemStyle = useMemo(
    () => ({borderColor: colors.backgroundSecondary}),
    [colors],
  );

  const handleOnChange = (value: number) => {
    onChange && onChange(value);
  };

  return (
    <GtView style={StyleSheet.compose(styles.wrapper, style)}>
      <GtTouch
        activeOpacity={0.75}
        disabled={isFirst}
        style={[
          styles.item,
          styles.itemLeft,
          itemStyle,
          {opacity: isFirst ? 0.75 : 1},
        ]}
        onPress={() => handleOnChange(page - 1)}>
        <GtIcon name={'ChevronLeft'} {...itemContentProps} />
      </GtTouch>

      {items.map((item, index) => {
        const content = item !== null ? item : '...';
        const active = item === page;

        const backgroundColor = active
          ? colors.primaryLight
          : colors.background;

        return (
          <GtTouch
            key={index}
            activeOpacity={0.75}
            style={[
              styles.item,
              styles.itemCenter,
              itemStyle,
              {backgroundColor},
            ]}
            onPress={() => handleOnChange(item as number)}>
            <GtText {...itemContentProps}>{content}</GtText>
          </GtTouch>
        );
      })}

      <GtTouch
        activeOpacity={0.75}
        disabled={isLast}
        style={[
          styles.item,
          styles.itemRight,
          itemStyle,
          {opacity: isLast ? 0.75 : 1},
        ]}
        onPress={() => handleOnChange(page + 1)}>
        <GtIcon name={'ChevronRight'} {...itemContentProps} />
      </GtTouch>
    </GtView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  item: {
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  itemLeft: {
    marginRight: spaceStyles.xs,
  },
  itemCenter: {
    marginHorizontal: spaceStyles.xs,
  },
  itemRight: {
    marginLeft: spaceStyles.xs,
  },
});

export default GtPagination;
export type {GtPaginationProps};
