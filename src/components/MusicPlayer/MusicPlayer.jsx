import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaMusic, FaVolumeUp } from "react-icons/fa";
import "./MusicPlayer.css";

function MusicPlayer() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay blocked:", error);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/birthday.mp3"
        loop
      />

      <div className="music-player">

        <div className="music-title">
          <FaMusic />
          <span>Birthday Music</span>
        </div>

        <button
          className="play-btn"
          onClick={toggleMusic}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <div className="volume-box">
          <FaVolumeUp />

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>

      </div>
    </>
  );
}

export default MusicPlayer;