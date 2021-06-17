import React from 'react';
import styles from './video_detail.module.css'

const Video_detail = ({ video: { id }, video: { snippet } }) => {

    return (
        <section className={styles.detail}>
            <iframe
                className={styles.video}
                type="text/html"
                width="1500px"
                height="900px"
                src={`https://www.youtube.com/embed/${id.videoId}`}
                frameborder="0"
                allowFullScreen
            ></iframe>
            <h2>{snippet.title}</h2>
            <h3>{snippet.channelTitle}</h3>
            <pre className={styles.description}>{snippet.description}</pre>
        </section>
    );
}

export default Video_detail;