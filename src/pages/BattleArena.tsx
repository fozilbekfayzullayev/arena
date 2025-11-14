import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { data } from "../../public/db";

interface Data {
  id: number;
  name: string;
  img: string;
}

const BattleArena = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [roundIndex, setRoundIndex] = useState<number>(1);
  const [winner, setWinner] = useState<Data | null>(data[0]);

  const nextRound = () => {
    if (!selected) return;
    const newWinner = data.find((item) => item.name === selected) ?? winner;
    setWinner(newWinner);
    setRoundIndex(roundIndex + 1);
    setSelected(null);
  };

  const isFinished = roundIndex >= data.length;

  return (
    <div className="App min-h-screen w-full bg-white relative">
      {/* Dark Sphere Grid Background */}
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

      <div className="custom-container">
        {!isFinished && winner && (
          <div className="arena">
            <h1 className="heading">Qaysi biri ... ?</h1>
            <div className="visual">
              <motion.label
                className={`poster-label ${
                  selected === winner.name ? "selected" : ""
                }`}
                key={`${winner.id}-${roundIndex}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <input
                  type="radio"
                  name="1"
                  value={winner.name}
                  checked={selected === winner.name}
                  onChange={(e) => setSelected(e.target.value)}
                  style={{ display: "none" }}
                />
                <img
                  src={winner.img}
                  alt={winner.name}
                  className="poster-img"
                  width={200}
                />
                <p>{winner.name}</p>
              </motion.label>

              <p className="text">yoki</p>

              <motion.label
                className={`poster-label ${
                  selected === data[roundIndex].name ? "selected" : ""
                }`}
                key={data[roundIndex].id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <input
                  type="radio"
                  name="1"
                  value={data[roundIndex].name}
                  checked={selected === data[roundIndex].name}
                  onChange={(e) => setSelected(e.target.value)}
                  className="visually-hidden"
                />
                <img
                  src={data[roundIndex].img}
                  alt={data[roundIndex].name}
                  className="poster-img"
                  width={200}
                />
                <p>{data[roundIndex].name}</p>
              </motion.label>
            </div>

            <button
              className={`button ${selected ? "" : "opacity-60"}`}
              onClick={nextRound}
              disabled={!selected}
            >
              Keyingi
            </button>
          </div>
        )}

        {isFinished && winner && (
          <div className="podium">
            <motion.img
              className="winner-img"
              src={winner.img}
              alt={winner.name}
              width={450}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            />
            <p className="winner-name mb-3 bg-amber-200/50 px-4 py-2 rounded-lg">
              G'olib 🏆: {winner.name}
            </p>
            <Link className="replay-btn" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BattleArena;
