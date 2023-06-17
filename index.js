const express = require("express");
const app = express();
const cors = require("cors");
const ytdl = require("ytdl-core");
const bodyParser = require("body-parser");

// app.use(express.json());
app.use(cors());

// Express 4.0
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

// Express 3.0
app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ limit: "10mb" }));
// Searching API

app.post("/api/get-info", async (req, res) => {
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
app.get("/download", async (req, res) => {
  const videoUrl = req.query.url;
  try {
    const info = await ytdl.getInfo(videoUrl);
    const videoFormat = ytdl.chooseFormat(info.formats, {
      hasVideo: true,
      hasAudio: true,
    });
    const filename = info.videoDetails.title;
    const result = filename.replace(/[^a-zA-Z\s]/g, "");
    res.header("Content-Disposition", `attachment; filename="${result}.mp4"`);
    ytdl(videoUrl, { format: videoFormat }).pipe(res);
  } catch (error) {
    res.status(400).send({ error: "Invalid video URL" });
  }
});

const port = 5000;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Server is running on port ${port}!`));
