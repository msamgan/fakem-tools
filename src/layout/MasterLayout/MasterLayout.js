import React from 'react';
import Nav from "../../components/Nav/Nav";


const MasterLayout = ({children}) => (
    <div>

        <div className={'container'}>
            <header>
                <Nav/>
            </header>

            <div style={{
                height: '81vh'
            }}>
                {children}
            </div>
        </div>

        <footer className="text-center text-lg-start bg-light text-muted"
                style={{
                    backgroundColor: '#252d47 !important'
                }}>
            <div className="text-center p-4 text-white"
                /*style="background-color: rgba(0, 0, 0, 0.05);"*/>
                © {new Date().getFullYear()} Copyright <a
                className="text-reset fw-bold ml-2"
                href="https://fakem.info/">fakem.info</a>
            </div>
        </footer>
    </div>
);

MasterLayout.propTypes = {};

MasterLayout.defaultProps = {};

export default MasterLayout;
