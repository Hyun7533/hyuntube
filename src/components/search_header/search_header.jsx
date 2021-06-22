import React, { memo, useRef } from 'react';
import styles from './search_header.module.css'

const Search_header = memo(
    ({ onSearch }) => {
        const inputRef = useRef();

        const handleSearch = () => {
            const value = inputRef.current.value;
            onSearch(value);
        }

        const onClick = () => {
            handleSearch();
        }

        const onKeyPress = (event) => {
            if (event.key === 'Enter') {
                handleSearch()
            }
        }

        return (
            <header className={styles.header}>
                <img className={styles.img} src="./img/youtube_logo2.png" alt="logo" />
                <h1 className={styles.title}>HyunTube</h1>
                <input
                    className={styles.input}
                    type="search" placeholder="Search on HyunTube..."
                    onKeyPress={onKeyPress}
                    ref={inputRef}
                />
                <button className={styles.button} onClick={onClick}>Search</button>
            </header>
        )

    }
)

export default Search_header;