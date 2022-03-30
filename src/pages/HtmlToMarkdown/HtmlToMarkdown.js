import React, { useState, useEffect } from "react"
import MasterLayout from "../../layout/MasterLayout/MasterLayout"
import TurndownService from "turndown"

const HtmlToMarkdown = () => {
    var turndownService = new TurndownService()

    const [html, setHtml] = useState("")
    const [markdown, setMarkdown] = useState("")

    useEffect(() => {
        if (html) {
            setMarkdown(turndownService.turndown(html))
        }
    }, [html])

    return (
        <MasterLayout>
            <div className={"container mb-3 mt-5 min-height"}>
                <h1 className={"mt-4"}># Html to Markdown</h1>
                <p className={"text-muted"}>Convert html to markdown.</p>
                <div className={"row mt-3"}>
                    <div className="col-md-6">
                        <label htmlFor="htmlValue" className="form-label">
                            <strong>Enter HTML</strong>
                        </label>
                        <textarea
                            className="form-control"
                            id="htmlValue"
                            onChange={(event) => {
                                setHtml("")
                                setMarkdown("")
                                if (event.target.value.length > 0) {
                                    setHtml(event.target.value)
                                }
                            }}
                            rows={18}
                            placeholder={"<h1>Hello World</h1>"}
                            autoFocus={true}
                            aria-describedby=""
                        />
                    </div>
                    <div className={"col-md-6"}>
                        <label htmlFor="htmlValue" className="form-label">
                            <strong>Markdown</strong>
                        </label>
                        <textarea
                            className="form-control"
                            id="markdownValue"
                            rows={18}
                            readOnly
                            placeholder={"# Hello World"}
                            onChange={() => {
                                // event
                            }}
                            autoFocus={false}
                            aria-describedby=""
                            value={markdown}
                        />
                    </div>
                </div>
            </div>
        </MasterLayout>
    )
}

export default HtmlToMarkdown
