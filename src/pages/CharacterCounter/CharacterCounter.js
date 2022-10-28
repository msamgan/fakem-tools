import { isEmpty } from "lodash"
import React from "react"
import { useState, useEffect } from "react"
import MasterLayout from "../../layout/MasterLayout/MasterLayout"
import { updateTitle } from "../../utils/methods"
import DocumentMeta from "react-document-meta"

/**
 * A React component that displays the character counter.
 * @returns None
 */
const CharacterCounter = () => {
    const [text, setText] = useState(null)
    const [characters, setCharacters] = useState(0)
    const [words, setWords] = useState(0)
    const [sentences, setSentences] = useState(0)
    const [paragraphs, setParagraphs] = useState(0)

    const meta = {
        title: updateTitle("Character Counter"),
        description:
            "Count characters, words, sentences and paragraphs in your text. This is a free tool that counts characters, words, sentences and paragraphs in your text.",
        meta: {
            charset: "utf-8",
            name: {
                keywords:
                    "character, counter, words, sentences, paragraphs, fakem, fake"
            }
        }
    }

    /**
     * Sets the state of the character, word, sentence, and paragraph counts.
     * @param {string} text - the text to count the characters, words, sentences, and
     * paragraphs of.
     * @returns None
     */
    useEffect(() => {
        setCharacters(text ? text.length : 0)
        setWords(
            text ? text.split(" ").filter((word) => !isEmpty(word)).length : 0
        )
        setSentences(
            text
                ? text.split(".").filter((sentence) => !isEmpty(sentence))
                      .length - 1
                : 0
        )
        setParagraphs(
            text
                ? text.split("\n").filter((paragraph) => !isEmpty(paragraph))
                      .length
                : 0
        )
    }, [text])

    /**
     * The main component for the character counter.
     * @returns {JSX.Element} A React component that displays the character counter.
     */
    return (
        <MasterLayout>
            <DocumentMeta {...meta}>
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
            </DocumentMeta>
        </MasterLayout>
    )
}

export default CharacterCounter
