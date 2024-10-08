import { Filters, NoProductsFound, RowOfCards, Skeleton } from '@/components';
import { Paths } from '@/global';
import { sortHelper, priceHelper } from '@/helpers';
import { useMarketStore, Products, FiltersValue } from '@/store';
import axios from 'axios';
import { NextPage } from 'next';
import { useEffect } from 'react';

const Clothes: NextPage = () => {
    const filteredProducts = useMarketStore((store) => store.filteredProducts);
    const isLoading = useMarketStore((store) => store.isLoading);
    const gender = useMarketStore((store) => store.filters?.gender);
    const price = useMarketStore((store) => store.filters?.price);
    const sort = useMarketStore((store) => store.filters?.sort);
    const products = useMarketStore((store) => store.products);
    const setIsLoading = useMarketStore((store) => store.setIsLoading);
    const setProducts = useMarketStore((store) => store.setProducts);
    const setFilteredProducts = useMarketStore((store) => store.setFilteredProducts);
    const setFilters = useMarketStore((store) => store.setFilters);
    const setSort = useMarketStore((store) => store.setSort);
    const setSection = useMarketStore((store) => store.setSection);

    useEffect(() => {
        setSection(Paths.Clothes);
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
        const man = `men's clothing`;
        const woman = `women's clothing`;
        const genderType = gender === 'man' ? man : woman;
        const filter = !gender ? '' : genderType;
        if (filter !== '') {
            axios
                .get(`https://fakestoreapi.com/products/category/${filter}`)
                .then((res) => {
                    if (res.data && res.status === 200) {
                        setProducts(res.data);
                        setSort(FiltersValue.RELEVANCE);
                    }
                })
                .catch(() => setProducts([]))
                .finally(() => setIsLoading(false));
        } else {
            const manAPI = axios.get("https://fakestoreapi.com/products/category/men's clothing");
            const womanAPI = axios.get("https://fakestoreapi.com/products/category/women's clothing");
            Promise.all([manAPI, womanAPI])
                .then((res) => {
                    const successfullyResponse: Products[] = res.flatMap((res, index) => {
                        if (res?.data && res?.status === 200) {
                            return res.data;
                        }
                    });
                    setProducts(successfullyResponse);
                    setSort(FiltersValue.RELEVANCE);
                })
                .catch(() => setProducts([]))
                .finally(() => setIsLoading(false));
        }
    }, [gender]);

    return isLoading || isLoading === null ? (
        <Skeleton />
    ) : (
        <>
            <Filters products={products} />
            {filteredProducts.length > 0 ? <RowOfCards products={filteredProducts} /> : <NoProductsFound />}
        </>
    );
};
export default Clothes;
