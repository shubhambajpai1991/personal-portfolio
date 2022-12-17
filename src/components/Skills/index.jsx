import { Stack, Typography, CircularProgress, Box } from '@mui/material';
import React from 'react';

function CircularProgressWithLabel(props) {
    return (
        <Stack alignItems="center" spacing={2}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                    variant="determinate"
                    sx={{
                        color: (theme) => theme.palette.grey[200],
                        height: { xs: '100px !important', md: '140px !important' },
                        width: { xs: '100px !important', md: '140px !important' },
                    }}
                    thickness={4}
                    value={100}
                />
                <CircularProgress
                    variant="determinate"
                    thickness={6}
                    sx={{
                        position: 'absolute',
                        left: 0,
                        height: { xs: '100px !important', md: '140px !important' },
                        width: { xs: '100px !important', md: '140px !important' },
                    }}
                    value={props.value}
                    color={props.color || 'primary'}
                />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                        sx={{ fontSize: { xs: '24px', md: '40px' } }}
                    >
                        {`${Math.round(props.value)}%`}
                    </Typography>
                </Box>
            </Box>
            <Typography sx={{ fontSize: { xs: '16px', md: '24px' } }}>
                {props.label}
            </Typography>
        </Stack>
    );
}

function Skills() {
    return (
        <Stack
            alignItems={'center'}
            justifyContent="center"
            id="skills"
            minHeight={{ xs: 'auto', md: '100vh' }}
            px={{ xs: '20px', md: '70px', lg: '120px' }}
            py={{ xs: '40px', md: '0' }}
        >
            <Typography sx={{ fontSize: { xs: '36px', md: '50px' }, fontWeight: '700' }}>
                Skills
            </Typography>
            {/* <Typography></Typography> */}

            <Stack
                direction={'row'}
                width="100%"
                justifyContent="space-around"
                alignItems="center"
                mt={{ xs: 4, md: 12 }}
                gap={4}
                flexWrap="wrap"
            >
                <CircularProgressWithLabel value={60} label="React" color="info" />
                <CircularProgressWithLabel value={70} label="HTML" color="secondary" />
                <CircularProgressWithLabel value={50} label="CSS" color="error" />
                <CircularProgressWithLabel
                    value={70}
                    label="JavaScript"
                    color="warning"
                />
            </Stack>
        </Stack>
    );
}

export default Skills;
