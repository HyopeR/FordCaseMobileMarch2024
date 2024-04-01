import {Searcher} from '@services/Searcher';
import {Paginator} from '@services/Paginator';

export const UserSearcher = new Searcher('JakeWharton');
export const UserRepoPaginator = new Paginator(1, 10);
