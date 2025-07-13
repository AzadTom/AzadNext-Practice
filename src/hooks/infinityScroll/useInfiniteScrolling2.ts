/* eslint-disable prettier/prettier */
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import FetchData, { UseFetchDataProps } from '../FetchData';
import { useEffect } from 'react';

const fetchList = async ({ pageParam = 1 }) => {
  const config: UseFetchDataProps = {
    url: 'https://qa7.parentune.com/api/blog/blogs/blogs',
    params: {
      page: pageParam,
    },
  };
  const result = await FetchData(config);
  return { list: result.list, nextPage: pageParam + 1 };
};

const useInfiniteScrollBest = () => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['infinte-scrolling'],
      queryFn: fetchList,
      initialPageParam: 1,
      getNextPageParam: (lastpage) =>
        lastpage.list.length > 0 ? lastpage.nextPage : undefined,
    });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView,fetchNextPage,hasNextPage,isFetchingNextPage]);

  return {
    data: data?.pages.flatMap((page) => page.list) ?? [],
    isLoading: hasNextPage,
    ref,
  };
};

export default useInfiniteScrollBest;
