import React, {useState} from 'react';
import MasterLayout from "../../layout/MasterLayout/MasterLayout";
import ReactJson from 'react-json-view'

const JsonFormatter = () => {

    const [inputValue, setInputValue] = useState()
    const [inputString, setInputString] = useState(false)

    return <MasterLayout>
        <div className={'row mt-5'}>
            <div className={'col-md-12'}>
                <label htmlFor="jsonValue"
                       className="form-label">Enter Json</label>
                <textarea className="form-control"
                          rows={10}
                          id="jsonValue"
                          onChange={event => {
                              setInputValue(event.target.value)
                          }}
                          aria-describedby=""/>
                <div id="" className="form-text mt-2">
                    <button type={'button'}
                            onClick={() => {
                                console.log(inputValue)
                                setInputString(JSON.parse(inputValue))
                            }}
                            className={'btn btn-primary btn-sm'}>
                        Format
                    </button>
                </div>
            </div>
        </div>
        <div className={'row mt-5'}>
            <div className={'col-md-12'}>
                <h3>#1</h3>
                <pre>
                    {inputString ?
                        < ReactJson src={inputString} name={false}/> : null
                    }
                </pre>
            </div>
        </div>
    </MasterLayout>
};

JsonFormatter.propTypes = {};

JsonFormatter.defaultProps = {};

export default JsonFormatter;
