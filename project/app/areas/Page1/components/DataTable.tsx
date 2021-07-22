import React from 'react';
 import ClaimStatusLabel from '@rcm/react-common';

const DataTable = (): JSX.Element => {

    return (
        <>
            <p className="badge badge-success">How the label should look</p>
            <ClaimStatusLabel claimStatus="G" displayText="Actual" />
        </>
    );
};

export default DataTable;