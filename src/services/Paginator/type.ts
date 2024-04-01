export type PaginatorState = {
  uuid: string;
  page: number;
  take: number;
  total: number;
};

export type PaginatorSetProps = {
  refresh?: boolean;
} & Partial<Omit<PaginatorState, 'uuid'>>;

export type PaginatorSyncOptions = {
  jumpFirst?: boolean;
  jumpLast?: boolean;
};
