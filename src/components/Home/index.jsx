import { Box, Typography, Link } from '@mui/material';
import { Stack } from '@mui/material';
import { BsArrowRight } from 'react-icons/bs';

import HeroImage from '../../assets/pic.svg';

function Home(props) {
    return (
        <Stack
            id="home"
            minHeight={{ xs: 'auto', md: '100vh' }}
            px={{ xs: '20px', md: '70px', lg: '120px' }}
            py={{ xs: '40px', md: '0' }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginTop={{ xs: '120px', md: 0 }}
        >
            <Stack
                direction={'column'}
                alignItems="start"
                justifyContent={'center'}
                spacing="10px"
                width={{ xs: '100%', md: '40%' }}
            >
                <Box sx={{ border: '1px solid black', p: '8px' }}>
                    <Typography fontWeight={'700'}>Welcome to Portfolio</Typography>
                </Box>
                <Typography sx={{ fontSize: '45px', fontWeight: '500' }}>
                    Hi! My name is Shubham
                </Typography>
                <Typography>
                    I've been learning web development on my own. I'm excited to dive into
                    the field of Front End Engineering and continue learning and growing
                    as a developer. Love building interactive websites and exploring new
                    technologies.
                </Typography>
                <Link href="#contact">
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={{
                            cursor: 'pointer',
                            gap: '8px',
                            transition: '500ms',
                            ':hover': { gap: '32px' },
                        }}
                    >
                        <Typography>Let's Connect</Typography>
                        <BsArrowRight />
                    </Stack>
                </Link>
            </Stack>

            <Box
                component="img"
                src={HeroImage}
                alt="hero"
                sx={{
                    width: { xs: '400px', lg: '700px' },
                    display: { xs: 'none', md: 'block' },
                }}
            />
        </Stack>
    );
}

export default Home;
