import {Platform} from 'react-native';

const SCROLL_EVENT_THROTTLE = 16;
const REMOVE_CLIPPED_SUBVIEWS = Platform.OS === 'android';
const SHOWS_VERTICAL_SCROLL_INDICATOR = false;
const SHOWS_HORIZONTAL_SCROLL_INDICATOR = false;

// Only FlatList
const STICKY_SECTION_HEADERS_ENABLED = false;

// Only ScrollView
const NESTED_SCROLL_ENABLED = true;

export const SCROLL_LIST_PROPS = {
  scrollEventThrottle: SCROLL_EVENT_THROTTLE,
  removeClippedSubviews: REMOVE_CLIPPED_SUBVIEWS,
  showsVerticalScrollIndicator: SHOWS_VERTICAL_SCROLL_INDICATOR,
  showsHorizontalScrollIndicator: SHOWS_HORIZONTAL_SCROLL_INDICATOR,
  stickySectionHeadersEnabled: STICKY_SECTION_HEADERS_ENABLED,
};

export const SCROLL_VIEW_PROPS = {
  scrollEventThrottle: SCROLL_EVENT_THROTTLE,
  // removeClippedSubviews: REMOVE_CLIPPED_SUBVIEWS,
  showsVerticalScrollIndicator: SHOWS_VERTICAL_SCROLL_INDICATOR,
  showsHorizontalScrollIndicator: SHOWS_HORIZONTAL_SCROLL_INDICATOR,
  nestedScrollEnabled: NESTED_SCROLL_ENABLED,
};
