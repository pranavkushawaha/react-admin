import {
    Box,
    useTheme,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import Header from "../../component/Header";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { tokens } from "../../theme";
import { useMemo } from "react";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const ques = useMemo(
        () => [
            {
                id: 1,
                summary: "An Important Question",
            },
            {
                id: 2,
                summary: "Another Important Question",
            },
            {
                id: 3,
                summary: "Other Important Question",
            },
            {
                id: 4,
                summary: "Good Question",
            },
            {
                id: 5,
                summary: "A Question about some feature",
            },
        ],
        []
    );
    return (
        <Box
            m='20px'
            sx={{
                "& .MuiAccordion-root": {
                    backgroundColor: colors.primary[400],
                },
            }}>
            <Header title='FAQ' subtitle='Frequently Asked Questions' />
            <Box mt="20px">
                {ques.map((question) => (
                    <Accordion key={question.id}>
                        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                            <Typography
                                color={colors.greenAccent[500]}
                                variant='h5'>
                                {question.summary}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum is placeholder text commonly used in
                                the graphic, print, and publishing industries
                                for previewing layouts and visual mockups.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    );
};

export default FAQ;
