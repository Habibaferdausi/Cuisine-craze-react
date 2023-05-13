import Aos from "aos";
import React, { useEffect, useState } from "react";

const About = () => {
  const [dailyMeal, setDailyMeal] = useState(500);
  const [happyClients, setHappyClients] = useState(450);
  const [parcelToday, setParcelToday] = useState(90);
  const [onlineStore, setOnlineStore] = useState(50);

  useEffect(() => {
    Aos.init({
      once: true,
      easing: "ease-in-out",
      duration: 1000,
    });

    const interval = setInterval(() => {
      setDailyMeal((dailyMeal) => Math.min(dailyMeal + 1, 600));
      setHappyClients((happyClients) => Math.min(happyClients + 1, 550));
      setParcelToday((parcelToday) => Math.min(parcelToday + 1, 170));
      setOnlineStore((onlineStore) => Math.min(onlineStore + 2, 110));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className="bg-cover bg-center bg-transparent relative rounded flex items-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)`,
          height: "300px",
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

        <div className="text-center rounded absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-2xl lg:text-5xl lg:p-4 font-semibold">
            About Us
          </h1>
        </div>
      </div>
      <div
        className="flex flex-wrap mt-10 justify-center "
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/various-vegetables-black-table-with-space-message_1220-616.jpg?w=826&t=st=1683966052~exp=1683966652~hmac=74b23f13ead9b895866cd3e71955a05dc007a2974bcddbad73977ec77555f665')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div
          className="w-1/4 p-4 text-center flex justify-center flex-col items-center"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold">DAILY MEAL</h2>
          <p className="text-2xl font-semibold">
            <span className="count">{dailyMeal}</span>
          </p>
        </div>
        <div
          className="w-1/4 p-4 text-center flex justify-center flex-col items-center"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold">HAPPY CLIENTS</h2>
          <p className="text-2xl font-semibold">
            <span className="count">{happyClients}</span>
          </p>
        </div>
        <div
          className="w-1/4 p-4 text-center flex   flex-col justify-center items-center"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold">PERCEL TODAY</h2>
          <p className="text-2xl font-semibold">
            <span className="count">{parcelToday}</span>
          </p>
        </div>
        <div
          className="w-1/4 p-4 text-center flex justify-center  flex-col items-center"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold">ONLINE STORE</h2>
          <p className="text-2xl font-semibold">
            <span className="count">{onlineStore}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
