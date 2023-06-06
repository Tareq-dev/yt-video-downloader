import React, { useState } from "react";
import axios from "axios";
function Result({ data }) {
  const [resu, setResu] = useState("");
  const [loader, setLoader] = useState(false);
  const [videoInfo, setVideoInfo] = useState("");
  const handleVideoDownload = async () => {
    const videoId = data.videoUrl.split("https://www.youtube.com/watch?v=")[1];
    try {
      setLoader(true);
      console.log(resu);
      const { data } = await axios.get(
        `http://localhost:5000/api/get-video-info/${videoId}`
      );
      setLoader(false);
      setVideoInfo(data.videoInfo);
      setResu(data.videoInfo.videoInfo.videoResu[0]);
    } catch (error) {
      console.log(error.response);
    }
  };
  const video_download = () => {
    const videoId = data.videoUrl.split("https://www.youtube.com/watch?v=")[1];
    const url = `http://localhost:5000/video-download?id=${videoId}&resu=${resu}`;
    window.location.href = url;
  };
  return (
    <div className="flex justify-center mt-8 mx-2">
      <div className="md:flex md:w-[800px] py-8 bg-white px-4 rounded-lg">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            className="w-full md:w-[300px] rounded-lg"
            src={data?.thumbnail}
            alt=""
          />
        </div>
        <div className="md:w-1/2 ml-2">
          <h2 className="text-xl font-semibold py-1">{data?.title}</h2>
          <p className="text-xl pt-4">Uploaded Date : {data?.uploadDate}</p>
          <p className="text-xl font-bold pt-4">Choose Download Formate</p>
          <div className="flex justify-center  md:justify-start">
            <div className="pt-4">
              <select
                onChange={(e) => setResu(e.target.value)}
                className="px-3 py-2 outline-none mr-8  border-green-500 border rounded-md"
                name=""
                id=""
              >
                {data?.quality.length > 0 &&
                  data?.quality.map((v, i) => (
                    <option key={i} defaultValue={v}>
                      {v}p
                    </option>
                  ))}
              </select>
              <button
                onClick={video_download}
                className="px-4  bg-green-500 hover:bg-green-600 rounded-lg text-white font-serif text-xl py-1 mr-5"
                type=""
              >
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
