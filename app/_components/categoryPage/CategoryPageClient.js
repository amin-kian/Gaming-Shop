'use client';

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import Layout from "@/app/_components/categoryPage/Layout";
import ControlsBar from "@/app/_components/categoryPage/ControlsBar";
import ProductGridDisplay from "@/app/_components/products/ProductGridDisplay";
import FilterSidebar from "@/app/_components/categoryPage/filterCategory/FilterSidebar";
import sortProducts from "@/app/_components/categoryPage/sortProducts";
import Breadcrumb from "@/app/_components/breadcrumb/Breadcrumb";

export default function CategoryPageClient({
                                               initialAllProducts,
                                               initialSort,
                                               initialView,
                                               initialMinPrice,
                                               initialMaxPrice,
                                               currentCategoryName
                                           }) {

    const router = useRouter();
    const searchParams = useSearchParams();

    const sortDropdownRef = useRef(null);

    const [allProducts, setAllProducts] = useState(initialAllProducts); // Initialized from prop
    const [products, setProducts] = useState([]); // Filtered products displayed
    const [loading, setLoading] = useState(false); // Managed by server-side fetch initially

    const [sortOption, setSortOption] = useState(initialSort);
    const [selectedColumnCount, setSelectedColumnCount] = useState(initialView);
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
    const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
    const [minPrice, setMinPrice] = useState(initialMinPrice);
    const [maxPrice, setMaxPrice] = useState(initialMaxPrice);


    const updateUrlParams = useCallback((newSort, newView, newMinPrice, newMaxPrice) => {
        const currentParams = new URLSearchParams(searchParams.toString());
        if (newSort) {
            currentParams.set('sort', newSort);
        } else {
            currentParams.delete('sort');
        }
        if (newView) {
            currentParams.set('view', newView.toString());
        } else {
            currentParams.delete('view');
        }
        if (newMinPrice !== null && newMinPrice !== '') {
            currentParams.set('minPrice', newMinPrice.toString());
        } else {
            currentParams.delete('minPrice');
        }
        if (newMaxPrice !== null && newMaxPrice !== '') {
            currentParams.set('maxPrice', newMaxPrice.toString());
        } else {
            currentParams.delete('maxPrice');
        }

        router.replace(`?${currentParams.toString()}`, {scroll: false});
    }, [router, searchParams]);


    // Effect to set component state when URL parameters change (e.g., browser back/forward)
    useEffect(() => {
        const urlSort = searchParams.get('sort');
        const urlView = searchParams.get('view');
        const urlMinPrice = searchParams.get('minPrice');
        const urlMaxPrice = searchParams.get('maxPrice');

        if (urlSort && urlSort !== sortOption) {
            setSortOption(urlSort);
        }
        if (urlView && parseInt(urlView, 10) !== selectedColumnCount) {
            setSelectedColumnCount(parseInt(urlView, 10));
        }
        if (urlMinPrice && parseFloat(urlMinPrice) !== minPrice) {
            setMinPrice(parseFloat(urlMinPrice));
        } else if (!urlMinPrice && minPrice !== '') {
            setMinPrice('');
        }
        if (urlMaxPrice && parseFloat(urlMaxPrice) !== maxPrice) {
            setMaxPrice(parseFloat(urlMaxPrice));
        } else if (!urlMaxPrice && maxPrice !== '') {
            setMaxPrice('');
        }
    }, [searchParams]);


    // Effect to FILTER products whenever allProducts, minPrice, or maxPrice changes
    useEffect(() => {
        if (allProducts.length === 0 && !loading) {
            setProducts([]);
            return;
        }

        const filtered = allProducts.filter(product => {
            const productPrice = product.price;
            if (minPrice !== '' && productPrice < minPrice) return false;
            if (maxPrice !== '' && productPrice > maxPrice) return false;
            return true;
        });
        setProducts(filtered);
    }, [allProducts, minPrice, maxPrice, loading]);


    useEffect(() => {
        function handleClickOutside(event) {
            if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
                setIsSortDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const displayedProducts = sortProducts(products, sortOption);

    const getGridClasses = () => {
        const smMax = 2;
        const mdMax = 4;
        const lgMax = 6;

        const smCols = Math.min(selectedColumnCount, smMax);
        const mdCols = Math.min(selectedColumnCount, mdMax);
        const lgCols = Math.min(selectedColumnCount, lgMax);

        return `grid-cols-${smCols} md:grid-cols-${mdCols} lg:grid-cols-${lgCols}`;
    };

    const handleSortChange = (option) => {
        setSortOption(option);
        updateUrlParams(option, selectedColumnCount, minPrice, maxPrice);
        setIsSortDropdownOpen(false);
    };

    const handleViewChange = (numCols) => {
        setSelectedColumnCount(numCols);
        updateUrlParams(sortOption, numCols, minPrice, maxPrice);
    };

    const handleApplyPriceFilter = (filters) => {
        setMinPrice(filters.minPrice);
        setMaxPrice(filters.maxPrice);
        updateUrlParams(sortOption, selectedColumnCount, filters.minPrice, filters.maxPrice);
    };

    const breadcrumbItems = [
        {name: 'Home', href: '/'},
        {name: currentCategoryName, href: `/category/${currentCategoryName}`}
    ];

    return (
        <Layout currentCategoryName={currentCategoryName}>
            <Breadcrumb items={breadcrumbItems}/>

            <ControlsBar
                selectedColumnCount={selectedColumnCount}
                handleViewChange={handleViewChange}
                sortOption={sortOption}
                handleSortChange={handleSortChange}
                isSortDropdownOpen={isSortDropdownOpen}
                setIsSortDropdownOpen={setIsSortDropdownOpen}
                sortDropdownRef={sortDropdownRef}
                setIsFilterSidebarOpen={setIsFilterSidebarOpen}
            />

            <ProductGridDisplay
                displayedProducts={displayedProducts}
                getGridClasses={getGridClasses}
                columnCount={selectedColumnCount}
            />

            <FilterSidebar
                isOpen={isFilterSidebarOpen}
                onClose={() => setIsFilterSidebarOpen(false)}
                onApplyFilter={handleApplyPriceFilter}
                initialMinPrice={minPrice}
                initialMaxPrice={maxPrice}
            />
        </Layout>
    );
}