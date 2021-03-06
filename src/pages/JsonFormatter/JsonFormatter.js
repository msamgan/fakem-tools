import React, { useState } from "react"
import MasterLayout from "../../layout/MasterLayout/MasterLayout"
import ReactJson from "react-json-view"
import { isEmpty } from "lodash"

const JsonFormatter = () => {
    const [inputValue, setInputValue] = useState()
    const [inputString, setInputString] = useState(false)
    const [inputStringArray, setInputStringArray] = useState([])

    return (
        <MasterLayout>
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
                                    await setInputString(JSON.parse(inputValue))
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
                        <div className={"col-md-6"}>
                            <h3># Current</h3>
                            <pre>
                                {inputString ? (
                                    <ReactJson
                                        src={inputString}
                                        name={false}
                                        collapsed={1}
                                    />
                                ) : null}
                            </pre>
                        </div>
                    ) : null}

                    {!isEmpty(inputStringArray) ? (
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
                    ) : null}
                </div>
            </div>
        </MasterLayout>
    )
}

export default JsonFormatter
