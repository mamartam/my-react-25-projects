import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQr() {
    setQrCode(input);
    setInput("");
  }

  return (
    <>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQr}
        >
          Generate
        </button>
      </div>

      <div>
        <QRCodeSVG
          id="qr-code-value"
          value={qrCode}
          size={400}
          style={{ backgroundColor: "white" }}
        />
      </div>
    </>
  );
}

export default QRCodeGenerator;
