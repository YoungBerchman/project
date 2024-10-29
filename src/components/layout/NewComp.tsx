import React from "react";

const NewComp = ({ header, content, image }: any) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="border border-black rounded-md p-4">
        <div className="font-bold">{header}</div>
        <div className="text-slate-400">{content}</div>
        <div>
          {image && <img src={image} alt="ds" className="rounded-2xl" />}
        </div>
      </div>
    </div>
  );
};

export default NewComp;
