import { Stack, Typography, Button } from '@mui/material';

function NavBar(props) {
    return (
        <Stack
            direction={'row'}
            alignItems="center"
            justifyContent={'space-between'}
            position="fixed"
            width="100%"
            backgroundColor="white"
            sx={{ zIndex: 1 }}
        >
            <Stack
                direction={'row'}
                alignItems="center"
                justifyContent={'space-between'}
                width="100%"
                mx={{ xs: '20px', md: '70px', lg: '120px' }}
                my={'20px'}
            >
                <Typography
                    fontSize={{ xs: '24px', md: '36px' }}
                    fontWeight="600"
                    textTransform={'uppercase'}
                >
                    Shubham
                </Typography>

                <Stack
                    direction={'row'}
                    spacing={'40px'}
                    sx={{ display: { xs: 'none', md: 'block' } }}
                >
                    <Button
                        sx={{ fontSize: '18px', textTransform: 'capitalize' }}
                        href="#home"
                    >
                        Home
                    </Button>

                    <Button
                        sx={{ fontSize: '18px', textTransform: 'capitalize' }}
                        href="#skills"
                    >
                        Skills
                    </Button>
                    <Button
                        sx={{ fontSize: '18px', textTransform: 'capitalize' }}
                        href="#projects"
                    >
                        Projects
                    </Button>
                </Stack>

                <Stack direction={'row'} spacing="30px">
                    <Button
                        sx={{
                            fontSize: { xs: '14px', md: '18px' },
                            textTransform: 'capitalize',
                            p: { xs: '6px 18px', md: '10px 40px' },
                        }}
                        variant="outlined"
                        href="#contact"
                    >
                        Let's Connect
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default NavBar;
