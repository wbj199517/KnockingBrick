import React, { useState,useEffect } from "react";
import { Grid } from "@material-ui/core";

import { SearchBar, VideoList, VideoDetail } from "../../component";

import youtube from "../../api/youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(()=>{
      handleSubmit('')
  },[])
  return (
    <Grid style={{ justifyContent: 'center' }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyAs6gsspLV26NYEn7CWeiEOFIB5F8CpUJE',
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}