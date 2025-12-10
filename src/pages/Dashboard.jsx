import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Sidebar کے لیے hamburger icon
import { Tooltip } from "react-tooltip"; // Tooltip
import "react-tooltip/dist/react-tooltip.css";

// Chart.js imports – Production Department chart کے لیے
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";

// Chart.js registration
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ChartTooltip, Legend);

export default function Dashboard() {
  // Sidebar کی حالت (کھلا یا بند)
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // کون سا department select ہوا
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // Departments کی list
  const departments = [
    { name: "HR Department", icon: "👤" },
    { name: "Finance Department", icon: "💰" },
    { name: "Production Department", icon: "🏭" },
    { name: "Sales Department", icon: "📈" },
    { name: "IT Department", icon: "💻" },
    { name: "Logistics Department", icon: "🚚" },
  ];

  // Production Department کا sample chart data
  const productionData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Units Produced",
        data: [120, 150, 180, 200, 170, 190],
        backgroundColor: "rgba(255, 255, 255, 0.7)", // سفید تھوڑا transparent
      },
    ],
  };

  // Chart کی options
  const productionOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#fff" }, // تمام text سفید
      },
      title: {
        display: true,
        text: "Production Output (Units)",
        color: "#fff",
        font: { size: 18 },
      },
    },
    scales: {
      x: { ticks: { color: "#fff" }, grid: { color: "rgba(255,255,255,0.2)" } },
      y: { ticks: { color: "#fff" }, grid: { color: "rgba(255,255,255,0.2)" } },
    },
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <div
        style={{
          width: sidebarOpen ? "250px" : "80px",
          background: "hsla(187, 94%, 12%, 1.00)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          transition: "width 0.3s, box-shadow 0.3s",
          overflow: "hidden",
          position: "relative",
          boxShadow: sidebarOpen ? "4px 0 20px rgba(0,0,0,0.3)" : "2px 0 10px rgba(0,0,0,0.2)",
        }}
      >
        {/* Hamburger Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px", // بٹن ہمیشہ left side پر
            background: "none",
            border: "none",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <FiMenu />
        </button>

        {/* Departments list */}
        <ul style={{ listStyle: "none", padding: "70px 20px", flex: 1 }}>
          {departments.map((dep) => (
            <li key={dep.name} style={{ marginBottom: "15px" }}>
              <span
                data-tooltip-id={dep.name}
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={() => setSelectedDepartment(dep.name)} // Click پر select
              >
                <span style={{ marginRight: sidebarOpen ? "10px" : "0" }}>{dep.icon}</span>
                {sidebarOpen && <span>{dep.name}</span>}
              </span>
              <Tooltip id={dep.name} place="right" effect="solid">
                {dep.name}
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, position: "relative", overflow: "auto", padding: "40px" }}>
        {/* Video background – public folder سے */}
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/videos/gears.mp4" type="video/mp4" />
          آپ کا browser video tag support نہیں کرتا
        </video>

        {/* Dashboard header */}
        <h1 style={{ color: "#ffffff", fontWeight: "bold", textShadow: "0 0 10px #000" }}>
          Pakistan Wire Industries Pvt. LTD ERP Dashboard
        </h1>

        <p style={{ color: "#ffffff" }}>Click a department to see details below.</p>


        {/* Department boxes */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "30px" }}>
          {departments.map((dep) => (
            <div
              key={dep.name}
              style={{
                minWidth: "200px",
                maxWidth: "220px",
                height: "120px",
                background: "#005252ee",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px hsla(231, 95%, 23%, 0.50)",
                fontSize: "18px",
                fontWeight: "bold",
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
                color: "#ffffff",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onClick={() => setSelectedDepartment(dep.name)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 25px hsla(231, 95%, 23%, 0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 20px hsla(231, 95%, 23%, 0.50)";
              }}
            >
              <span style={{ fontSize: "32px", marginBottom: "10px" }}>{dep.icon}</span>
              {dep.name}
            </div>
          ))}
        </div>

        {/* Selected department details */}
        {selectedDepartment && (
          <div
            style={{
              marginTop: "40px",
              padding: "20px",
              background: "rgba(0, 82, 82, 0.9)",
              borderRadius: "15px",
              boxShadow: "0 4px 20px hsla(231, 96%, 21%, 0.91)",
              color: "#ffffff",
            }}
          >
            <h2>{selectedDepartment}</h2>

            {selectedDepartment === "Production Department" ? (
              <>
                {/* Chart */}
                <div style={{ maxWidth: "600px", marginTop: "20px" }}>
                  <Bar data={productionData} options={productionOptions} />
                </div>

                {/* Table */}
                <table
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    borderCollapse: "collapse",
                    color: "#fff",
                  }}
                >
                  <thead>
                    <tr>
                      <th style={{ borderBottom: "1px solid #fff", padding: "8px" }}>Month</th>
                      <th style={{ borderBottom: "1px solid #fff", padding: "8px" }}>Units Produced</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productionData.labels.map((month, index) => (
                      <tr key={month}>
                        <td style={{ padding: "8px", borderBottom: "1px solid rgba(255,255,255,0.3)" }}>{month}</td>
                        <td style={{ padding: "8px", borderBottom: "1px solid rgba(255,255,255,0.3)" }}>
                          {productionData.datasets[0].data[index]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <p>Details about {selectedDepartment} will appear here.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
