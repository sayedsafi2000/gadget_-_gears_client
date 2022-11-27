import React from 'react';
import useTitle from '../../Hooks/useTitle';

const ReportedItem = () => {
    useTitle("Report")
    return (
        <div>
            <h2>All reported Items</h2>
        </div>
    );
};

export default ReportedItem;