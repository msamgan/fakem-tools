import React, { useState } from "react"
import MasterLayout from "../../layout/MasterLayout/MasterLayout"
import { JsonToExcel } from "react-json-to-excel"

const JsonToExcelPage = () => {
    const [data, setData] = useState([])

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
                                setData(JSON.parse(e.target.value))
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
                        <JsonToExcel
                            title="Download as Excel"
                            data={data}
                            fileName="sample-file"
                            btnClassName="custom-classname"
                        />
                    </div>
                </div>
            </div>
        </MasterLayout>
    )
}

export default JsonToExcelPage
