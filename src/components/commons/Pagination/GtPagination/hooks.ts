import {DependencyList, useEffect, useState} from 'react';
import {range} from './utils';
import {UsePaginationProps} from './index.type';

export const usePagination = (
  {page, count = 1, boundaryCount = 1, siblingCount = 1}: UsePaginationProps,
  deps: DependencyList = [],
) => {
  const [items, setItems] = useState<(number | null)[]>([]);

  useEffect(() => {
    const startPages = range(1, Math.min(boundaryCount, count));
    const endPages = range(
      Math.max(count - boundaryCount + 1, boundaryCount + 1),
      count,
    );

    const siblingsStart = Math.max(
      Math.min(
        // Natural start
        page - siblingCount,
        // Lower boundary when page is high
        count - boundaryCount - siblingCount * 2 - 1,
      ),
      // Greater than startPages
      boundaryCount + 2,
    );

    const siblingsEnd = Math.min(
      Math.max(
        // Natural end
        page + siblingCount,
        // Upper boundary when page is low
        boundaryCount + siblingCount * 2 + 2,
      ),
      // Less than endPages
      endPages.length > 0 ? endPages[0] - 2 : count - 1,
    );

    setItems([
      ...startPages,

      // Start ellipsis

      ...(siblingsStart > boundaryCount + 2
        ? [null]
        : boundaryCount + 1 < count - boundaryCount
        ? [boundaryCount + 1]
        : []),

      // Sibling pages
      ...range(siblingsStart, siblingsEnd),

      // End ellipsis

      ...(siblingsEnd < count - boundaryCount - 1
        ? [null]
        : count - boundaryCount > boundaryCount
        ? [count - boundaryCount]
        : []),

      ...endPages,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);

  return items;
};
