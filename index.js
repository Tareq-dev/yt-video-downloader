const express = require("express");
const app = express();
const cors = require("cors");
const ytdl = require("ytdl-core");

app.use(express.json());
app.use(cors());

// Searching API

app.post("/api/download", async (req, res) => {
  const { videoUrl } = req.body;

  try {
    const videoId = ytdl.getURLVideoID(videoUrl);

    if (!videoId) {
      res.status(400).send({ error: "Invalid video URL" });
      return;
    }

    const informatiion = await ytdl.getInfo(videoId);
    const title = informatiion.videoDetails.title;
    const thumbnail = informatiion.videoDetails.thumbnails[0].url;
    const uploadDate = informatiion.videoDetails.uploadDate;

    const metaInfo = await ytdl.getInfo(videoUrl);
    let formateData = {
      url: "https://www.youtube.com/embed/" + videoId,
      info: metaInfo.formats,
    };
    const data = { title, thumbnail, uploadDate, videoUrl, formateData };
    res.send({ success: true, data });
  } catch (error) {
    res.status(500).send({ error: "Failed to process the video URL" });
  }
});

const port = 5000;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Server is running on port ${port}!`));
