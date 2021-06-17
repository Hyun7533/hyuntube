import styles from './app.module.css'
import { useEffect, useState } from 'react';
import Video_list from './components/video_list/video_list';
import Search_header from './components/search_header/search_header';
import Video_detail from './components/video_detail/video_detail';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video)
  }

  const search = (query) => { // 검색할때 실행되는 함수
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=AIzaSyALd5gN0lZ5gFbk7dys3373SqkmhNcF_dE`,
      requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=youtube&key=AIzaSyALd5gN0lZ5gFbk7dys3373SqkmhNcF_dE", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .then(console.log('basic fetch api'))
      .catch(error => console.log('error', error));
  }, []) // []없으면 계속 fetch api를 얻어온다 필요할때만 업데이트 한다 (Component update)

  return <>
    <Search_header onSearch={search} />
    < section className={styles.content}>
      {selectedVideo && (<div className={styles.detail}>
        <Video_detail video={selectedVideo} />
      </div>)}
      <div className={styles.list}>
        <Video_list videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}></Video_list>
      </div>
    </section>
  </>
}

export default App;