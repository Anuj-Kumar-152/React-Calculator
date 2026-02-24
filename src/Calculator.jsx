import { useState } from "react";

function Calculator() {
   const [input, setInput] = useState("");

   const buttons = [
      "C", "/", "*", "-",
      "7", "8", "9", "+",
      "4", "5", "6",
      "1", "2", "3",
      "0", ".", "="
   ];

   const handleClick = (value) => {
      if (value === "C") {
         setInput("");
      }
      else if (value === "=") {
         try {
            setInput(eval(input).toString());
         } catch {
            setInput("Error");
         }
      }
      else {
         setInput((prev) => prev + value);
      }
   };

   const getButtonStyle = (btn) => {
      if (btn === "C") return "bg-red-500 text-white hover:bg-red-600";
      if (btn === "=") return "bg-green-500 text-white hover:bg-green-600";
      if (["/", "*", "-", "+"].includes(btn))
         return "bg-gray-200 hover:bg-gray-300";
      return "bg-white hover:bg-gray-100";
   };

   return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-200 to-gray-400">
         <div className="w-80 p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl">

            {/* Header */}
            <h2 className="text-2xl font-semibold text-center mb-4">
               React Calculator
            </h2>

            {/* Display */}
            <input
               type="text"
               value={input}
               readOnly
               className="w-full mb-4 p-3 border rounded-lg text-right text-xl font-medium focus:outline-none bg-gray-50"
            />

            {/* Buttons */}
            <div className="grid grid-cols-4 gap-3">
               {buttons.map((btn, index) => (
                  <button
                     key={index}
                     onClick={() => handleClick(btn)}
                     className={`p-3 cursor-pointer rounded-lg shadow-sm transition duration-200 ${getButtonStyle(btn)} ${btn === "0" ? "col-span-2" : ""
                        }`}
                  >
                     {btn}
                  </button>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Calculator;
