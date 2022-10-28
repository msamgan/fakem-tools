import React, { useEffect, useState } from "react"
import MasterLayout from "../../layout/MasterLayout/MasterLayout"
import { isEmpty } from "lodash"
import { updateTitle } from "../../utils/methods"
import DocumentMeta from "react-document-meta"

const ContentGenerator = () => {
    const [content, setContent] = useState()
    const [generateNewDisable, setGenerateNewDisable] = useState(false)

    /**
     * Gets random content from the API.
     * @returns {Promise<void>}
     */
    const getRandomContent = async () => {
        await fetch(process.env.REACT_APP_API + "content")
            .then((response) => response.json())
            .then((data) => setContent(data))
    }

    const meta = {
        title: updateTitle("Content Generator"),
        description:
            "Generate random content for testing purposes. This is a free tool that generates random content.",
        meta: {
            charset: "utf-8",
            name: {
                keywords: "content, generator, random, data, fakem, fake"
            }
        }
    }

    /**
     * A function that runs when the component mounts.
     * @returns None
     */
    useEffect(async () => {
        await getRandomContent()
    }, [])

    /**
     * The main content of the page.
     * @returns {JSX.Element} A JSX element.
     */
    return (
        <MasterLayout>
            <DocumentMeta {...meta}>
                <div className={"container mb-3 mt-5 min-height"}>
                    <h1 className={"mt-4"}># Content Generator</h1>
                    <p className={"text-muted"}>
                        Random generated content for and as per your
                        requirement.
                    </p>
                    <div className={"row mt-3"}>
                        <div className={"col-md-2"}>
                            <button
                                className={"btn btn-primary"}
                                disabled={generateNewDisable}
                                onClick={async () => {
                                    setGenerateNewDisable(true)
                                    await getRandomContent()
                                    setGenerateNewDisable(false)
                                }}
                            >
                                Generate
                            </button>
                        </div>
                    </div>
                    <div className={"row mt-3"}>
                        <div className={"col-md-12"}>
                            {!isEmpty(content) ? (
                                Object.keys(content).map((key, i) => (
                                    <p key={i}>{content[key]}</p>
                                ))
                            ) : (
                                <p>
                                    Getting a freshly baked content for you....
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </DocumentMeta>
        </MasterLayout>
    )
}

ContentGenerator.propTypes = {}

ContentGenerator.defaultProps = {}

export default ContentGenerator
