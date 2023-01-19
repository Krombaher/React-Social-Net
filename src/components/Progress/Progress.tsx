import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import s from '../MainContent/UsersBlock/Users.module.scss'

export default function CircularIndeterminate() {
    return (
        <div className={s.progress}>
            <Box sx={{ display: 'flex'}}>
                <CircularProgress />
            </Box>
        </div>

    );
}