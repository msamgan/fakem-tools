import React, { useState, useEffect } from "react"
import MasterLayout from "../../layout/MasterLayout/MasterLayout"
import convertToHTML from "markdown-to-html-converter"
import { updateTitle } from "../../utils/methods"
import DocumentMeta from "react-document-meta"

const MarkdownToHtml = () => {
    const [html, setHtml] = useState("")
    const [markdown, setMarkdown] = useState("")

    useEffect(() => {
        if (markdown) {
            setHtml(convertToHTML(markdown))
        }
    }, [markdown])

    const meta = {
        title: updateTitle("Markdown to HTML"),
        description:
            "Convert Markdown to HTML. This is a free tool that converts Markdown to HTML.",
        meta: {
            charset: "utf-8",
            name: {
                keywords: "markdown, html, converter, fakem, fake"
            }
        }
    }

    return (
        <MasterLayout>
            <DocumentMeta {...meta}>
                <div className={"container mb-3 mt-5 min-height"}>
                    <h1 className={"mt-4"}># Markdown to Html</h1>
                    <p className={"text-muted"}>Convert markdown to html.</p>
                    <div className={"row mt-3"}>
                        <div className="col-md-6">
                            <label
                                htmlFor="markdownValue"
                                className="form-label"
                            >
                                <strong>Enter Markdown</strong>
                            </label>
                            <textarea
                                className="form-control"
                                id="markdownValue"
                                rows={18}
                                placeholder={"# Hello World"}
                                autoFocus={true}
                                onChange={(event) => {
                                    setHtml("")
                                    setMarkdown("")
                                    if (event.target.value.length > 0) {
                                        setMarkdown(event.target.value)
                                    }
                                }}
                                aria-describedby=""
                            />
                        </div>
                        <div className={"col-md-6"}>
                            <label htmlFor="htmlValue" className="form-label">
                                <strong>Html</strong>
                            </label>
                            <textarea
                                className="form-control"
                                id="htmlValue"
                                rows={18}
                                readOnly
                                placeholder={"<h1>Hello World</h1>"}
                                autoFocus={false}
                                value={html}
                                aria-describedby=""
                            />
                        </div>
                    </div>
                </div>
            </DocumentMeta>
        </MasterLayout>
    )
}

export default MarkdownToHtml
