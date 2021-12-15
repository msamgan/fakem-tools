import React from 'react';


const Footer = () => (
    <footer
        className="text-center text-lg-start bg-light text-muted footer-bg">
        <div className="text-center p-4 text-white">
            © {new Date().getFullYear()} Copyright <a
            className="text-reset fw-bold ml-2"
            href="https://fakem.info/">fakem.info</a>

            <p className={'mt-2'}>From the house of <a
                target="_blank"
                className={'text-reset fw-bold ml-2'}
                href={'https://github/msamgan'}>msamgan</a> and <a
                target="_blank"
                className={'text-reset fw-bold ml-2'}
                href={'https://ibrahimabdulla.in/'}>ibrahimabdulla</a>
            </p>
        </div>
    </footer>
);

export default Footer;
