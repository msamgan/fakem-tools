import React from 'react';
import MasterLayout from "../../layout/MasterLayout/MasterLayout";
import Searchable from 'react-searchable-dropdown';
import {useHistory} from 'react-router-dom'


const HomePage = () => {
    let history = useHistory();

    return <MasterLayout>
        <h1 className={'mt-5'}>Fakem Tools</h1>
        <p>
            Tools created by the developers for the developers, and yes its all
            open source...
        </p>

        <Searchable
            value=""
            placeholder="Search for the tool"
            notFoundText="No result found"
            options={[{
                value: '/barcode-generator',
                label: 'Barcode Generator'
            }, {
                value: '/json-formatter',
                label: 'JSON Formatter'
            }]}
            onSelect={value => {
                return history.push(value)
            }}
            listMaxHeight={200}
        />
    </MasterLayout>
}
HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
