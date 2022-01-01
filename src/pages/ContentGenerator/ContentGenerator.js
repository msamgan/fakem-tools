import React, { useEffect, useState } from "react"
import MasterLayout from "../../layout/MasterLayout/MasterLayout"
import { isEmpty } from "lodash"

const ContentGenerator = () => {
    const [content, setContent] = useState()
    const [generateNewDisable, setGenerateNewDisable] = useState(false)

    /**
     *
     * @returns {Promise<void>}
     */
    const getRandomContent = async () => {
        await fetch(process.env.REACT_APP_API + "content")
            .then((response) => response.json())
            .then((data) => setContent(data))
    }

    useEffect(async () => {
        await getRandomContent()
    }, [])

    return (
        <MasterLayout>
            <div className={"container mb-3 mt-5 min-height"}>
                <h1 className={"mt-4"}># Content Generator</h1>
                <p className={"text-muted"}>
                    Random generated content for and as per your requirement.
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
                            <p>Getting a freshly baked content for you....</p>
                        )}
                    </div>
                </div>
            </div>
        </MasterLayout>
    )
}

ContentGenerator.propTypes = {}

ContentGenerator.defaultProps = {}

export default ContentGenerator
