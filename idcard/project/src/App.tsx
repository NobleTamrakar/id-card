import React, { useState } from 'react';
import { Download, HeaterIcon as Helicopter } from 'lucide-react';

function App() {
  const [donorName] = useState('John Doe');
  const [amount] = useState(1000);
  const [date] = useState(new Date().toLocaleDateString());

  const handleDownload = () => {
    // In a real application, this would generate and download a PDF
    alert('PDF download functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-[#000F0B] flex flex-col items-center justify-center p-4">
      {/* Thank You Message */}
      <h1 className="text-[#00E8CF] text-4xl md:text-5xl font-bold mb-8 text-center">
        Thank You for Your Generosity!
      </h1>

      {/* Certificate Container */}
      <div className="w-full max-w-3xl bg-[#112221] rounded-lg shadow-2xl p-8 md:p-12 m-4">
        <div className="border-4 border-[#094534] p-6 md:p-8 rounded-lg">
          <div className="text-center">
            {/* Company Logo and Name */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <Helicopter className="w-12 h-12 text-[#00E8CF]" />
              <h2 className="text-[#00E8CF] text-3xl md:text-4xl font-bold">HeliCooperator</h2>
            </div>
            
            <h2 className="text-[#F0F2F0] text-2xl md:text-3xl font-semibold mb-2">
              Certificate of Appreciation
            </h2>
            <div className="w-32 h-1 bg-[#00BC4C] mx-auto my-4"></div>
            
            <p className="text-[#F0F2F0] text-lg md:text-xl mt-6">
              This certificate acknowledges
            </p>
            <p className="text-[#00E8CF] text-2xl md:text-3xl font-bold my-4">
              {donorName}
            </p>
            <p className="text-[#F0F2F0] text-lg md:text-xl">
              for their generous contribution of
            </p>
            <p className="text-[#00E8CF] text-2xl md:text-3xl font-bold my-4">
              ${amount.toLocaleString()}
            </p>
            <p className="text-[#F0F2F0] text-lg md:text-xl mt-4">
              Your support makes a difference.
            </p>
            <p className="text-[#3FEBD0] mt-6">
              Issued on {date}
            </p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="mt-8 bg-[#22C55E] hover:bg-[#00BC4C] text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors duration-300"
      >
        <Download className="w-5 h-5" />
        Download Certificate
      </button>

      <p className="text-[#3FEBD0] mt-6 text-center max-w-md">
        A copy of this certificate has also been sent to your email address.
      </p>
    </div>
  );
}

export default App;