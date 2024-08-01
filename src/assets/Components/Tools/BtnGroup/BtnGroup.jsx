import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';

export default function BtnGroup() {
  return (
    <ButtonGroup variant="outlined" aria-label="Basic button group">
     <Link to="/singIn"> <Button>Sing In</Button></Link>
    </ButtonGroup>
  );
}