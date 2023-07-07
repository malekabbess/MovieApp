import React, { useEffect, useState } from 'react';

import {
  Badge,
  Box,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

import { Page, PageContent } from '@/components/Page';
import { SearchInput } from '@/components/SearchInput';

import { useMoviesList } from './service';

export default function PageMovies() {
  const { data, error, isLoading, fetchStatus } = useMoviesList();

  return (
    <Page containerSize="full">
      <PageContent>
        <SearchInput
          onChange={(value) => console.log(value)}
          iconPosition="left"
          mb="5"
          placeholder="Search by name , year , genre , director , actors"
        />

        <Text>{isLoading}</Text>
        <SimpleGrid columns={{ base: 1, sm: 3, md: 4, lg: 4 }} spacing={20}>
          {data?.movies?.map((movie, index) => (
            <Stack key={index}>
              <Image
                src={movie.imageUrl}
                alt={movie.name}
                borderRadius={20}
                boxShadow={'dark-lg'}
              />
              <Text as="em" align="center">
                {movie.name}
              </Text>
              <HStack justify="center">
                <Badge colorScheme="purple">Action</Badge>
                <Badge colorScheme="purple">Adventure</Badge>
              </HStack>
            </Stack>
          ))}
        </SimpleGrid>
      </PageContent>
    </Page>
  );
}
