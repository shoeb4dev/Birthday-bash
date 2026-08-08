import { useEffect, useState } from "react";

import Loading from "./components/Loading/Loading";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Letter from "./components/Letter/Letter";
import GiftBox from "./components/GiftBox/GiftBox";
import Cake from "./components/Cake/Cake";
import Fireworks from "./components/Fireworks/Fireworks";

function App() {
  const [loading, setLoading] = useState(true);
  const [screen, setScreen] = useState("hero");

  // Initial loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Show loading screen first
  // if (loading) {
  //   return <Loading />;
  // }

  // Main screen navigation
  switch (screen) {
    case "hero":
      return (
        <Hero
          onContinue={() => setScreen("gallery")}
        />
      );

    case "gallery":
      return (
        <Gallery
          onContinue={() => setScreen("letter")}
        />
      );

    case "letter":
      return (
        <Letter
          onContinue={() => setScreen("gift")}
        />
      );

    case "gift":
      return (
        <GiftBox
          onContinue={() => setScreen("cake")}
        />
      );

    case "cake":
      return (
        <Cake
          onContinue={() => setScreen("fireworks")}
        />
      );

    case "fireworks":
      return (
        <Fireworks
          onReplay={() => setScreen("hero")}
        />
      );

    default:
      return null;
  }
}

export default App;