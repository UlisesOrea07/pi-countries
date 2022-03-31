import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
    let totalPages = Math.ceil(totalRecords / pageLimit);
    const [currentPage, setcurrentPage] = useState(1);

    const fetchPageNumbers = () => {
        const totalBlocks = 2;

        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, currentPage);
            const endPage = Math.min(totalPages - 1, currentPage);

            let pages = range(startPage, endPage);

            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1
            const spillOffset = pages.length + 1;

            switch (true) {
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }
                case (!hasLeftSpill && hasLeftSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, RIGHT_PAGE];
                    break;
                }

                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                    break;
                }
            }
            return [1, ...pages, totalPages];
        }
        return range(1, totalPages);//[1,2]
    }
    useEffect(() => {
        gotoPage(1);
    }, [countries])

    const gotoPage = (page) => {
        const currentPage = Math.max(0, Math.min(page, totalPages));
        const paginationData = {
            currentPage,//1
            totalPages: totalPages,//2
            pageLimit: pageLimit, //3
            totalRecords: totalRecords //5
        };
        setcurrentPage(currentPage) //1
        onPageChanged(paginationData);
        // window.scrollTo(0, 0);
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
    //      !5=false                2
    if (!totalRecords || totalPages === 1) return null;
    // const { currentPage } = state; //1
    const pages = fetchPageNumbers();//[1,2]

    return (
        <>
            <UL>
                {pages?.map((page, index) => {
                    if (page === LEFT_PAGE) return (
                        <LI key={index}>
                            <A href='!#' onClick={handleMoveLeft}>
                                <span>&laquo;</span>
                                <span>Previous</span>
                            </A>
                        </LI>
                    );

                    if (page === RIGHT_PAGE) return (
                        <LI key={index}>
                            <A href='!#' onClick={handleMoveRight}>
                                <span>Next</span>
                                <span> &raquo;</span>
                            </A>
                        </LI>
                    );

                    return (
                        <LI key={index} color={currentPage === page ? 'active' : ''}>
                            <A href='!#' onClick={e => handleClick(page, e)}>{page}</A>
                        </LI>
                    );
                })}
            </UL>

        </>
    )

}
//Designe
const UL = styled.ul`
    list-style-type: none;    
    margin: 0;
    padding: 0;   
`;
const LI = styled.li`
    display: inline;
    margin: 10px;
    padding: 5px;
    /* border: solid 1px; */
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.100);
`;
const A = styled.a`
    outline: none;
    text-decoration: none;
    padding: 2px 1px 0;
    font-size: 14px;    
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export default Pagination;