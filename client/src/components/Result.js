import React, { useState } from "react";
import { saveAs } from "file-saver";

function Result({ data }) {
  const [resu, setResu] = useState("");
  const formateData = data?.data?.formateData.info.filter(
    (f) => f.hasAudio === true
  );
  const handleVideoDownload = async () => {
    saveAs(resu);
  };

  return (
    <div className="flex justify-center mt-8 mx-2">
      <div className="md:flex md:w-[800px] py-8 bg-white px-4 rounded-lg">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            className="w-full md:w-[300px] rounded-lg"
            src={data?.data?.thumbnail}
            alt=""
          />
        </div>
        <div className="md:w-1/2 ml-2">
          <h2 className="text-xl font-semibold py-1">{data?.data?.title}</h2>
          <p className="text-xl pt-4">
            Uploaded Date : {data?.data?.uploadDate}
          </p>
          <p className="text-xl font-bold pt-4">Choose Download Formate</p>
          <div className="flex justify-center  md:justify-start">
            <div></div>
            <div className="pt-4">
              <select
                onChange={(e) => setResu(e.target.value)}
                className="px-3 py-2 outline-none mr-8  border-green-500 border rounded-md"
                name=""
                id=""
              >
                {formateData?.map((formatName, index) => (
                  <option key={index} value={formatName.url}>
                    <div>
                      {formatName.mimeType.split(";")[0] + "  "}
                      {formatName.hasVideo ? formatName.height + "p" : ""}
                    </div>
                  </option>
                ))}
              </select>
              <button
                onClick={handleVideoDownload}
                className="px-4  bg-green-500 hover:bg-green-600 rounded-lg text-white font-serif text-xl py-1 mr-5"
                type=""
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
