import axios from 'axios';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { FiltersValue, Products, useMarketStore } from '../store';
import { Filters, Skeleton } from '../components';
import { RowOfCards } from '../components/rowOfCards';
import { sortHelper, priceHelper } from '../helpers';
import { Paths } from '../global';

const Electronics: NextPage = () => {
    const isLoading = useMarketStore((store) => store.isLoading);
    const products = useMarketStore((store) => store.products);
    const price = useMarketStore((store) => store.filters?.price);
    const sort = useMarketStore((store) => store.filters?.sort);
    const filteredProducts = useMarketStore((store) => store.filteredProducts);
    const setIsLoading = useMarketStore((store) => store.setIsLoading);
    const setSort = useMarketStore((store) => store.setSort);
    const setProducts = useMarketStore((store) => store.setProducts);
    const setFilters = useMarketStore((store) => store.setFilters);
    const setFilteredProducts = useMarketStore((store) => store.setFilteredProducts);
    const setSection = useMarketStore((store) => store.setSection);
    useEffect(() => {
        setSection(Paths.Electronics);
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
            .get('https://fakestoreapi.com/products/category/electronics')
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
export default Electronics;
