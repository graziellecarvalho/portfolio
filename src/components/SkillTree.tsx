import { Box, Typography } from '@mui/material';
import React from 'react';

export default function SkillTree() {
    const junionExp = ["NodeJS", "VueJS", "Cypress", "Redux", "Creating UX"];
    const advancedExp = ["HTML5", "CSS", "JavaScript", "jQuery", "React JS", "TypeScript", "PHP", "WordPress as CMS", "Sanity as CMS", "Elementor", "Figma", "Implementing Acessibility"];
    return (
        <Box style={{ display: "flex"}}>
            <Box>
                <Typography variant='h5'>Had few experiences with</Typography>
                {junionExp.map((item) => (
                    <Typography>{item}</Typography>
                ))}
            </Box>

            <Box>
                <Typography variant='h5'>Years of experiences with</Typography>
                {advancedExp.map((item) => (
                    <Typography>{item}</Typography>
                ))}
            </Box>
        </Box>
    )
}