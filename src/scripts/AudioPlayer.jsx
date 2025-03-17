import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

const AudioPlayer = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [hover, setHover] = useState(false);

  const playerRef = useRef(null);

  const handleHover = () => {
    setHover(!hover);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleProgress = state => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekChange = e => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = e => {
    setSeeking(false);
    playerRef.current.seekTo(parseFloat(e.target.value));
  };

  const handleSeekTouchStart = (e) => {
    e.preventDefault();
    handleSeekMouseDown();
  };

  const handleSeekTouchMove = (e) => {
    e.preventDefault();
    const touch = e.targetTouches[0];
    const value = (touch.clientX - e.target.getBoundingClientRect().left) / e.target.offsetWidth;
    setPlayed(Math.min(Math.max(value, 0), 0.999999));
  };

  const handleSeekTouchEnd = (e) => {
    e.preventDefault();
    handleSeekMouseUp(e);
  };

  const handleVolumeChange = e => {
    setVolume(parseFloat(e.target.value));
  };

  const handleVolumeTouchStart = (e) => {
    e.preventDefault();
  };

  const handleVolumeTouchMove = (e) => {
    e.preventDefault();
    const touch = e.targetTouches[0];
    const value = (touch.clientX - e.target.getBoundingClientRect().left) / e.target.offsetWidth;
    setVolume(Math.min(Math.max(value, 0), 1));
  };

  const handleVolumeTouchEnd = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={playing}
        volume={volume}
        loop={true}
        onProgress={handleProgress}
        progressInterval={10}
        width="0"
        height="0"
      />
      <button className={playing ? 'pause-button' : 'play-button'} onClick={handlePlayPause} onDragOver={handleHover}>
      </button>
      <input
        type='range' min={0} max={0.999999} step='any'
        value={played}
        onMouseDown={handleSeekMouseDown}
        onChange={handleSeekChange}
        onMouseUp={handleSeekMouseUp}
        onTouchStart={handleSeekTouchStart}
        onTouchMove={handleSeekTouchMove}
        onTouchEnd={handleSeekTouchEnd}
        style={{
          width: '100%',
          height: '15px',
          borderRadius: '10px',
          background: `linear-gradient(to right, #82CFD0 ${played * 100}%, #FD7307 ${played * 100}%)`,
          outline: 'none',
          transition: 'opacity .2s',
          WebkitAppearance: 'none'
        }}
      />
      <input
        type='range' min={0} max={1} step='any'
        value={volume}
        onChange={handleVolumeChange}
        onTouchStart={handleVolumeTouchStart}
        onTouchMove={handleVolumeTouchMove}
        onTouchEnd={handleVolumeTouchEnd}
        style={{
          width: '100%',
          height: '15px',
          borderRadius: '10px',
          background: `linear-gradient(to right, #d3d3d3 ${volume * 100}%, #FD7307 ${volume * 100}%)`,
          outline: 'none',
          opacity: '0.7',
          transition: 'opacity .2s',
          WebkitAppearance: 'none'
        }}
      />
    </div>
  );
};

export default AudioPlayer;