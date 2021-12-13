import React from 'react';
import Nav from "../../components/Nav/Nav";
import Notifications from 'react-notify-toast';


const MasterLayout = ({children}) => (
    <div>

        <div className={'container'}>
            <header>
                <Nav/>
            </header>
            <Notifications/>

            <div style={{
                height: '85vh'
            }}>
                {children}
            </div>
        </div>

        <footer
            className="text-center text-lg-start bg-light text-muted footer-bg">
            <div className="text-center p-4 text-white">
                © {new Date().getFullYear()} Copyright <a
                className="text-reset fw-bold ml-2"
                href="https://fakem.info/">fakem.info</a>

                <p className={'mt-2'}><a
                    className={'text-reset fw-bold ml-2'}
                    href={'https://github/msamgan'}>msamgan</a> creation</p>
            </div>
        </footer>
    </div>
);

MasterLayout.propTypes = {};

MasterLayout.defaultProps = {};

export default MasterLayout;
