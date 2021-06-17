import React from 'react';
import Video_item from '../video_item/video_item';
import styles from './video_list.module.css'

const Video_list = ({ videos, onVideoClick, display }) => (
    <ul className={styles.videos}>
        {
            videos.map(video =>
                <Video_item
                    key={video.id}
                    video={video}
                    onVideoClick={onVideoClick}
                    display={display} />)
        }
    </ul>
);

export default Video_list;