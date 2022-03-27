import { isEmpty } from "lodash"
import React from "react"
import { useState, useEffect } from "react"
import MasterLayout from "../../layout/MasterLayout/MasterLayout"

const CharacterCounter = () => {
    const [text, setText] = useState(null)
    const [characters, setCharacters] = useState(0)
    const [words, setWords] = useState(0)
    const [sentences, setSentences] = useState(0)
    const [paragraphs, setParagraphs] = useState(0)

    useEffect(() => {
        setCharacters(text ? text.length : 0)
        setWords(
            text ? text.split(" ").filter((word) => !isEmpty(word)).length : 0
        )
        setSentences(text ? text.split(".").length - 1 : 0)
        setParagraphs(
            text
                ? text.split("\n").filter((paragraph) => !isEmpty(paragraph))
                      .length
                : 0
        )
    }, [text])

    return (
        <MasterLayout>
            <div className={"container mb-3 mt-5 min-height"}>
                <h1 className={"mt-4"}># Character Counter</h1>
                <p className={"text-muted"}>
                    Count the number of characters in a string.
                </p>
                <div className={"row mt-3"}>
                    <div className={"col-md-12"}>
                        <label htmlFor="inputText" className="form-label">
                            <strong>Input Text</strong>
                        </label>
                        <textarea
                            className="form-control"
                            rows={10}
                            id="inputText"
                            onChange={(e) => setText(e.target.value)}
                            autoFocus={true}
                            aria-describedby=""
                        />
                    </div>
                </div>
                <div className={"row mt-3"}>
                    <div className={"col-md-12"}>
                        <label htmlFor="outputText" className="form-label">
                            <strong>Characters</strong>: {characters},{" "}
                            <strong>Words</strong>: {words},{" "}
                            <strong>Sentences</strong>: {sentences},{" "}
                            <strong>Paragraphs</strong>: {paragraphs}
                        </label>
                    </div>
                </div>
            </div>
        </MasterLayout>
    )
}

export default CharacterCounter
