import {Media} from "./Media";
import Box from '@mui/material/Box';

export default function YouTube() {
    return (
        <>
            <Box sx={{ overflow: 'hidden' }}>
            <h1> Youtube Card Sample</h1>
                <Media loading />
                <Media />
            </Box>
        </>

    );
}
