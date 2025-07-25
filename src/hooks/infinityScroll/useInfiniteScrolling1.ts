/* eslint-disable prettier/prettier */
import { useEffect, useState, useCallback, useRef } from 'react';
import FetchData, { UseFetchDataProps } from '../FetchData';

export interface ListType {
  bloggerAvatar: string;
  bloggerId: number;
  bloggerName: string;
  canViewBlog: boolean;
  isProBlog: boolean;
  is_bookmarked: boolean;
  itemId: number;
  meta_data: string;
  primaryAgeGroup: string;
  proText: string;
  thumb: string;
  title: string;
  type: string;
  url: string;
  viewsCount: string;
}

const useInfiniteScrolling = () => {
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [list, setList] = useState<ListType[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const refs = useRef<HTMLDivElement | null>(null);

  const getList = useCallback(async () => {
    setIsLoading(true);
    try {
      const config: UseFetchDataProps = {
        url: 'https://qa7.parentune.com/api/blog/blogs/blogs',
        params: {
          page: page,
        },
      };
      const result = await FetchData(config);
      if (result?.list) {
        setHasMore(result.list.length > 0);
        setList((prevList) => [...prevList, ...result?.list]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    getList();
  }, [getList]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isLoading && hasMore) {
        setPage((prev) => prev + 1);
      }
    }, options);

    const currentRef = refs.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasMore, isLoading]);

  return { isLoading, list, refs };
};

export default useInfiniteScrolling;
