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

        <p>
            Fakem is a open source fake user generator which is the most easy to
            use user generator
            available out there.
            <br/>
            It also provide you with ready to use temporary email inbox,
            available at just one click.
            Generate names, addresses, about content etc, for absolute free of
            any charge.
        </p>

        <p>
            Providing a number a tools for developers required in day to day
            development.
        </p>
        <h4 className={'mb-3'}>Search for required tool</h4>
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
            }, {
                value: '/user',
                label: 'Fake User Generator'
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
