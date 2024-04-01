import {Subject} from 'rxjs';
import uuid from 'react-native-uuid';
import {PaginatorState, PaginatorSetProps, PaginatorSyncOptions} from './type';

class Paginator {
  #pageInitial = 1;
  #takeInitial = 20;

  #uuid = uuid.v4();
  #page = 1;
  #take = 20;
  #total = 0;

  #subject = new Subject<PaginatorState>();

  constructor(page = 1, take = 20) {
    this.#pageInitial = page;
    this.#takeInitial = take;

    this.#page = page;
    this.#take = take;
  }

  get subject() {
    return this.#subject;
  }

  get state() {
    return {
      uuid: this.uuid,
      page: this.page,
      take: this.take,
      total: this.total,
    } as PaginatorState;
  }

  get uuid() {
    return this.#uuid;
  }

  get page() {
    return this.#page;
  }

  get take() {
    return this.#take;
  }

  get total() {
    return this.#total;
  }

  getPaginationCount(total: number) {
    const count = Math.ceil(total / this.take);
    return count || 1;
  }

  syncPagination(total: number, options?: PaginatorSyncOptions) {
    const {jumpLast, jumpFirst} = options || {};

    const lastPage = this.getPaginationCount(total);

    if (jumpLast) {
      this.setState({refresh: true, page: lastPage, total: total});
    } else if (jumpFirst) {
      this.setState({refresh: true, page: 1, total: total});
    } else {
      const currentPage = this.page;
      const newPage = currentPage > lastPage ? lastPage : currentPage;
      this.setState({refresh: true, page: newPage, total: total});
    }
  }

  setState(props: PaginatorSetProps) {
    const {refresh, page, take, total} = props;

    refresh && (this.#uuid = uuid.v4());
    page && (this.#page = page);
    take && (this.#take = take);
    total && (this.#total = total);

    this.subject.next(this.state);
  }

  setPage(page: number) {
    this.#page = page;
    this.subject.next(this.state);
  }

  setTotal(total: number) {
    this.#total = total;
    this.subject.next(this.state);
  }

  reset() {
    this.#page = this.#pageInitial;
    this.#take = this.#takeInitial;
    this.#total = 0;

    this.subject.next(this.state);
  }
}

export default Paginator;
