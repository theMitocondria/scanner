import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function App() {
  const [data, setData] = React.useState("N");

  return (
    <div>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if(data === "N"){
            if (result) setData(result.text);
            else setData("N");
          }
        }}
      />
      <p>{data}</p>
    </div>
  );
}

export default App;