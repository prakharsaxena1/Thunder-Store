import React, { FC } from 'react'
import { Box, Stack, Paper } from '@mui/material';
import { BrandText, CopyrightText } from '../../Components/BrandText';

type IAccounts = {
    children: JSX.Element | JSX.Element[],
}

const AccountsBox: FC<IAccounts> = ({
    children
}) => {
    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <BrandText
                styles={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    textAlign: 'center',
                }}
                size={48}
            />
            <Stack
                component={Paper}
                direction="column"
                sx={{ p: 4, minWidth: '320px', maxWidth: '500px' }}
                gap="2"
                elevation={12}
            >
                {children}
            </Stack>
            <CopyrightText
                styles={{
                    position: 'absolute',
                    bottom: 15,
                    width: '100%',
                    textAlign: 'center',
                }}
            />
        </Box>
    )
}

export default AccountsBox