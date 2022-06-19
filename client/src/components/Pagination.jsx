import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import styled from "styled-components";



const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

//Función para crear un rango de numeros
// range(1, 5) === [1,2,3,4,5]
const range = (from, to, step = 1) => {
    let i = from;
    const range = [];
    while (i <= to) {
        range.push(i);
        i += step;
    }
    return range;
}

const Pagination = ({ totalRecords, pageLimit = 9, onPageChanged }) => {
    const countries = useSelector(state => state.countries.countriesLoaded);
    useEffect(() => {
        gotoPage(1);
    }, [countries])

    let totalPages = Math.ceil(totalRecords / pageLimit);
    const [currentPage, setcurrentPage] = useState(1);

    const fetchPageNumbers = () => {
        const startPage = Math.max(1, currentPage);
        const endPage = Math.min(totalPages - 1, currentPage);

        let pages = [currentPage];
        const hasLeftSpill = startPage > 1;
        const hasRightSpill = (totalPages - endPage) > 1;

        switch (true) {
            case (hasLeftSpill && !hasRightSpill): {
                pages = [LEFT_PAGE, ...pages];
                break;
            }
            case (!hasLeftSpill && hasRightSpill): {
                pages = [...pages, RIGHT_PAGE];
                break;
            }
            default: {
                pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                break;
            }
        }
        return [...pages];
    }


    const gotoPage = (page) => {
        const currentPage = Math.max(0, Math.min(page, totalPages));
        const paginationData = {
            currentPage,
            totalPages: totalPages,
            pageLimit: pageLimit,
            totalRecords: totalRecords
        };
        setcurrentPage(currentPage);
        onPageChanged(paginationData);
        window.scrollTo(0, 0);
    }

    const handleClick = (page, e) => {
        e.preventDefault();
        gotoPage(page);
    }

    const handleMoveLeft = (e) => {
        e.preventDefault();
        gotoPage(currentPage - 1);
    }
    const handleMoveRight = (e) => {
        e.preventDefault();
        gotoPage(currentPage + 1);
    }
    if (!totalRecords || totalPages === 1) return null;
    const pages = fetchPageNumbers();

    return (
        <>
            <BoxContainer>
                {pages?.map((page, index) => {
                    if (page === LEFT_PAGE) return (
                        <Box key={index} onClick={handleMoveLeft}>
                            <span>&laquo;</span>
                            <span>Previous</span>
                        </Box>
                    );

                    if (page === RIGHT_PAGE) return (
                        <Box key={index} onClick={handleMoveRight}>
                            <span>Next</span>
                            <span> &raquo;</span>
                        </Box>
                    );

                    return (
                        <Box key={index} onClick={e => handleClick(page, e)}>
                            {page}
                        </Box>
                    );
                })}
            </BoxContainer>

        </>
    )

}
//Designe
const BoxContainer = styled.div`
    /* list-style-type: none;     */
    display: flex;
    margin: 0;
    padding: 0;   
`;
const Box = styled.button`
    border: none;
    margin: 10px;
    padding: 5px;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.100);
    background: lightcyan;
    border-radius: 4px;
    font-size: 14px;    
    color: black;
`;

export default Pagination;