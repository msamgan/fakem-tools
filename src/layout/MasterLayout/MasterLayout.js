import React from 'react';


const MasterLayout = ({children}) => (
    <div className={'container'}>
        {children}
    </div>
);

MasterLayout.propTypes = {};

MasterLayout.defaultProps = {};

export default MasterLayout;
