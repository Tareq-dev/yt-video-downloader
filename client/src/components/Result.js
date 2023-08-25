import React, { useState } from "react";
import { saveAs } from "file-saver";

function Result({ data }) {
  const videoUrl = data?.data?.videoUrl;
  const formateData = data?.data?.formateData.info.filter(
    (f) => f.hasAudio === true
  );
  const [resu, setResu] = useState(formateData[0]?.url || ""); // Set the initial value to the first option's value, or an empty string if formateData is empty

  const handleVideoDownload = async () => {
    saveAs(resu);
  };

  const baseUrl = process.env.REACT_APP_BASE_URL;
  // const baseUrl = "http://localhost:5000";

  return (
    <div className="flex justify-center mt-8 mx-2">
      <div className="md:flex md:w-[800px] py-8 bg-white px-4 rounded-lg">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            className="w-full md:w-[350px] rounded-lg"
            src={data?.data?.thumbnail}
            alt=""
          />
        </div>
        <div className="md:w-1/2 ml-2">
          <h2 className="text-xl font-semibold py-1">{data?.data?.title}</h2>
          <p className="text-xl pt-4">
            Uploaded Date : {data?.data?.uploadDate}
          </p>

          <form action="GET" className="flex justify-center md:block my-4">
            <a
              href={`${baseUrl}/download?url=${videoUrl}`}
              download
              className="bg-green-500 hover:bg-green-600 px-2 py-1  font-serif rounded-md text-white"
            >
              🔥 One Click Download 🔥
            </a>
          </form>
          <p className="text-xl font-bold">Choose Formate</p>
          <div className="flex justify-center  md:justify-start">
            <div className="pt-4">
              <select
                onChange={(e) => setResu(e.target.value)}
                className="px-3 mx-1 py-2 outline-none mr-8 border-green-500 border rounded-md"
              >
                {/* Add a default option */}
                {formateData?.map((formatName, index) => (
                  <option key={index} value={formatName.url}>
                    {formatName.mimeType.split(";")[0] + "  "}
                    {formatName.hasVideo ? formatName.height + "p" : ""}
                  </option>
                ))}
              </select>

              <button
                onClick={handleVideoDownload}
                className="px-4  bg-orange-400 hover:bg-orange-600 rounded-lg text-white font-serif text-lg py-1 mr-5"
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
