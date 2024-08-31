import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [text, setText] = useState("");
  const fullText = "Hello World, I'm Xander!";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(intervalId);
    };
  }, []);

  const contentItems = [
    { id: 1, title: "Section 1", description: "Description for section 1" },
    { id: 2, title: "Section 2", description: "Description for section 2" },
    { id: 3, title: "Section 3", description: "Description for section 3" },
    { id: 4, title: "Section 4", description: "Description for section 4" },
  ];

  return (
    <div
      style={{
        padding: "0 5%",
        backgroundImage: "url('/portfolio-site-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          padding: "10px 0",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "4rem",
          fontWeight: "bold",
        }}
      >
        {text}
      </h1>
      {contentItems.map((item, index) => (
        <motion.div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "100px",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: scrollY > index * 300 ? 1 : 0,
            y: scrollY > index * 300 ? 0 : 50,
          }}
          transition={{ duration: 0.5 }}
        >
          {index % 2 === 0 ? (
            <>
              <div style={{ width: "45%" }}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div
                style={{
                  width: "45%",
                  height: "300px",
                  backgroundColor: "rgba(128, 128, 128, 0.7)",
                }}
              />
            </>
          ) : (
            <>
              <div
                style={{
                  width: "45%",
                  height: "300px",
                  backgroundColor: "rgba(128, 128, 128, 0.7)",
                }}
              />
              <div style={{ width: "45%" }}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Home;
