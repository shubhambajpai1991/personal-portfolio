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
                    details={[
                        'I developed a web application that allows users to search for and download free stock images. The application was built using React, MUI and Pixabay API.',
                        'To ensure a seamless user experience, I implemented responsive design that can be accessible on various devices.',
                        'One of the feature of the application is the ability to customize the search filter based on a specific category.',
                    ]}
                    technologies={['React', 'Material UI']}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ProjectCard
                    thumbnail={GroceryListThumbnail}
                    title="Grocery List"
                    subtitle="Create and save your grocery list"
                    link="https://create-grocery-list.netlify.app/"
                    details={[
                        'Grocery List Manager is a simple, easy-to-use application that allows users to create and manage their grocery lists.',
                        ' With Grocery List web app, users can add items to their list, and also can generate and save the list in pdf file, that could be shared with others.',
                        "The app also persist data on user's browser local storage so user can check their created list at any time ",
                    ]}
                    technologies={['React', 'Material UI']}
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ProjectCard
                    thumbnail={KanbanBoardThumbnail}
                    title="Kanban Board"
                    subtitle="Manage your daily tasks and stay on track"
                    link="https://kanban-board-bootstrap.netlify.app/"
                    details={[
                        `This project is utilizing a kanban board to manage and track the progress of our work. The kanban board is divided into columns that represent the different stages of our workflow, including "To Do," "In Progress," and "Done." Each task is represented by a card that is moved from one column to the next as it progresses through the workflow.`,
                        'User can also search their tasks and filter the list based on their priority.',
                        'Overall, the kanban board has been a valuable tool in managing our software project and helping us stay organized and on track.',
                    ]}
                    technologies={['React', 'Bootstrap', 'React Beautiful DND']}
                />
            </TabPanel>
        </Stack>
    );
}

export default Projects;
