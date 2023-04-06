import React from "react";
import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        onChange={(e) => setPrompt(e.target.value)}
        rows={5}
        placeholder="Ask AI..."
        value={prompt}
        className="aipicker-textarea"
      ></textarea>

      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              handleClick={() => handleSubmit("logo")}
              type="outline"
              title="AI Logo"
              customStyles="text-xs"
            />
            <CustomButton
              handleClick={() => handleSubmit("full")}
              type="filled"
              title="AI Full"
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
