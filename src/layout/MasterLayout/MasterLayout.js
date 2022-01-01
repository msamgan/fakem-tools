import React from "react"
import Nav from "../../components/Nav/Nav"
import Notifications from "react-notify-toast"
import Footer from "../../components/Footer/Footer"

const MasterLayout = ({ children }) => (
    <div>
        <div className={""}>
            <header className={"header"}>
                <Nav />
            </header>
            <Notifications />

            <div className={""} style={{}}>
                {children}
            </div>
        </div>

        <Footer />
    </div>
)

MasterLayout.propTypes = {}

MasterLayout.defaultProps = {}

export default MasterLayout
