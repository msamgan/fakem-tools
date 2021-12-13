import React, {useState} from 'react';
import MasterLayout from "../../layout/MasterLayout/MasterLayout";

const Barcode = require('react-barcode');
const crypto = require("crypto");


const BarcodeGenerator = () => {

    const [inputValue, setInputValue] = useState()

    return (
        <MasterLayout>
            <div className={'row mt-5'}>
                <div className="mb-3">
                    <label htmlFor="barcodeValue"
                           className="form-label">Enter Barcode Value</label>
                    <input type="text" className="form-control w-50"
                           id="barcodeValue"
                           value={inputValue}
                           onChange={event => {
                               setInputValue(event.target.value)
                           }}
                           aria-describedby=""/>
                    <div id="" className="form-text mt-2">
                        <button type={'button'}
                                onClick={() => {
                                    setInputValue(crypto.randomBytes(10).toString('hex'));
                                }}
                                className={'btn btn-primary btn-sm'}>
                            Random Generate
                        </button>
                    </div>
                </div>
            </div>
            <div className={'row mt-5'}>
                <div className={'col-md-12'}>
                    <Barcode value={inputValue}/>
                </div>
            </div>
        </MasterLayout>
    );
}

BarcodeGenerator.propTypes = {};

BarcodeGenerator.defaultProps = {};

export default BarcodeGenerator;
