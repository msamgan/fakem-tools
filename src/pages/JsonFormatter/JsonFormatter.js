import React, { useState } from "react"
import MasterLayout from "../../layout/MasterLayout/MasterLayout"
import ReactJson from "react-json-view"
import { updateTitle } from "../../utils/methods"
import DocumentMeta from "react-document-meta"
import { isObject } from "lodash"

const JsonFormatter = () => {
    const [inputValue, setInputValue] = useState()
    const [inputString, setInputString] = useState(false)
    const [inputStringArray, setInputStringArray] = useState([])

    const meta = {
        title: updateTitle("JSON Formatter"),
        description:
            "Format and beautify your JSON. This is a free tool that formats and beautifies your JSON.",
        meta: {
            charset: "utf-8",
            name: {
                keywords: "json, formatter, beautify, fakem, fake"
            }
        }
    }

    return (
        <MasterLayout>
            <DocumentMeta {...meta}>
                <div className={"container mb-3 mt-5 min-height"}>
                    <h1 className={"mt-4"}># JSON Formatter</h1>
                    <p className={"text-muted"}>
                        Format JSON String in a easily readable Object.
                    </p>
                    <div className={"row mt-3"}>
                        <div className={"col-md-12"}>
                            <label htmlFor="jsonValue" className="form-label">
                                <strong>Enter JSON String</strong>
                            </label>
                            <textarea
                                className="form-control"
                                rows={10}
                                id="jsonValue"
                                autoFocus={true}
                                onChange={(event) => {
                                    setInputValue(event.target.value)
                                }}
                                aria-describedby=""
                            />
                            <div id="" className="form-text mt-2">
                                <button
                                    type={"button"}
                                    onClick={async () => {
                                        await setInputString(
                                            JSON.parse(inputValue)
                                        )
                                        await setInputStringArray([
                                            ...inputStringArray,
                                            JSON.parse(inputValue)
                                        ])
                                    }}
                                    className={"btn btn-primary btn-sm"}
                                >
                                    Format
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={"row mt-5"}>
                        {inputString ? (
                            <div className={"col-md-12"}>
                                <h3># Current</h3>
                                <pre>
                                    {inputString ? (
                                        <ReactJson
                                            src={inputString}
                                            name={false}
                                            collapsed={false}
                                            enableClipboard={(copy) => {
                                                if (isObject(copy.src)) {
                                                    return navigator.clipboard.writeText(
                                                        JSON.stringify(copy.src)
                                                    )
                                                }

                                                return navigator.clipboard.writeText(
                                                    copy.src
                                                )
                                            }}
                                            displayDataTypes={true}
                                        />
                                    ) : null}
                                </pre>
                            </div>
                        ) : null}

                        {/* {!isEmpty(inputStringArray) ? (
                            <div className={"col-md-6"}>
                                <h3># History</h3>
                                <pre>
                                    {!isEmpty(inputStringArray)
                                        ? inputStringArray.map((s, i) => (
                                              <ReactJson
                                                  key={i}
                                                  src={s}
                                                  name={false}
                                                  collapsed={true}
                                              />
                                          ))
                                        : null}
                                </pre>
                            </div>
                        ) : null} */}
                    </div>
                </div>
            </DocumentMeta>
        </MasterLayout>
    )
}

export default JsonFormatter
