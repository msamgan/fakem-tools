import React, { useState } from "react"
import MasterLayout from "../../layout/MasterLayout/MasterLayout"
import { JsonToExcel } from "react-json-to-excel"

const JsonToExcelPage = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const isValidJson = (str) => {
        try {
            JSON.parse(str)
        } catch (e) {
            return false
        }

        return true
    }

    return (
        <MasterLayout>
            <div className={"container mb-3 mt-5 min-height"}>
                <h1 className={"mt-4"}># Json To Excel</h1>
                <p className={"text-muted"}>
                    This is a simple tool to convert JSON Array to Excel.
                </p>
                <div className={"row mt-3"}>
                    <div className={"col-md-12"}>
                        <label htmlFor="inputText" className="form-label">
                            <strong>Input Json</strong>
                        </label>
                        <textarea
                            className={"form-control"}
                            id={"inputText"}
                            onChange={(e) => {
                                if (
                                    e.target.value.length > 0 &&
                                    isValidJson(e.target.value)
                                ) {
                                    setError(null)
                                    setData(JSON.parse(e.target.value))
                                } else {
                                    e.target.value.length > 0
                                        ? setError(
                                              "The input is not valid JSON"
                                          )
                                        : setError(null)
                                    setData([])
                                }
                            }}
                            rows={10}
                            placeholder={
                                "[{ name: 'name', age: 20, gender: 'M' }]"
                            }
                        />
                    </div>
                </div>
                <div className={"row mt-3"}>
                    <div className={"col-md-12"}>
                        {data.length > 0 && (
                            <JsonToExcel
                                title="Download as Excel"
                                data={data}
                                fileName="sample-file"
                                btnClassName="custom-classname"
                            />
                        )}
                        <p className="text-danger">{error}</p>
                    </div>
                </div>
            </div>
        </MasterLayout>
    )
}

export default JsonToExcelPage
