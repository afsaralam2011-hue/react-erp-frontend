// src/components/departments/Production/ProductionDashboard.jsx
import React, { useState } from "react";
import { 
  FiPackage, FiActivity, FiTrendingUp, FiBarChart2,
  FiSettings, FiClock, FiCheckCircle, FiAlertCircle,
  FiArrowRight, FiExternalLink, FiFolder, FiHome
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProductionDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  // === بہتر فنکشن: Production Sections page پر navigate کرنے کے لیے ===
  const handleOpenProductionSections = () => {
    navigate('/production-sections');
  };

  // === اضافی: Individual sections پر جانے کے لیے ===
  const handleOpenSection = (sectionName) => {
    navigate(`/production-sections/${sectionName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const productionStats = [
    { 
      label: "Daily Output", 
      value: "2,850", 
      change: "+15%", 
      icon: <FiPackage />, 
      color: "#f59e0b",
      description: "Units produced today"
    },
    { 
      label: "Efficiency", 
      value: "92%", 
      change: "+3%", 
      icon: <FiActivity />, 
      color: "#10b981",
      description: "Overall production efficiency"
    },
    { 
      label: "Downtime", 
      value: "2%", 
      change: "-1%", 
      icon: <FiClock />, 
      color: "#ef4444",
      description: "Machine downtime percentage"
    },
    { 
      label: "Quality Pass", 
      value: "98.5%", 
      change: "+0.5%", 
      icon: <FiCheckCircle />, 
      color: "#3b82f6",
      description: "Quality inspection pass rate"
    },
  ];

  const productionLines = [
    { 
      id: 1, 
      name: "Flattening Line", 
      status: "Running", 
      output: "1,250", 
      efficiency: "94%",
      section: "flattening"
    },
    { 
      id: 2, 
      name: "Spiral Line", 
      status: "Running", 
      output: "850", 
      efficiency: "90%",
      section: "spiral" 
    },
    { 
      id: 3, 
      name: "Galvanizing Line", 
      status: "Maintenance", 
      output: "0", 
      efficiency: "0%",
      section: "galvanizing"
    },
    { 
      id: 4, 
      name: "PVC Coating", 
      status: "Running", 
      output: "750", 
      efficiency: "92%",
      section: "pvc-coating"
    },
    { 
      id: 5, 
      name: "Cutting & Packing", 
      status: "Running", 
      output: "1,200", 
      efficiency: "95%",
      section: "cutting-packing"
    },
    { 
      id: 6, 
      name: "Finished Goods", 
      status: "Running", 
      output: "2,000", 
      efficiency: "97%",
      section: "finished-goods"
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* Header Section */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
        flexWrap: "wrap",
        gap: "20px"
      }}>
        <div>
          <h1 style={{ 
            margin: "0", 
            fontSize: "32px", 
            color: "#1e293b",
            display: "flex",
            alignItems: "center",
            gap: "15px"
          }}>
            <div style={{
              width: "60px",
              height: "60px",
              background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white"
            }}>
              <FiPackage size={28} />
            </div>
            Production Department Dashboard
          </h1>
          <p style={{ 
            margin: "10px 0 0 75px", 
            color: "#64748b",
            fontSize: "16px"
          }}>
            Real-time monitoring, analytics and management of production operations
          </p>
        </div>
        
        {/* Main Action Button */}
        <button
          onClick={handleOpenProductionSections}
          style={{
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            color: "white",
            border: "none",
            padding: "14px 32px",
            borderRadius: "12px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "16px",
            fontWeight: "600",
            boxShadow: "0 4px 15px rgba(16, 185, 129, 0.4)",
            transition: "all 0.3s ease",
            minWidth: "250px",
            justifyContent: "center"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = "0 8px 25px rgba(16, 185, 129, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 15px rgba(16, 185, 129, 0.4)";
          }}
        >
          <FiFolder style={{ fontSize: "20px" }} />
          <span>Manage Production Sections</span>
          <FiArrowRight style={{ fontSize: "18px" }} />
        </button>
      </div>

      {/* Quick Stats Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginBottom: "30px"
      }}>
        {productionStats.map((stat, index) => (
          <div 
            key={index} 
            style={{
              background: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "1px solid #e2e8f0"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-5px)";
              e.target.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
              e.target.style.borderColor = stat.color;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
              e.target.style.borderColor = "#e2e8f0";
            }}
            onClick={handleOpenProductionSections}
          >
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between", 
              marginBottom: "15px" 
            }}>
              <div style={{
                width: "50px",
                height: "50px",
                background: `${stat.color}15`,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: stat.color,
                fontSize: "24px"
              }}>
                {stat.icon}
              </div>
              <span style={{
                fontSize: "14px",
                fontWeight: "600",
                color: stat.color,
                background: `${stat.color}15`,
                padding: "5px 12px",
                borderRadius: "20px"
              }}>
                {stat.change}
              </span>
            </div>
            <div style={{ 
              fontSize: "30px",
              fontWeight: "700",
              color: "#1e293b",
              marginBottom: "5px"
            }}>
              {stat.value}
            </div>
            <div style={{ 
              fontSize: "16px",
              fontWeight: "600",
              color: "#1e293b",
              marginBottom: "8px"
            }}>
              {stat.label}
            </div>
            <div style={{ 
              fontSize: "14px",
              color: "#64748b",
              lineHeight: "1.4"
            }}>
              {stat.description}
            </div>
          </div>
        ))}
      </div>

      {/* Production Lines Section */}
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        marginBottom: "30px",
        border: "1px solid #e2e8f0"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
          flexWrap: "wrap",
          gap: "15px"
        }}>
          <div>
            <h2 style={{ 
              margin: "0 0 8px 0", 
              fontSize: "22px", 
              color: "#1e293b",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <FiActivity style={{ color: "#10b981" }} />
              Production Lines Status
            </h2>
            <p style={{ margin: "0", color: "#64748b", fontSize: "15px" }}>
              6 active production lines • Real-time monitoring
            </p>
          </div>
          
          <div style={{ display: "flex", gap: "15px" }}>
            <button
              onClick={handleOpenProductionSections}
              style={{
                background: "#3b82f6",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#2563eb";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#3b82f6";
                e.target.style.transform = "translateY(0)";
              }}
            >
              <FiFolder /> All Sections
            </button>
            
            <button
              onClick={() => navigate('/dashboard')}
              style={{
                background: "transparent",
                color: "#64748b",
                border: "2px solid #e2e8f0",
                padding: "12px 24px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#f8fafc";
                e.target.style.borderColor = "#cbd5e1";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.borderColor = "#e2e8f0";
              }}
            >
              <FiHome /> Main Dashboard
            </button>
          </div>
        </div>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "20px" 
        }}>
          {productionLines.map(line => (
            <div 
              key={line.id} 
              style={{
                padding: "24px",
                background: line.status === "Running" ? "#f0fdf4" : 
                           line.status === "Maintenance" ? "#fffbeb" : "#fef2f2",
                borderRadius: "12px",
                border: `2px solid ${line.status === "Running" ? "#10b981" : 
                        line.status === "Maintenance" ? "#f59e0b" : "#ef4444"}`,
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
              onClick={() => handleOpenSection(line.section)}
            >
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "flex-start", 
                marginBottom: "20px" 
              }}>
                <div>
                  <h3 style={{ 
                    margin: "0 0 8px 0", 
                    fontSize: "18px", 
                    color: "#1e293b",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                  }}>
                    <div style={{
                      width: "12px",
                      height: "12px",
                      background: line.status === "Running" ? "#10b981" : 
                                 line.status === "Maintenance" ? "#f59e0b" : "#ef4444",
                      borderRadius: "50%"
                    }} />
                    {line.name}
                  </h3>
                  <p style={{ 
                    margin: "0", 
                    fontSize: "13px", 
                    color: "#64748b",
                    fontFamily: "monospace"
                  }}>
                    Line ID: PROD-{line.id.toString().padStart(3, '0')}
                  </p>
                </div>
                <span style={{
                  padding: "6px 16px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: "600",
                  background: line.status === "Running" ? "#d1fae5" : 
                             line.status === "Maintenance" ? "#fef3c7" : "#fee2e2",
                  color: line.status === "Running" ? "#059669" : 
                        line.status === "Maintenance" ? "#d97706" : "#dc2626",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <div style={{
                    width: "8px",
                    height: "8px",
                    background: line.status === "Running" ? "#059669" : 
                               line.status === "Maintenance" ? "#d97706" : "#dc2626",
                    borderRadius: "50%",
                    animation: line.status === "Running" ? "pulse 1.5s infinite" : "none"
                  }} />
                  {line.status}
                </span>
              </div>
              
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "1fr 1fr", 
                gap: "20px",
                marginBottom: "20px"
              }}>
                <div>
                  <div style={{ 
                    fontSize: "14px", 
                    color: "#64748b", 
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <FiPackage size={16} /> Output
                  </div>
                  <div style={{ 
                    fontSize: "24px", 
                    fontWeight: "700", 
                    color: "#1e293b",
                    display: "flex",
                    alignItems: "baseline"
                  }}>
                    {line.output}
                    <span style={{ 
                      fontSize: "15px", 
                      fontWeight: "normal", 
                      color: "#64748b",
                      marginLeft: "6px"
                    }}>
                      units
                    </span>
                  </div>
                </div>
                <div>
                  <div style={{ 
                    fontSize: "14px", 
                    color: "#64748b", 
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <FiTrendingUp size={16} /> Efficiency
                  </div>
                  <div style={{ 
                    fontSize: "24px", 
                    fontWeight: "700", 
                    color: "#10b981" 
                  }}>
                    {line.efficiency}
                  </div>
                </div>
              </div>
              
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "18px",
                borderTop: "1px solid rgba(0, 0, 0, 0.1)"
              }}>
                <span style={{
                  fontSize: "13px",
                  color: "#64748b",
                  fontStyle: "italic"
                }}>
                  Click to view details
                </span>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#3b82f6",
                  fontWeight: "500"
                }}>
                  <span>View Section</span>
                  <FiArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Information Panel */}
      <div style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        padding: "25px",
        borderRadius: "12px",
        border: "2px solid #e2e8f0",
        marginTop: "20px"
      }}>
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "20px", 
          marginBottom: "20px" 
        }}>
          <div style={{
            width: "60px",
            height: "60px",
            background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "28px"
          }}>
            <FiFolder />
          </div>
          <div>
            <h3 style={{ 
              margin: "0 0 8px 0", 
              fontSize: "20px", 
              color: "#1e293b" 
            }}>
              Production Sections Management
            </h3>
            <p style={{ 
              margin: "0", 
              color: "#64748b", 
              fontSize: "15px",
              lineHeight: "1.5"
            }}>
              This dashboard provides an overview of all production operations. 
              Click on any card or use the buttons above to navigate to specific production sections for detailed management.
            </p>
          </div>
        </div>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          marginTop: "25px"
        }}>
          <div style={{
            background: "white",
            padding: "18px",
            borderRadius: "10px",
            borderLeft: "4px solid #f59e0b",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
          }}>
            <div style={{ fontSize: "14px", color: "#64748b", marginBottom: "8px" }}>
              Current Location
            </div>
            <div style={{ 
              fontSize: "16px", 
              fontWeight: "600", 
              color: "#1e293b"
            }}>
              Production Dashboard
            </div>
          </div>
          
          <div style={{
            background: "white",
            padding: "18px",
            borderRadius: "10px",
            borderLeft: "4px solid #10b981",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
          }}>
            <div style={{ fontSize: "14px", color: "#64748b", marginBottom: "8px" }}>
              Next Navigation
            </div>
            <div style={{ 
              fontSize: "16px", 
              fontWeight: "600", 
              color: "#1e293b"
            }}>
              Production Sections
            </div>
          </div>
          
          <div style={{
            background: "white",
            padding: "18px",
            borderRadius: "10px",
            borderLeft: "4px solid #8b5cf6",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
          }}>
            <div style={{ fontSize: "14px", color: "#64748b", marginBottom: "8px" }}>
              Total Sections
            </div>
            <div style={{ 
              fontSize: "16px", 
              fontWeight: "600", 
              color: "#1e293b"
            }}>
              6 Sections
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add CSS animation for pulse effect
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;
document.head.appendChild(style);

export default ProductionDashboard;