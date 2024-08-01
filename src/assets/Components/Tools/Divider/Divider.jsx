import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function FlexDivider() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        bgcolor: 'background.black',
        color: 'text.secondary',
        '& svg': {
          m: 1,
        },
      }}
    >
      <Divider orientation="horizontal" variant="middle" flexItem />
    </Box>
  );
}
