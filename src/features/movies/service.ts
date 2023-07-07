import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

import { DEFAULT_LANGUAGE_KEY } from '@/lib/i18n/constants';

import { Category, Movie, Staff, zMoviesList } from './schema';

const MOVIES_BASE_URL = '/movies';

export const useMoviesList = () => {
  const query = useQuery({
    queryFn: async () => {
      const response = await Axios.get(MOVIES_BASE_URL);
      return zMoviesList().parse({
        movies: response.data,
      });
    },
  });

  const movies = query.data?.movies;
  const isLoadingPage = query.isFetching;

  return {
    movies,
    isLoadingPage,
    ...query,
  };
};
