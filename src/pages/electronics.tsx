import { Filters, NoProductsFound, RowOfCards, Skeleton } from '@/components';
import { Paths } from '@/global';
import { sortHelper, priceHelper } from '@/helpers';
import { useMarketStore, Products, FiltersValue } from '@/store';
import axios from 'axios';
import { NextPage } from 'next';
import { useEffect } from 'react';

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
            .catch(() => setProducts([]))
            .finally(() => setIsLoading(false));
    }, []);

    return isLoading || isLoading === null ? (
        <Skeleton />
    ) : (
        <>
            <Filters products={products} />
            {filteredProducts.length > 0 ? <RowOfCards products={filteredProducts} /> : <NoProductsFound />}
        </>
    );
};
export default Electronics;
