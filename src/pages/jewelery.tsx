import { Filters, RowOfCards, Skeleton } from '@/components';
import { Paths } from '@/global';
import { sortHelper, priceHelper } from '@/helpers';
import { useMarketStore, Products, FiltersValue } from '@/store';
import axios from 'axios';
import { NextPage } from 'next';
import { useEffect } from 'react';

const Jewelery: NextPage = () => {
    const isLoading = useMarketStore((store) => store.isLoading);
    const price = useMarketStore((store) => store.filters?.price);
    const sort = useMarketStore((store) => store.filters?.sort);
    const filteredProducts = useMarketStore((store) => store.filteredProducts);
    const products = useMarketStore((store) => store.products);
    const setSort = useMarketStore((store) => store.setSort);
    const setIsLoading = useMarketStore((store) => store.setIsLoading);
    const setProducts = useMarketStore((store) => store.setProducts);
    const setFilteredProducts = useMarketStore((store) => store.setFilteredProducts);
    const setFilters = useMarketStore((store) => store.setFilters);
    const setSection = useMarketStore((store) => store.setSection);
    useEffect(() => {
        setSection(Paths.Jewelery);
        return () => {
            setFilters({});
            setProducts([]);
            setFilteredProducts([]);
        };
    }, []);

    useEffect(() => {
        const filteredSort: Products[] = [];
        const filteredPrice: Products[] = [];
        sortHelper(sort, filteredSort, products);
        priceHelper(price, filteredPrice, filteredSort, products);
        setFilteredProducts(price ? filteredPrice : filteredSort);
    }, [price, sort]);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get('https://fakestoreapi.com/products/category/jewelery')
            .then((res) => {
                if (res.data && res.status === 200) {
                    setProducts(res.data);
                    setFilteredProducts(res.data);
                    setSort(FiltersValue.RELEVANCE);
                }
            })
            .catch((e) => console.error(e))
            .finally(() => setIsLoading(false));
    }, []);

    return isLoading ? (
        <Skeleton />
    ) : (
        <>
            <Filters products={products} />
            <RowOfCards products={filteredProducts} />
        </>
    );
};
export default Jewelery;
