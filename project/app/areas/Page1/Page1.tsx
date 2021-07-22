import React from 'react';
import { Container } from 'reactstrap';
import { SearchBar, DataTable } from './components';

const Page1 = (): JSX.Element => {

    return (
        <Container>
            <SearchBar />
            <DataTable />
        </Container>
    )
};

export default Page1;