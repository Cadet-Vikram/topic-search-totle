import React, { useState } from 'react';

const topicsData = [
  { id: 1, name: "Thermodynamics", category: "Physics", description: "Study of heat and temperature and their relation to energy and work" },
  { id: 2, name: "Calculus", category: "Mathematics", description: "Study of the structure, properties, and reactions of organic compounds" },
  { id: 3, name: "Organic Chemistry", category: "Chemistry", description: "Branch of mathematics focused on limits, functions, derivatives, and integrals" },
  { id: 4, name: "World History", category: "History", description: "Study of molecular basis of biological activity between biomolecules" },
  { id: 5, name: "Microeconomics", category: "Economics", description: "Fundamental theory in physics that describes nature at the smallest scales" },
  { id: 6, name: "Linear Algebra", category: "Mathematics", description: "Branch of mathematics concerning linear equations and linear maps" },
  { id: 7, name: "Thermal Physics", category: "Physics", description: "Study of heat, temperature, and energy transfer" },
  { id: 8, name: "Biochemistry", category: "Chemistry", description: "Study of chemical processes within and relating to living organisms" }
];

const TopicSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoverInput, setHoverInput] = useState(false);
  const [hoverCard, setHoverCard] = useState(null);  // Track which card is hovered

  const filteredTopics = topicsData.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>TOPIC BROWSER</h1>

        <input
          type="text"
          placeholder="🔍 Search topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            ...styles.input,
            borderColor: hoverInput ? "#0018A8" : "#ccc",
          }}
          onMouseEnter={() => setHoverInput(true)}
          onMouseLeave={() => setHoverInput(false)}
        />

        <div style={styles.grid}>
          {filteredTopics.length > 0 ? (
            filteredTopics.map(topic => (
              <div
                key={topic.id}
                style={{
                  ...styles.card,
                  transform: hoverCard === topic.id ? "scale(1.05)" : "scale(1)",
                  boxShadow: hoverCard === topic.id ? "0 6px 12px rgba(0,0,0,0.2)" : "0 4px 10px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={() => setHoverCard(topic.id)}
                onMouseLeave={() => setHoverCard(null)}
              >
                <h3 style={styles.cardTitle}>{topic.name}</h3>
                <p style={styles.cardCategory}>{topic.category}</p>
                <p style={styles.cardDescription}>{topic.description}</p>
              </div>
            ))
          ) : (
            <p style={styles.noResult}>No topics found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(to right, #020024,#090979,#00D4FF)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  },
  container: {
    maxWidth: "800px",
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    marginBottom: "25px",
    textAlign: "center",
    color: "#2c3e50",
    fontWeight: "600",
  },
  input: {
    width: "90%",
    padding: "12px 16px",
    fontSize: "16px",
    marginBottom: "30px",
    border: "2px solid",
    borderRadius: "8px",
    outline: "none",
    transition: "0.3s",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#f4f6f8",
    padding: "20px",
    borderRadius: "10px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardTitle: {
    fontSize: "18px",
    marginBottom: "8px",
    color: "#333",
  },
  cardCategory: {
    fontSize: "13px",
    color: "#0018A8",
    marginBottom: "10px",
    backgroundColor: "#e0f7fa",
    display: "inline-block",
    padding: "5px 10px",
    borderRadius: "12px",
  },
  cardDescription: {
    fontSize: "14px",
    color: "#777",
  },
  noResult: {
    gridColumn: "1 / -1",
    textAlign: "center",
    color: "#999",
    fontWeight: "500",
  },
};

export default TopicSearch;
