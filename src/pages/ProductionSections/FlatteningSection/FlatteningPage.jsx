// src/pages/ProductionSections/FlatteningSection/FlatteningPage.jsx
import React, { useState, useEffect } from 'react';
import { 
  FiPackage, FiEdit, FiTrash2, FiPlus, FiSearch,
  FiFilter, FiDownload, FiEye, FiRefreshCw, FiArrowLeft
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const FlatteningPage = () => {
  const navigate = useNavigate();
  const [flatteningData, setFlatteningData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterShift, setFilterShift] = useState('all');

  // Mock data - Supabase سے replace کریں
  const mockData = [
    {
      id: 1,
      section_name: "Flattening Line 1",
      machine_id: "FL-001",
      machine_no: "M-101",
      item_name: "Copper Wire 2mm",
      production_quantity: 1250,
      coil_size: "500kg",
      shift: "Morning",
      operator_name: "Ali Khan",
      efficiency: "94%",
      remarks: "Running smoothly",
      created_at: "2024-01-15 08:30:00"
    },
    {
      id: 2,
      section_name: "Flattening Line 2",
      machine_id: "FL-002",
      machine_no: "M-102",
      item_name: "Aluminum Wire 3mm",
      production_quantity: 980,
      coil_size: "300kg",
      shift: "Evening",
      operator_name: "Ahmed Raza",
      efficiency: "88%",
      remarks: "Minor maintenance needed",
      created_at: "2024-01-15 16:45:00"
    },
    {
      id: 3,
      section_name: "Flattening Line 3",
      machine_id: "FL-003",
      machine_no: "M-103",
      item_name: "Steel Wire 1.5mm",
      production_quantity: 1500,
      coil_size: "600kg",
      shift: "Night",
      operator_name: "Sara Ahmed",
      efficiency: "96%",
      remarks: "Excellent performance",
      created_at: "2024-01-14 22:15:00"
    },
    {
      id: 4,
      section_name: "Flattening Line 4",
      machine_id: "FL-004",
      machine_no: "M-104",
      item_name: "Brass Wire 2.5mm",
      production_quantity: 1100,
      coil_size: "400kg",
      shift: "Morning",
      operator_name: "Usman Malik",
      efficiency: "91%",
      remarks: "Normal operation",
      created_at: "2024-01-15 09:20:00"
    },
  ];

  useEffect(() => {
    // API call simulation
    setTimeout(() => {
      setFlatteningData(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleEdit = (id) => {
    navigate(`/production-sections/flattening/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      setFlatteningData(flatteningData.filter(item => item.id !== id));
      alert('Record deleted successfully!');
    }
  };

  const handleAddNew = () => {
    navigate('/production-sections/flattening/new');
  };

  const handleViewDetails = (id) => {
    navigate(`/production-sections/flattening/view/${id}`);
  };

  const filteredData = flatteningData.filter(item => {
    const matchesSearch = 
      item.machine_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.item_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.operator_name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesShift = filterShift === 'all' || item.shift === filterShift;
    
    return matchesSearch && matchesShift;
  });

  const shifts = ['Morning', 'Evening', 'Night'];

  return (
    <div style={{ padding: '20px' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <button
            onClick={() => navigate('/production-sections')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#64748b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              marginBottom: '10px'
            }}
          >
            <FiArrowLeft /> Back to Sections
          </button>
          <h1 style={{
            margin: '0',
            fontSize: '32px',
            color: '#1e293b',
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <FiPackage size={28} />
            </div>
            Flattening Section
          </h1>
          <p style={{ 
            margin: '10px 0 0 75px', 
            color: '#64748b',
            fontSize: '16px'
          }}>
            Wire flattening process management and monitoring
          </p>
        </div>

        <button
          onClick={handleAddNew}
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'white',
            border: 'none',
            padding: '14px 28px',
            borderRadius: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '16px',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.4)';
          }}
        >
          <FiPlus size={20} />
          Add New Record
        </button>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          borderLeft: '4px solid #f59e0b'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>
            Total Records
          </div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>
            {flatteningData.length}
          </div>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          borderLeft: '4px solid #10b981'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>
            Total Production
          </div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>
            {flatteningData.reduce((sum, item) => sum + item.production_quantity, 0).toLocaleString()} units
          </div>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          borderLeft: '4px solid #3b82f6'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>
            Avg Efficiency
          </div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#10b981' }}>
            {(
              flatteningData.reduce((sum, item) => 
                sum + parseFloat(item.efficiency), 0
              ) / flatteningData.length || 0
            ).toFixed(1)}%
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        marginBottom: '25px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        alignItems: 'center'
      }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            background: '#f8fafc',
            padding: '10px 15px',
            borderRadius: '10px',
            border: '1px solid #e2e8f0'
          }}>
            <FiSearch style={{ color: '#94a3b8', marginRight: '10px' }} />
            <input
              type="text"
              placeholder="Search by machine, item, or operator..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                width: '100%',
                fontSize: '15px',
                outline: 'none',
                color: '#1e293b'
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <FiFilter style={{ color: '#64748b' }} />
          <select
            value={filterShift}
            onChange={(e) => setFilterShift(e.target.value)}
            style={{
              padding: '10px 15px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              background: 'white',
              color: '#1e293b',
              fontSize: '15px',
              minWidth: '150px',
              cursor: 'pointer'
            }}
          >
            <option value="all">All Shifts</option>
            {shifts.map(shift => (
              <option key={shift} value={shift}>{shift}</option>
            ))}
          </select>

          <button
            onClick={() => {
              setSearchTerm('');
              setFilterShift('all');
            }}
            style={{
              background: 'transparent',
              border: '1px solid #e2e8f0',
              padding: '10px 20px',
              borderRadius: '8px',
              color: '#64748b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#f8fafc';
              e.target.style.borderColor = '#cbd5e1';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = '#e2e8f0';
            }}
          >
            <FiRefreshCw /> Reset Filters
          </button>

          <button
            onClick={() => alert('Export feature coming soon!')}
            style={{
              background: '#3b82f6',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: '500',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#2563eb';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#3b82f6';
            }}
          >
            <FiDownload /> Export Data
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        {loading ? (
          <div style={{ 
            padding: '40px', 
            textAlign: 'center', 
            color: '#64748b' 
          }}>
            Loading data...
          </div>
        ) : filteredData.length === 0 ? (
          <div style={{ 
            padding: '40px', 
            textAlign: 'center', 
            color: '#64748b' 
          }}>
            No records found. Try changing your search criteria.
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '14px'
            }}>
              <thead>
                <tr style={{ 
                  background: '#f8fafc',
                  borderBottom: '2px solid #e2e8f0'
                }}>
                  <th style={{ 
                    padding: '16px 20px', 
                    textAlign: 'left', 
                    fontWeight: '600',
                    color: '#475569'
                  }}>
                    Machine ID
                  </th>
                  <th style={{ 
                    padding: '16px 20px', 
                    textAlign: 'left', 
                    fontWeight: '600',
                    color: '#475569'
                  }}>
                    Item Name
                  </th>
                  <th style={{ 
                    padding: '16px 20px', 
                    textAlign: 'left', 
                    fontWeight: '600',
                    color: '#475569'
                  }}>
                    Quantity
                  </th>
                  <th style={{ 
                    padding: '16px 20px', 
                    textAlign: 'left', 
                    fontWeight: '600',
                    color: '#475569'
                  }}>
                    Coil Size
                  </th>
                  <th style={{ 
                    padding: '16px 20px', 
                    textAlign: 'left', 
                    fontWeight: '600',
                    color: '#475569'
                  }}>
                    Shift
                  </th>
                  <th style={{ 
                    padding: '16px 20px', 
                    textAlign: 'left', 
                    fontWeight: '600',
                    color: '#475569'
                  }}>
                    Operator
                  </th>
                  <th style={{ 
                    padding: '16px 20px', 
                    textAlign: 'left', 
                    fontWeight: '600',
                    color: '#475569'
                  }}>
                    Efficiency
                  </th>
                  <th style={{ 
                    padding: '16px 20px', 
                    textAlign: 'left', 
                    fontWeight: '600',
                    color: '#475569'
                  }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr 
                    key={item.id}
                    style={{ 
                      borderBottom: '1px solid #f1f5f9',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f8fafc';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                    }}
                  >
                    <td style={{ padding: '16px 20px', color: '#1e293b' }}>
                      <div style={{ fontWeight: '600' }}>{item.machine_id}</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>
                        {item.machine_no}
                      </div>
                    </td>
                    <td style={{ padding: '16px 20px', color: '#1e293b' }}>
                      {item.item_name}
                    </td>
                    <td style={{ padding: '16px 20px', color: '#1e293b' }}>
                      <div style={{ 
                        fontWeight: '600', 
                        color: '#059669',
                        fontSize: '15px'
                      }}>
                        {item.production_quantity.toLocaleString()}
                      </div>
                    </td>
                    <td style={{ padding: '16px 20px', color: '#1e293b' }}>
                      <span style={{
                        background: '#f0f9ff',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        color: '#0369a1'
                      }}>
                        {item.coil_size}
                      </span>
                    </td>
                    <td style={{ padding: '16px 20px' }}>
                      <span style={{
                        background: item.shift === 'Morning' ? '#fef3c7' : 
                                  item.shift === 'Evening' ? '#e0f2fe' : '#f3e8ff',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '500',
                        color: item.shift === 'Morning' ? '#d97706' : 
                              item.shift === 'Evening' ? '#0369a1' : '#7c3aed'
                      }}>
                        {item.shift}
                      </span>
                    </td>
                    <td style={{ padding: '16px 20px', color: '#1e293b' }}>
                      {item.operator_name}
                    </td>
                    <td style={{ padding: '16px 20px' }}>
                      <div style={{ 
                        fontWeight: '600',
                        color: parseFloat(item.efficiency) > 90 ? '#059669' : 
                               parseFloat(item.efficiency) > 80 ? '#d97706' : '#dc2626'
                      }}>
                        {item.efficiency}
                      </div>
                    </td>
                    <td style={{ padding: '16px 20px' }}>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                          onClick={() => handleEdit(item.id)}
                          style={{
                            background: '#fef3c7',
                            border: 'none',
                            width: '36px',
                            height: '36px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#d97706',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#fde68a';
                            e.target.style.transform = 'scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = '#fef3c7';
                            e.target.style.transform = 'scale(1)';
                          }}
                          title="Edit"
                        >
                          <FiEdit size={16} />
                        </button>
                        
                        <button
                          onClick={() => handleDelete(item.id)}
                          style={{
                            background: '#fee2e2',
                            border: 'none',
                            width: '36px',
                            height: '36px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#dc2626',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#fecaca';
                            e.target.style.transform = 'scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = '#fee2e2';
                            e.target.style.transform = 'scale(1)';
                          }}
                          title="Delete"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '25px',
        padding: '20px',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ color: '#64748b', fontSize: '14px' }}>
          Showing {filteredData.length} of {flatteningData.length} records
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              padding: '8px 16px',
              borderRadius: '8px',
              color: '#475569',
              cursor: 'pointer',
              fontSize: '14px'
            }}
            disabled
          >
            Previous
          </button>
          <button
            style={{
              background: '#3b82f6',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Next
          </button>
        </div>
      </div>

      {/* Info Box */}
      <div style={{
        marginTop: '30px',
        padding: '20px',
        background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
        borderRadius: '12px',
        border: '1px solid #fbbf24'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px', 
          marginBottom: '10px' 
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: '#f59e0b',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            <FiPackage />
          </div>
          <div>
            <h4 style={{ margin: '0', color: '#92400e' }}>
              Flattening Section Management
            </h4>
            <p style={{ margin: '5px 0 0 0', color: '#92400e', fontSize: '14px' }}>
              CRUD operations for wire flattening process data
            </p>
          </div>
        </div>
        <div style={{
          background: 'rgba(255, 255, 255, 0.7)',
          padding: '15px',
          borderRadius: '8px',
          marginTop: '15px'
        }}>
          <p style={{ 
            margin: '0', 
            color: '#57534e', 
            fontSize: '13px',
            lineHeight: '1.5'
          }}>
            <strong>Supabase Table:</strong> FlatteningSections<br />
            <strong>Next Steps:</strong> Add SpiralSection, PVCCoatingSection, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlatteningPage;
