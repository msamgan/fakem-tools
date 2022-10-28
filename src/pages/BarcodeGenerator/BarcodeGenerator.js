import React, { useState } from "react"
import MasterLayout from "../../layout/MasterLayout/MasterLayout"
import { updateTitle } from "../../utils/methods"
import DocumentMeta from "react-document-meta"

const Barcode = require("react-barcode")
const crypto = require("crypto")

const BarcodeGenerator = () => {
    const [inputValue, setInputValue] = useState()

    const meta = {
        title: updateTitle("Barcode Generator"),
        description:
            "Generate barcode for your products, this is a free tool that generates barcode. Create barcode from any text or generate a random one",
        meta: {
            charset: "utf-8",
            name: {
                keywords: "barcode, generator, random, data, fakem, fake"
            }
        }
    }

    return (
        <MasterLayout>
            <DocumentMeta {...meta}>
                <div className={"container mb-3 mt-5 min-height"}>
                    <h1 className={"mt-4"}># Barcode Generator</h1>
                    <p className={"text-muted"}>
                        Create barcode from any text or generate a random one.
                    </p>
                    <div className={"row mt-3"}>
                        <div className="mb-3">
                            <label
                                htmlFor="barcodeValue"
                                className="form-label"
                            >
                                <strong>Enter Value</strong>
                            </label>
                            <input
                                type="text"
                                className="form-control w-50"
                                id="barcodeValue"
                                value={inputValue}
                                autoFocus={true}
                                onChange={(event) => {
                                    setInputValue(event.target.value)
                                }}
                                aria-describedby=""
                            />
                            <div id="" className="form-text mt-2">
                                <button
                                    type={"button"}
                                    onClick={() => {
                                        setInputValue(
                                            crypto
                                                .randomBytes(10)
                                                .toString("hex")
                                        )
                                    }}
                                    className={"btn btn-primary btn-sm"}
                                >
                                    Random Generate
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={"row mt-5"}>
                        <div className={"col-md-12"}>
                            <Barcode value={inputValue} />
                        </div>
                    </div>
                </div>
            </DocumentMeta>
        </MasterLayout>
    )
}

BarcodeGenerator.propTypes = {}

BarcodeGenerator.defaultProps = {}

export default BarcodeGenerator
