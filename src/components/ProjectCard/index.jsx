import { Chip, Stack, Box, Grid, Typography } from '@mui/material';

function ProjectCard(props) {
    return (
        <Grid container gap={2} width="70vw">
            <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: { xs: '8px', md: '20px' },
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: '500ms',
                        border: '1px solid #ddd',

                        ':hover': {
                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 40px',
                        },
                    }}
                    onClick={() => {
                        window.open(props.link, '_blank');
                    }}
                    data-aos="fade-right"
                >
                    <Box sx={{ height: { xs: '180px', md: '360px' } }}>
                        <img
                            src={props.thumbnail}
                            alt={props.title}
                            width="100%"
                            height="100%"
                        />
                    </Box>
                    <Stack sx={{ padding: { xs: '20px', md: '40px 50px' } }}>
                        <Typography
                            sx={{
                                fontSize: { xs: '16px', md: '32px' },
                                fontWeight: 600,
                            }}
                        >
                            {props.title}
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '12px', md: '18px' } }}>
                            {props.subtitle}
                        </Typography>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Stack data-aos="fade-left">
                    <Stack direction="column" spacing={2}>
                        {props.details.map((item, index) => (
                            <Typography key={index} sx={{ textAlign: 'justify' }}>
                                {item}{' '}
                            </Typography>
                        ))}
                    </Stack>

                    <Box sx={{ marginTop: { xs: '20px', md: '40px' } }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: '600' }}>
                            Technologies
                        </Typography>
                        <Stack
                            direction="row"
                            gap="20px"
                            sx={{ marginTop: '20px' }}
                            flexWrap="wrap"
                        >
                            {props.technologies.map((item) => {
                                return (
                                    <Chip
                                        key={item}
                                        label={item}
                                        color="primary"
                                        sx={{
                                            fontSize: { xs: '14px', md: '20px' },
                                            borderRadius: '4px',
                                        }}
                                    />
                                );
                            })}
                        </Stack>
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default ProjectCard;
