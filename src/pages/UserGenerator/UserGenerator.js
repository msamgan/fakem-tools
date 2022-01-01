import React, { useEffect, useState } from "react"
import MasterLayout from "../../layout/MasterLayout/MasterLayout"
import { isEmpty } from "lodash"
import { notify } from "react-notify-toast"

const UserGenerator = () => {
    const [user, setUser] = useState({})
    const [generateNewDisable, setGenerateNewDisable] = useState(false)

    /**
     *
     * @returns {Promise<void>}
     */
    const getRandomUser = async () => {
        await fetch(process.env.REACT_APP_API + "user")
            .then((response) => response.json())
            .then((data) => setUser(data))
    }

    useEffect(() => {
        const fetchData = async () => {
            await getRandomUser()
        }

        fetchData().then(() => {})
    }, [])

    return (
        <MasterLayout>
            <div className={"container mb-3 mt-5 min-height"}>
                <h1 className={"mt-4"}># User Generator</h1>
                <p className={"text-muted"}>
                    Detailed information of user for registrations and other
                    testing purpose.
                </p>
                <div className={"row mt-3"}>
                    <div className={"col-md-2"}>
                        <button
                            className={"btn btn-primary"}
                            disabled={generateNewDisable}
                            onClick={async () => {
                                setGenerateNewDisable(true)
                                await getRandomUser()
                                setGenerateNewDisable(false)
                            }}
                        >
                            Generate New
                        </button>
                    </div>
                    <div className={"col-md-10"}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={
                                "https://www.dispostable.com/inbox/" +
                                user["username"] +
                                "/"
                            }
                            className={"btn btn-danger float-end"}
                        >
                            Jump to Inbox
                        </a>
                    </div>
                </div>
                <div className={"row mt-4"}>
                    <div className={"col-md-12"}>
                        {!isEmpty(user) ? (
                            <table className="table table-bordered">
                                <tbody>
                                    {Object.keys(user).map((key, i) => (
                                        <tr key={i}>
                                            <td className="text-left w-25">
                                                <strong>
                                                    {key.replace("_", " ")}
                                                </strong>
                                            </td>
                                            <td
                                                data-key={key.replace("_", " ")}
                                                title="click to copy"
                                                onClick={(event) => {
                                                    window.navigator.clipboard.writeText(
                                                        event.target.innerHTML.trim()
                                                    )
                                                    notify.show(
                                                        event.target.getAttribute(
                                                            "data-key"
                                                        ) + " copied..",
                                                        "success",
                                                        700
                                                    )
                                                }}
                                                className="cursor-pointer copy text-left cursor-pointer copy"
                                            >
                                                {user[key]}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>Getting a freshly baked user for you....</p>
                        )}
                    </div>
                </div>
            </div>
        </MasterLayout>
    )
}

export default UserGenerator
