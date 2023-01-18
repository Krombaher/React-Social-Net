import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export type PaginationControlledPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
}

export default function PaginationControlled(props: PaginationControlledPropsType) {
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        props.onPageChanged(value)
    };

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    return (
        <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination
                count={pagesCount}
                page={page}
                onChange={handleChange}
            />
        </Stack>
    );
}