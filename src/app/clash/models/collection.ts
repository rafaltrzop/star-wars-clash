export interface Collection<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
