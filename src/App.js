import React, { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [branch, setBranch] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div style={styles.loginContainer}>
          <h2 style={styles.logo}>DigiTroc</h2>
          <div style={styles.card}>
            <h3 style={styles.title}>Login</h3>
            <input type="text" placeholder="Username" style={styles.input} />
            <input type="password" placeholder="Password" style={styles.input} />
            <div style={styles.checkboxContainer}>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" style={styles.label}>
                Remember me
              </label>
            </div>
            <button onClick={handleLogin} style={styles.button}>
              Login
            </button>
            <a href="#" style={styles.link}>
              Forgot Password?
            </a>
          </div>
        </div>
      ) : (
        <div style={styles.appContainer}>
          <aside style={styles.sidebar}>
            <ul style={styles.navList}>
              <li style={styles.navItem}>
                <a href="#" style={styles.navLink}>
                  Home
                </a>
              </li>
              <li style={styles.navItem}>
                <a href="#" style={styles.navLink}>
                  Masters
                </a>
              </li>
              <li style={styles.navItem}>
                <a href="#" style={styles.navLink}>
                  Help
                </a>
              </li>
            </ul>
          </aside>
          <main style={styles.mainContent}>
            <header style={styles.header}>
              <h1>DigiTroc Dashboard</h1>
            </header>
            <div style={styles.filters}>
              <div style={styles.filterItem}>
                <label>From Date:</label>
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  style={styles.dateInput}
                />
              </div>
              <div style={styles.filterItem}>
                <label>To Date:</label>
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  style={styles.dateInput}
                />
              </div>
              <div style={styles.filterItem}>
                <label>Branch:</label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  style={styles.select}
                >
                  <option value="">All</option>
                  <option value="branch1">SPL-CORPORATE</option>
                  <option value="branch2">CHENNAI</option>
                  <option value="branch3">HYDERABAD</option>
                </select>
              </div>
            </div>
            <div style={styles.main}>
              <div style={{ ...styles.card, backgroundColor: "#f8d7da" }}>
                <h3>Coupon Requested</h3>
                <p>10</p>
              </div>
              <div style={{ ...styles.card, backgroundColor: "#d1ecf1" }}>
                <h3>Coupon Approved</h3>
                <p>5</p>
              </div>
              <div style={{ ...styles.card, backgroundColor: "#d4edda" }}>
                <h3>Coupon Generated</h3>
                <p>8</p>
              </div>
              <div style={{ ...styles.card, backgroundColor: "#fff3cd" }}>
                <h3>Coupon Utilized</h3>
                <p>2</p>
              </div>
              <div style={{ ...styles.card, backgroundColor: "#cce5ff" }}>
                <h3>In Progress</h3>
                <p>12</p>
              </div>
              <div style={{ ...styles.card, backgroundColor: "#f5c6cb" }}>
                <h3>Cancelled</h3>
                <p>3</p>
              </div>
              <div style={{ ...styles.card, backgroundColor: "#e2e3e5" }}>
                <h3>Vehicles</h3>
                <p>20</p>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

const styles = {
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#f5f5f5",
  },
  logo: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#007bff",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "250px",
    margin: "10px",
  },
  appContainer: {
    display: "flex",
    height: "20vh",
  },
  sidebar: {
    width: "200px",
    background: "#007bff",
    color: "white",
    padding: "20px",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  navItem: {
    marginBottom: "10px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
    background: "#f5f5f5",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: "14px",
    color: "#666",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  link: {
    fontSize: "14px",
    color: "#007bff",
    marginTop: "10px",
    textDecoration: "none",
  },
  dashboard: {
    textAlign: "center",
    background: "#f5f5f5",
    minHeight: "20px",
  },
  header: {
    background: "#007bff",
    color: "white",
    padding: "20px",
    marginBottom: "20px",
  },
  filters: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
    gap: "15px",
  },
  filterItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  dateInput: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "5px",
  },
  select: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "5px",
  },
  main: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "200px",
    margin: "20px",
  },
};

export default App;
