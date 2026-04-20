import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const photos = [
  "https://i.ibb.co/fdQ8KpYW/Whats-App-Image-2026-04-20-at-2-10-41-PM-1.jpg",
  "https://i.ibb.co/vvc3n8HM/9e9d5182-2660-4806-a295-8eaad2f8430e.jpg",
  "https://i.ibb.co/tpQ6mMJK/Whats-App-Image-2026-04-20-at-2-09-01-PM.jpg",
];

export default function BirthdayWebsite() {
  const [showMessage, setShowMessage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3500);
    return () => clearInterval(slider);
  }, []);

  const handleSurprise = () => {
    const audio = document.getElementById("bg-music");
    audio?.play();

    confetti({
      particleCount: 220,
      spread: 100,
      origin: { y: 0.7 },
    });

    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 3800);
  };

  return (
    <div className="app-shell">
      <motion.header
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="hero-banner"
      >
        <p className="eyebrow">A special celebration for Sakil Bhaiya</p>
        <h1>Happy Birthday, Sakil Bhaiya!</h1>
        <p className="hero-copy">
          Today we celebrate your warmth, leadership, and the countless memories that make you unforgettable. Enjoy the music,
          memories, and a little surprise designed just for you.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="content-grid"
      >
        <section className="photo-card">
          <motion.img
            key={currentIndex}
            src={photos[currentIndex]}
            alt={`Birthday memory ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <p className="photo-caption">Memory {currentIndex + 1} of {photos.length}</p>
        </section>

        <section className="message-card">
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="message-panel"
              aria-live="polite"
            >
              <h2>With love and admiration</h2>
              <p>
                You are not only my brother but also my best friend. While you carry many responsibilities,
                you often forget to take care of yourself. You are the best brother in the world.
                I truly love and respect you, Bhaiya.✨ I hope today brings you as much happiness as you bring to others.
              </p>
            </motion.div>
          )}

          <div className="actions">
            <button onClick={handleSurprise} type="button" className="action-button">
              Tap for surprise 🎁
            </button>
            <p className="hint-text">Enjoy the birthday soundtrack and let the celebration begin.</p>
          </div>

          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="toast-banner"
            >
              Surprise unlocked — music is playing! 🎶
            </motion.div>
          )}
        </section>
      </motion.main>

      <audio id="bg-music" loop>
        <source src="/mixkit-birthday-gift-791.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

  