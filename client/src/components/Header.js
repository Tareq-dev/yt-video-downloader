import React, { useEffect, useState } from "react";
import Result from "./Result";
import Loading from "./Loading";
import { toast } from "react-toastify";

export default function () {
  const [videoUrl, setVideoUrl] = useState("");
  const [data, setData] = useState({});
  const [result, setResult] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (videoUrl) {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/download", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ videoUrl }),
        });
        const data = await response.json();
        if (data.success) {
          setVideoUrl("");
          setData(data);
          setResult(true);
        }
        if (data?.error) {
          toast.error(`${data?.error}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }

        setLoading(false);
      } catch (error) {
        setError(error);
      }
    } else {
      setError("Invalid Url, Please paste proper Url");
    }
  };
  return (
    <div>
      <h1 className="text-3xl md:text-4xl text-center text-white font-extrabold pt-14">
        Youtube to mp3 Downloader
      </h1>
      <p className="text-lg md:text-xl text-center pt-2 font-bold">
        Download Youtube Video . Convert to mp4 Format
      </p>
      <div className="flex justify-center pt-10">
        <div className="py-10 px-4 mx-2 md:px-12 rounded-md md:w-2/3 bg-black">
          <div className="flex justify-center">
            <label
              htmlFor=""
              className="md:text-xl pb-4 text-white text-center"
            >
              Paste video url address and press Go to start
            </label>
          </div>
          <div className="flex">
            <input
              className="w-full px-4 py-2 rounded-l-md outline-none"
              type="text"
              name=""
              placeholder="Enter link here ..."
              required
              onChange={(e) => setVideoUrl(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="px-4 md:px-10 py-2 rounded-r-md font-bold text-2xl bg-red-500 text-white"
              type=""
            >
              Go
            </button>
          </div>
        </div>
      </div>
      {loading && <Loading />}
      {result ? (
        <Result videoUrl={videoUrl} data={data} />
      ) : (
        <p className="text-center font-bold text-red-500 pt-8 text-xl px-4 ">
          {error}
        </p>
      )}
    </div>
  );
}
