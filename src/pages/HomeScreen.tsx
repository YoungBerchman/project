import React, { useEffect, useState } from "react";
import { FaRepeat } from "react-icons/fa6";

const HomeScreen = () => {
  const [sec, setSec] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [hr, setHr] = useState<number>(0);
  const handleCount = () => {
    setSec((el) => el + 1);
  };
  useEffect(() => {
    const x = setTimeout(() => {
      handleCount();
    }, 1000);
    return () => clearTimeout(x);
  }, [sec]);
  useEffect(() => {
    if (sec === 60) {
      setMin((el) => el + 1);
      setSec(0);
    }
  }, [sec]);
  useEffect(() => {
    if (min === 60) {
      setHr((el) => el + 1);
      setMin(0);
    }
  }, [min]);
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="w-[35%] h-[40%] rounded-md bg-black flex justify-center items-center text-white gap-3">
        {String(sec).padStart(2, "0")} : {String(min).padStart(2, "0")} :{" "}
        {String(hr).padStart(2, "0")}
      </div>
      <div className="mt-3">
        <FaRepeat
          onClick={() => {
            setSec(0);
            setMin(0);
            setHr(0);
          }}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
