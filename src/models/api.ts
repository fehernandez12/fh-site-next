interface ListApiResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
