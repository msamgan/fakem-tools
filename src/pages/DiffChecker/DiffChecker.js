import React, { useState } from "react"
import MasterLayout from "../../layout/MasterLayout/MasterLayout"
import ReactDiffViewer from "react-diff-viewer"
import { updateTitle } from "../../utils/methods"
import DocumentMeta from "react-document-meta"

const DiffChecker = () => {
    const [oldCode, setOldCode] = useState()
    const [newCode, setNewCode] = useState()
    const [newCodeDisable, setNewCodeDisable] = useState(true)
    const [showDiff, setShowDiff] = useState(false)

    const meta = {
        title: updateTitle("Diff Checker"),
        description:
            "Compare two text files and see the differences. This is a free tool that compares two files and shows the differences.",
        meta: {
            charset: "utf-8",
            name: {
                keywords: "diff, checker, compare, text, fakem, fake"
            }
        }
    }

    return (
        <MasterLayout>
            <DocumentMeta {...meta}>
                <div className={"container mb-3 mt-5 min-height"}>
                    <h1 className={"mt-4"}># Diff Checker</h1>
                    <p className={"text-muted"}>
                        Difference checker between two file data.
                    </p>
                    <div className={"row mt-3"}>
                        <div className={"col-md-6"}>
                            <label
                                htmlFor="originalText"
                                className="form-label"
                            >
                                <strong>Original Text</strong>
                            </label>
                            <textarea
                                className="form-control"
                                withspellcheck="false"
                                rows={10}
                                id="originalText"
                                autoFocus={true}
                                onChange={(event) => {
                                    setOldCode(event.target.value)
                                    setNewCodeDisable(false)
                                }}
                                aria-describedby=""
                            />
                        </div>
                        <div className={"col-md-6"}>
                            <label htmlFor="updatedText" className="form-label">
                                <strong>Updated Text</strong>
                            </label>
                            <textarea
                                className="form-control"
                                rows={10}
                                withspellcheck="false"
                                disabled={newCodeDisable}
                                id="updatedText"
                                onChange={(event) => {
                                    setNewCode(event.target.value)
                                    setShowDiff(true)
                                }}
                                aria-describedby=""
                            />
                        </div>
                    </div>
                    {showDiff ? (
                        <div className={"row mt-3"}>
                            <div className={"col-md-12"}>
                                <ReactDiffViewer
                                    oldValue={oldCode}
                                    newValue={newCode}
                                    splitView={true}
                                />
                            </div>
                        </div>
                    ) : null}
                </div>

                <p className={"text-center"}>
                    This diff checker is powered by{" "}
                    <a
                        target={"_blank"}
                        rel="noreferrer"
                        className={"text-reset fw-bold ml-2"}
                        href={"https://github.com/praneshr/react-diff-viewer"}
                    >
                        praneshr
                    </a>
                </p>
            </DocumentMeta>
        </MasterLayout>
    )
}

export default DiffChecker
