import { QRCodeSVG } from 'qrcode.react';

const GenerateQR = (props) => {
    return (
        <div>
            <QRCodeSVG
                value={props.text}
                size={256}
                level={"L"}
                includeMargin={false}
                renderas={"svg"}
            />
        </div>
    );
}

export default GenerateQR;