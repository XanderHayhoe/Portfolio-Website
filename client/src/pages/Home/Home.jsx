import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", padding: "50px 0" }}>Welcome Home</h1>
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
                  backgroundColor: "gray",
                }}
              />
            </>
          ) : (
            <>
              <div
                style={{
                  width: "45%",
                  height: "300px",
                  backgroundColor: "gray",
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
