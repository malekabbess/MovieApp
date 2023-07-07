import { z } from 'zod';

// Schema de Staff
export type Staff = z.infer<ReturnType<typeof zStaff>>;
export const zStaff = () =>
  z.object({
    firstname: z.string(),
    lastname: z.string(),
  });

// Schema de Movies
export type Movie = z.infer<ReturnType<typeof zMovie>>;
export const zMovie = () =>
  z.object({
    name: z.string(),
    duration: z.string(),
    description: z.string(),
    language: z.string().nullable(),
    imageUrl: z.string(),
    publishDate: z.string(),
    membreStaffs: z.array(zStaff()).nullable(),
  });
// Model de Response de movies
export type MoviesList = z.infer<ReturnType<typeof zMoviesList>>;
export const zMoviesList = () =>
  z.object({
    movies: z.array(zMovie()).nullable(),
  });

// Schema de Categories
export type Category = z.infer<ReturnType<typeof zCategory>>;
export const zCategory = () =>
  z.object({
    name: z.string(),
    description: z.string(),
    movies: z.array(zMovie()).nullable(),
  });
