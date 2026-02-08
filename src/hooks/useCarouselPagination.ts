'use client';

import { useCallback, useEffect, useState } from 'react';

import type { CarouselApi } from '@/components/ui/carousel';

type UseCarouselPaginationReturn = {
  api: CarouselApi | undefined;
  setApi: (api: CarouselApi | undefined) => void;
  current: number;
  count: number;
  scrollTo: (index: number) => void;
};

export const useCarouselPagination = (): UseCarouselPaginationReturn => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const totalSlides = api.scrollSnapList().length;
    setCount(totalSlides);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return { api, setApi, current, count, scrollTo };
};
