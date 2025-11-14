import { useEffect, useState } from "react";
import { Link } from "react-router";

const Welcome = () => {
  const words = ["kino", "aktor", "kitob"];
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="h-screen flex items-center justify-center flex-col text-center z-50 relative custom-container">
        <h1 className="text-6xl font-bold mb-3">Salom 👋</h1>
        <p className="mt-4 text-2xl">(Yoki) arenasiga xush kelibsiz!</p>
        <p className="mt-2 text-2xl mb-10">
          Bu yerda siz o'zingiz yoqtirgan{" "}
          <span className="bg-[#badfdb] px-2">{currentWord}</span> larni
          bir-biriga qarshi kurashishga yuborishingiz mumkin. ⚔️
        </p>
        <Link to={"/battle"} className="button">
          Arena
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
