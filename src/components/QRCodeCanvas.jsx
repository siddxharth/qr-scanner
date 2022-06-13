import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCode = (props) => {
    return (
        <div className='d-flex justify-content-center'>
            <QRCodeCanvas
                id='canvas'
                value={props.text}
                size={1200}
                level={"L"}
                includeMargin={false}
                renderas={"canvas"}
                border={10}
                style={{
                    maxHeight: '40vh',
                    maxWidth: '40vh',
                }}
                />
        </div>
    );
}

export default QRCode;