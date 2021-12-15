import React, {useState} from 'react';
import MasterLayout from "../../layout/MasterLayout/MasterLayout";
import ReactDiffViewer from 'react-diff-viewer';

const DiffChecker = () => {

    const [oldCode, setOldCode] = useState();
    const [newCode, setNewCode] = useState();
    const [newCodeDisable, setNewCodeDisable] = useState(true);
    const [showDiff, setShowDiff] = useState(false);

    return <MasterLayout>
        <div className={'container mb-3 mt-5 min-height'}>
            <h1 className={'mt-4'}># Diff Checker</h1>
            <p className={'text-muted'}>Difference checker between two file
                data.</p>
            <div className={'row mt-3'}>
                <div className={'col-md-6'}>
                    <label htmlFor="originalText"
                           className="form-label"><strong>Original Text</strong></label>
                    <textarea className="form-control"
                              withspellcheck="false"
                              rows={10}
                              id="originalText"
                              autoFocus={true}
                              onChange={event => {
                                  setOldCode(event.target.value)
                                  setNewCodeDisable(false)
                              }}
                              aria-describedby=""/>
                </div>
                <div className={'col-md-6'}>
                    <label htmlFor="updatedText"
                           className="form-label"><strong>Updated Text</strong></label>
                    <textarea className="form-control"
                              rows={10}
                              withspellcheck="false"
                              disabled={newCodeDisable}
                              id="updatedText"
                              onChange={event => {
                                  setNewCode(event.target.value)
                                  setShowDiff(true)
                              }}
                              aria-describedby=""/>
                </div>
            </div>
            {
                showDiff ? <div className={'row mt-3'}>
                        <div className={'col-md-12'}>
                            <ReactDiffViewer oldValue={oldCode} newValue={newCode}
                                             splitView={true}/>
                        </div>
                    </div>
                    : null
            }
        </div>

        <p className={'text-center'}>This diff checker is powered by <a
            target={'_blank'}
            className={'text-reset fw-bold ml-2'}
            href={'https://github.com/praneshr/react-diff-viewer'}>
            praneshr
        </a>
        </p>
    </MasterLayout>
}


export default DiffChecker;
