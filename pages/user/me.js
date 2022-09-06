import Layout from '../../components/Layout';
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Copyright from '../../src/Copyright';
import ResponsiveAppBar from '../../src/ResponsiveAppBar'
import Input from '../../src/imputbox'
import Icon from '../../src/icon'
import Question from '../../src/Question';
import BirthdayPicker from '../../src/Birthpicker';
import Button from '../../components/Button';
import Checkboxes from '../../src/check';


export default function Home({ }) {
  return (
    <Container>
    <ResponsiveAppBar />
    <Box align='center'>
    <Layout home >  
          <Icon />
          <Input />
        </Layout>
        <BirthdayPicker/>
        <Question />
        <Checkboxes />
        <Button></Button>
        <Copyright />
      </Box>
      </Container>
  );
}