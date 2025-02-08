import { useState, useEffect } from "react";

function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Chintan Vaghela</h1>
      <p className="text-xl mb-6">
        Senior Product Manager | Passionate about Data & User Experience
      </p>
      <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg">
        View My Work
      </button>
    </div>
  );
}

export default HeroSection;
