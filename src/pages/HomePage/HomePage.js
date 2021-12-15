import React, {useState} from 'react';
import MasterLayout from "../../layout/MasterLayout/MasterLayout";
import Searchable from 'react-searchable-dropdown';
import {Link, useHistory} from 'react-router-dom'
import menu from '../../components/Nav/menu.json'


const HomePage = () => {
    let history = useHistory();

    return <MasterLayout>
        <div className={'container'}>
            <div className={'row mt-5'}>
                <div className={'col-md-4'}>
                    <h5>
                        Tools created by the developers for the developers, and
                        yes
                        its all
                        open source...
                    </h5>
                </div>
                <div className={'col-md-8'}>
                    <p>
                        Fakem is a open source fake user generator which is the
                        most
                        easy to
                        use user generator
                        available out there.
                        <br/>
                        It also provide you with ready to use temporary email
                        inbox,
                        available at just one click.
                        Generate names, addresses, about content etc, for
                        absolute
                        free of
                        any charge.
                    </p>

                    <p>
                        Providing a number a tools for developers required in
                        day to
                        day
                        development.
                    </p>
                </div>
            </div>
        </div>

        <div className={'bg-grey min-height'}>
            <div className={'container mb-3 mt-5'}>
                <h4 className={'pt-5'}>Search for required tool</h4>
                <Searchable
                    value=""
                    placeholder="Search for the tool"
                    notFoundText="No result found"
                    options={menu}
                    onSelect={value => {
                        return history.push(value)
                    }}
                    listMaxHeight={200}
                />

                <div className={'row'}>
                    {
                        menu.map(item =>
                            <div className={'col-md-3 mt-4'}>
                                <Link to={item.value}>
                                    <div className="card copy">
                                        <div
                                            className="card-body text-center">
                                            <h5 className="card-title">{item.label}</h5>
                                            <p className="card-text">{item.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>)
                    }
                </div>

            </div>
        </div>

    </MasterLayout>
}
HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
