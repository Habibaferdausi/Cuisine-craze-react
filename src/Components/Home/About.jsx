import React from "react";

const About = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center   bg-transparent relative rounded flex items-center "
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19705.jpg?w=826&t=st=1683877961~exp=1683878561~hmac=d20b060babf427fee9b987527c85d4894eedf241b66b872796270e13f8f8dc5a)`,
          height: "200px",
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        <div className="text-start rounded flex items-center relative">
          <h1 className="text-white text-2xl lg:text-5xl lg:ms-5 lg:ps  p-4  mb-5 mt-12 font-semibold ">
            About Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
