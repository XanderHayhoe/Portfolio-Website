import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProjectBox = ({ image, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={{
        width: "30%",
        margin: "1.5%",
        backgroundColor: "white",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={image}
        alt="Project"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div style={{ padding: "15px" }}>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [text, setText] = useState("");
  const fullText = "My Portfolio";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const projects = [
    {
      image: "/project1.jpg",
      description: "Project 1 description",
    },
    { image: "/project2.jpg", description: "Project 2 description" },
    { image: "/project3.jpg", description: "Project 3 description" },
    { image: "/project4.jpg", description: "Project 4 description" },
    { image: "/project5.jpg", description: "Project 5 description" },
    { image: "/project6.jpg", description: "Project 6 description" },
    { image: "/project7.jpg", description: "Project 7 description" },
    { image: "/project8.jpg", description: "Project 8 description" },
    { image: "/project9.jpg", description: "Project 9 description" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "4rem",
          fontWeight: "bold",
          color: "white",
        }}
      >
        {text}
      </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {projects.map((project, index) => (
          <ProjectBox
            key={index}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
