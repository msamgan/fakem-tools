import React, { useState } from "react"
import DocumentMeta from "react-document-meta"
import MasterLayout from "../../layout/MasterLayout/MasterLayout"
import { updateTitle } from "../../utils/methods"

const JsonUrl = () => {
    const [input, setInput] = useState("")
    const [error, setError] = useState("")
    const [disableSave, setDisableSave] = useState(true)

    /**
     *
     * @returns {Promise<void>}
     */
    const postJson = async () => {
        await fetch(process.env.REACT_APP_API + "json-url", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(input)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
    }

    const meta = {
        title: updateTitle("Json url"),
        description:
            "Convert JSON to URL. This is a free tool that converts JSON to URL.",
        meta: {
            charset: "utf-8",
            name: {
                keywords: "json, url, convert, fakem, fake"
            }
        }
    }
    return (
        <MasterLayout>
            <DocumentMeta {...meta}>
                <div className={"container mb-3 mt-5 min-height"}>
                    <h1 className={"mt-4"}># Json url</h1>
                    <p className={"text-muted"}>
                        Convert JSON to URL. you can use this tool to convert
                        you json to url.
                    </p>
                    <div className={"row mt-3"}>
                        <div className={"col-md-12"}>
                            <label htmlFor="jsonValue" className="form-label">
                                <strong>Enter JSON</strong>
                            </label>
                            <textarea
                                className="form-control"
                                rows={10}
                                id="jsonValue"
                                autoFocus={true}
                                onFocus={() => {
                                    setDisableSave(true)
                                }}
                                onChange={(event) => {
                                    setInput(event.target.value)
                                }}
                                aria-describedby=""
                                value={input}
                            ></textarea>
                        </div>
                    </div>
                    <div className={"row mt-3"}>
                        <div className={"col-md-12"}>
                            <button
                                className="btn btn-info"
                                style={{
                                    marginRight: "10px"
                                }}
                                onClick={() => {
                                    setError("")
                                    setDisableSave(true)
                                    try {
                                        let parseJSON = JSON.parse(input)
                                        let JSONInPrettyFormat = JSON.stringify(
                                            parseJSON,
                                            undefined,
                                            4
                                        )
                                        setInput(JSONInPrettyFormat)
                                        setDisableSave(false)
                                    } catch (error) {
                                        setError(error.message)
                                    }
                                }}
                            >
                                Verify
                            </button>
                            <button
                                className="btn btn-primary"
                                disabled={disableSave}
                                onClick={async () => {
                                    await postJson()
                                }}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                    <div className={"row mt-3"}>
                        {error !== "" && (
                            <div
                                className={"col-md-12 badge badge-danger"}
                                style={{
                                    background: "#ec1f1f",
                                    color: "white",
                                    padding: "10px",
                                    fontSize: "16px"
                                }}
                            >
                                <span className="error">{error}</span>
                            </div>
                        )}
                    </div>
                </div>
            </DocumentMeta>
        </MasterLayout>
    )
}

export default JsonUrl
