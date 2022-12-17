import {
    Stack,
    Typography,
    Box,
    TextField,
    Button,
    Snackbar,
    Alert,
    IconButton,
} from '@mui/material';
import { MdSend } from 'react-icons/md';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function Contact() {
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        await emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );

        setOpen(true);

        form.current.from_name.value = '';
        form.current.from_mail.value = '';
        form.current.subject.value = '';
        form.current.message.value = '';
    };

    return (
        <Stack direction={'row'} justifyContent="center" id="contact">
            <Stack
                backgroundColor="white"
                borderRadius={{ xs: '24px', md: '50px' }}
                px={{ xs: '20px', md: '70px', lg: '120px' }}
                py={{ xs: '40px', md: '180px' }}
                direction={{ xs: 'column', md: 'row' }}
                rowGap={8}
            >
                <Stack direction={'column'} flex={1} gap={'18px'}>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing="30px"
                        data-aos="fade-up"
                    >
                        <Box
                            display="inline-block"
                            sx={{
                                minHeight: '2px',
                                minWidth: '60px',
                                backgroundColor: 'blue',
                                verticalAlign: 'center',
                            }}
                        ></Box>

                        <Typography
                            sx={{ fontSize: '24px', color: 'blue', fontWeight: 'bold' }}
                        >
                            Say hello 👋
                        </Typography>
                    </Stack>
                    <Typography
                        sx={{ fontSize: { xs: '40px', md: '72px' }, fontWeight: '700' }}
                        data-aos="fade-up"
                    >
                        Let's Connect.
                    </Typography>
                    <Typography
                        sx={{ color: '#6b6b6b', fontSize: { xs: '18px', md: '24px' } }}
                        data-aos="fade-up"
                    >
                        I'd love to meet up with you to discuss your venture, and
                        potential collaborations.
                    </Typography>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={{ xs: 1, md: 4 }}
                        data-aos="fade-up"
                    >
                        <IconButton
                            onClick={() =>
                                window.open(
                                    'https://www.linkedin.com/in/shubham-bajpai-aa42093a/',
                                    '_blank'
                                )
                            }
                        >
                            <BsLinkedin />
                        </IconButton>
                        <IconButton
                            onClick={() =>
                                window.open(
                                    'mailto:shubhambajpai1991@gmail.com',
                                    '_blank'
                                )
                            }
                        >
                            <CgMail size={34} />
                        </IconButton>
                        <IconButton
                            onClick={() =>
                                window.open(
                                    'https://github.com/shubhambajpai1991',
                                    '_blank'
                                )
                            }
                        >
                            <BsGithub />
                        </IconButton>
                    </Stack>
                </Stack>

                <Box
                    component="form"
                    ref={form}
                    onSubmit={sendEmail}
                    flex={1}
                    width="100%"
                >
                    <Stack gap={'24px'} data-aos="fade-up">
                        <TextField
                            name="from_name"
                            label="Name"
                            fullWidth
                            placeholder="Enter your name"
                            required
                        />
                        <TextField
                            name="from_mail"
                            label="Email"
                            type="email"
                            fullWidth
                            placeholder="Enter your email address"
                            required
                        />
                        <TextField
                            name="subject"
                            label="Subject"
                            fullWidth
                            placeholder="Write a subject"
                            required
                        />
                        <TextField
                            name="message"
                            label="Message"
                            fullWidth
                            multiline
                            rows={4}
                            placeholder="Write a message"
                            required
                        />
                        <Button variant="contained" endIcon={<MdSend />} type="submit">
                            Send
                        </Button>
                    </Stack>
                </Box>
            </Stack>

            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Message sent successfully!
                </Alert>
            </Snackbar>
        </Stack>
    );
}

export default Contact;

// xs, sm, md, lg, xl
