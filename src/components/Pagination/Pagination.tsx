import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export type BasicPaginationPropsType = {
    pageSize:number
    totalUsersCount: number
    currentPage: number
    onPageChanged:(currentPage:number) => void
}

export default function BasicPagination (props: BasicPaginationPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)


    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return (
        <Stack style={{margin: '10px'}} spacing={2}>
            <Pagination
                defaultPage={props.currentPage}
                count={pagesCount}
                // onChange={() => props.onPageChanged(1)}
            />
        </Stack>
    );
}