

import { QRCodeCanvas } from 'qrcode.react';
const GenerateQR = (props) => {
    return (
        <div className='d-flex justify-content-center'>
            <QRCodeCanvas
                id='canvas'
                value={props.text}
                size={1200}
                level={"L"}
                includeMargin={false}
                renderas={"canvas"}
                style={{
                    maxHeight: '40vh',
                    maxWidth: '40vh',
                }}
                className=""
                />
        </div>
    );
}

export default GenerateQR;