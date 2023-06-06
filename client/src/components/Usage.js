import React from "react";

export default function Usage() {
  return (
    <div className="pb-10 mt-12 md:mt-36">
      <h2 className="text-center text-2xl md:text-3xl pb-14 font-bold">
        How to use Ymp4 to download Youtube videos?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg ">
          <div className="flex justify-center -mt-16">
            <div className="flex justify-center items-center w-24 h-24 border-4 bg-white border-black rounded-full ">
              <div>
                <p className="text-center text-xl font-bold">Step</p>
                <p className="text-center font-bold bg-red-500 text-white my-1 py-1 rounded-full">
                  1
                </p>
              </div>
            </div>
          </div>

          <p className="mt-2 text-lg text-justify">
            Copy video link url (URL adress) via social share button on video,
            from the browser and YouTube app.
          </p>
        </div>
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg ">
          <div className="flex justify-center -mt-16">
            <div className="flex justify-center items-center w-24 h-24 border-4 bg-white border-black rounded-full ">
              <div>
                <p className="text-center text-xl font-bold">Step</p>
                <p className="text-center font-bold bg-red-500 text-white my-1 py-1  rounded-full">
                  2
                </p>
              </div>
            </div>
          </div>

          <p className="mt-2 text-justify">
            Paste video link into the search box of Ymp3 and hit the Go. You can
            search YouTube from that box.
          </p>
        </div>
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg ">
          <div className="flex justify-center -mt-16">
            <div className="flex justify-center items-center w-24 h-24 border-4 bg-white border-black rounded-full ">
              <div>
                <p className="text-center text-xl font-bold">Step</p>
                <p className="text-center font-bold bg-red-500 text-white my-1 py-1 rounded-full">
                  3
                </p>
              </div>
            </div>
          </div>

          <p className="mt-2 text-justify">
            Pick quality and format. Hit Download button to save Youtube video
            as mp4 on your device.
          </p>
        </div>
      </div>
    </div>
  );
}
