import React from 'react';
import MasterLayout from "../../layout/MasterLayout/MasterLayout";
import users from '../../assets/users.json'
import user from '../../assets/user.json'
import ReactJson from "react-json-view";

const TestApi = () => (
    <MasterLayout>
        <div className={'container mb-3 mt-5 min-height'}>
            <h1 className={'mt-4'}># Test Api's</h1>
            <p className={'text-muted'}>Api Endpoints to test your setup.</p>
            <div className={'row mt-3'}>
                <div className={'col-md-12'}>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <td><strong>Request</strong></td>
                            <td><strong>Response</strong></td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="">
                                <p>List of user with all details</p>
                                <div><span
                                    className="alert alert-success p-2">GET</span> {process.env.REACT_APP_API + 'users?count=2'}
                                </div>
                                <p className="text-muted mt-3">
                                    Default Count is 10</p>
                            </td>
                            <td>
                                <ReactJson src={users} name={false}
                                           collapsed={1}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="">
                                <p>Individual User's Details</p>
                                <div><span
                                    className="alert alert-success p-2">GET</span> {process.env.REACT_APP_API + 'user/{username}'}
                                </div>
                            </td>
                            <td>
                                <ReactJson src={user} name={false}
                                           collapsed={1}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </MasterLayout>
);

TestApi.propTypes = {};

TestApi.defaultProps = {};

export default TestApi;
