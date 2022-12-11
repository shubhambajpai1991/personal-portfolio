import { Box, Stack, Typography, Tabs, Tab } from '@mui/material';
import React from 'react';

import ProjectCard from '../ProjectCard';

import GroceryListThumbnail from '../../assets/grocery-list-thumbnail.png';
import FreeStockImagesThumbnail from '../../assets/free-stock-images-thumbnail.png';
import KanbanBoardThumbnail from '../../assets/kanban-board-thumbnail.png';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function Projects() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Stack
            justifyContent={'center'}
            alignItems=" center"
            minHeight={{ xs: 'auto', md: '100vh' }}
            px={{ xs: '20px', md: '70px', lg: '120px' }}
            py={{ xs: '40px', md: '0' }}
            id="projects"
        >
            <Typography sx={{ fontSize: { xs: '36px', md: '50px' }, fontWeight: '700' }}>
                Projects
            </Typography>

            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon label tabs example"
            >
                <Tab
                    label="Free Stock Images"
                    sx={{ fontSize: { xs: '10px', md: '14px' } }}
                />
                <Tab label="Grocery List" sx={{ fontSize: { xs: '10px', md: '14px' } }} />
                <Tab label="Kanban Board" sx={{ fontSize: { xs: '10px', md: '14px' } }} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <ProjectCard
                    thumbnail={FreeStockImagesThumbnail}
                    title="Free Stock Images"
                    subtitle="Search and download free stock photos"
                    link="https://free-stock-images.netlify.app/"
                    details="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    technologies={['React', 'Material UI']}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ProjectCard
                    thumbnail={GroceryListThumbnail}
                    title="Grocery List"
                    subtitle="Create and save your grocery list"
                    link="https://create-grocery-list.netlify.app/"
                    details="I "
                    technologies={['React', 'Material UI']}
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ProjectCard
                    thumbnail={KanbanBoardThumbnail}
                    title="Kanban Board"
                    subtitle="Manage your daily tasks and stay on track"
                    link="https://kanban-board-bootstrap.netlify.app/"
                    details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    technologies={['React', 'Bootstrap', 'React Beautiful DND']}
                />
            </TabPanel>
        </Stack>
    );
}

export default Projects;
