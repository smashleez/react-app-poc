import React from 'react';
import { Container } from 'reactstrap';
import { CardGrid, SimpleForm  } from './components';

const Page1 = (): JSX.Element => {

    return (
        <Container>
            <CardGrid/>
            <SimpleForm/>
        </Container>
    )
};

export default Page1;