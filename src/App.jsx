import { useEffect, useState } from "react";

import Loading from "./components/Loading/Loading";
import Welcome from "./components/Welcome/Welcome";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Letter from "./components/Letter/Letter";
import GiftBox from "./components/GiftBox/GiftBox";
import Cake from "./components/Cake/Cake";
import Fireworks from "./components/Fireworks/Fireworks";
function App() {

  const [loading, setLoading] = useState(true);
  const [screen, setScreen] = useState("welcome");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  switch (screen) {
    case "welcome":
      return (
        <Welcome
          onOpen={() => setScreen("hero")}
        />
      );

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
      onReplay={() => setScreen("welcome")}
    />
  );
    default:
      return null;
  }
}

export default App;