import React, {useState} from 'react';
import MasterLayout from "../../layout/MasterLayout/MasterLayout";
import ReactJson from 'react-json-view'
import {isEmpty} from "lodash";

const JsonFormatter = () => {

    const [inputValue, setInputValue] = useState()
    const [inputString, setInputString] = useState(false)
    const [inputStringArray, setInputStringArray] = useState([])

    return <MasterLayout>
        <div className={'row mt-5'}>
            <div className={'col-md-12'}>
                <label htmlFor="jsonValue"
                       className="form-label"><strong>Enter JSON</strong></label>
                <textarea className="form-control"
                          rows={10}
                          id="jsonValue"
                          autoFocus={true}
                          onChange={event => {
                              setInputValue(event.target.value)
                          }}
                          aria-describedby=""/>
                <div id="" className="form-text mt-2">
                    <button type={'button'}
                            onClick={async () => {
                                await setInputString(JSON.parse(inputValue))
                                await setInputStringArray([...inputStringArray, JSON.parse(inputValue)])
                            }}
                            className={'btn btn-primary btn-sm'}>
                        Format
                    </button>
                </div>
            </div>
        </div>
        {
            inputString ?
                <div className={'row mt-5'}>
                    <div className={'col-md-12'}>
                        <h3># Current</h3>
                        <pre>{inputString ?
                            < ReactJson src={inputString} name={false}
                                        collapsed={1}/> : null
                        }</pre>
                    </div>
                </div>
                : null
        }

        {
            !isEmpty(inputStringArray) ?
                <div>
                    <hr/>
                    <div className={'row mt-5'}>
                        <div className={'col-md-12'}>
                            <h3># History</h3>
                            <pre>{!isEmpty(inputStringArray) ?
                                inputStringArray.map(s =>
                                    < ReactJson src={s} name={false}
                                                collapsed={true}/>
                                )
                                : null
                            }</pre>
                        </div>
                    </div>
                </div>
                : null
        }
    </MasterLayout>
};

JsonFormatter.propTypes = {};

JsonFormatter.defaultProps = {};

export default JsonFormatter;
