import React, { useState } from "react";
import QrReader from "react-qr-reader";

const BarcodeReader = () => {
  const [scanning, setScanning] = useState(false);
  const [scannedCode, setScannedCode] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setScannedCode(data);
    }
  };

  const handleError = (err) => {
    console.error("Error accessing camera:", err);
  };

  const startScanning = () => {
    setScanning(true);
  };

  const stopScanning = () => {
    setScanning(false);
    setScannedCode(null);
  };

  return (
    <div className="bg-red-400 min-h-screen p-4">
      <h1 className="text-white text-3xl font-bold mb-4">Code Reader</h1>
      {!scanning && !scannedCode && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={startScanning}
        >
          Scan Code
        </button>
      )}
      {scanning && (
        <div>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={stopScanning}
          >
            Stop
          </button>
        </div>
      )}
      {scannedCode && (
        <div className="bg-white p-4 rounded-lg shadow mt-4">
          <h2 className="text-xl font-bold mb-2">Scanned Code Details</h2>
          <p>{scannedCode}</p>
        </div>
      )}
    </div>
  );
};

export default BarcodeReader;
