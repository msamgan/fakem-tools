import React, {useEffect, useState} from 'react';
import MasterLayout from "../../layout/MasterLayout/MasterLayout";
import {isEmpty} from "lodash";


const UserGenerator = () => {

    const [user, setUser] = useState({})
    const [generateNewDisable, setGenerateNewDisable] = useState(false)

    /**
     *
     * @returns {Promise<void>}
     */
    const getRandomUser = async () => {
        await fetch(process.env.REACT_APP_API + 'user')
            .then(response => response.json())
            .then(data => setUser(data));
    }


    useEffect(async () => {
        await getRandomUser()
    }, [])

    return <MasterLayout>
        <h1 className={'mt-4'}># User Generator</h1>
        <p className={'text-muted'}>Detailed information of user for
            registrations and other testing purpose.</p>
        <div className={'row mt-3'}>
            <div className={'col-md-2'}>
                <button className={'btn btn-primary'}
                        disabled={generateNewDisable} onClick={async () => {
                    setGenerateNewDisable(true)
                    await getRandomUser()
                    setGenerateNewDisable(false)
                }}>Generate New
                </button>
            </div>
            <div className={'col-md-10'}>
                <a className={'btn btn-danger float-end'}>Jump to Inbox</a>
            </div>
        </div>
        <div className={'row mt-4'}>
            <div className={'col-md-12'}>
                <table className="table table-bordered">
                    <tbody>
                    {!isEmpty(user) ?
                        Object.keys(user).map((key, i) =>
                            <tr>
                                <td className="text-left w-25">
                                    <strong>{key.replace('_', ' ')}</strong>
                                </td>
                                <td data-key="Gender" title="click to copy"
                                    className="cursor-pointer copy text-left">
                                    {user[key]}
                                </td>
                            </tr>
                        )
                        : <p>Getting a freshly baked user for you....</p>
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </MasterLayout>
};

export default UserGenerator;
