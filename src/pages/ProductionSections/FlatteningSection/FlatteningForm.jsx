// src/pages/ProductionSections/FlatteningSection/FlatteningForm.jsx
import React, { useState } from 'react';
import { 
  FiSave, FiX, FiPackage, FiArrowLeft,
  FiCalendar, FiUser, FiSettings
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const FlatteningForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    section_name: '',
    machine_id: '',
    machine_no: '',
    item_name: '',
    production_quantity: '',
    coil_size: '',
    shift: '',
    operator_name: '',
    efficiency: '',
    remarks: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const coilSizes = ['100kg', '200kg', '300kg', '400kg', '500kg', '600kg', '700kg', '800kg'];
  const shifts = ['Morning', 'Evening', 'Night'];
  const items = [
    'Copper Wire 1.5mm',
    'Copper Wire 2mm', 
    'Copper Wire 2.5mm',
    'Aluminum Wire 1.5mm',
    'Aluminum Wire 2mm',
    'Aluminum Wire 3mm',
    'Steel Wire 1.5mm',
    'Steel Wire 2mm',
    'Brass Wire 2mm',
    'Brass Wire 2.5mm'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.section_name.trim()) newErrors.section_name = 'Section name is required';
    if (!formData.machine_id.trim()) newErrors.machine_id = 'Machine ID is required';
    if (!formData.machine_no.trim()) newErrors.machine_no = 'Machine number is required';
    if (!formData.item_name) newErrors.item_name = 'Item name is required';
    if (!formData.production_quantity) {
      newErrors.production_quantity = 'Production quantity is required';
    } else if (isNaN(formData.production_quantity) || formData.production_quantity <= 0) {
      newErrors.production_quantity = 'Please enter a valid positive number';
    }
    if (!formData.coil_size) newErrors.coil_size = 'Coil size is required';
    if (!formData.shift) newErrors.shift = 'Shift is required';
    if (!formData.operator_name.trim()) newErrors.operator_name = 'Operator name is required';
    if (!formData.efficiency) {
      newErrors.efficiency = 'Efficiency is required';
    } else if (isNaN(formData.efficiency) || formData.efficiency < 0 || formData.efficiency > 100) {
      newErrors.efficiency = 'Efficiency must be between 0 and 100';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form data to submit:', {
        ...formData,
        production_quantity: parseInt(formData.production_quantity),
        efficiency: `${formData.efficiency}%`,
        created_at: new Date().toISOString()
      });

      alert('Flattening section record created successfully!');
      navigate('/production-sections/flattening');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to create record. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
      navigate('/production-sections/flattening');
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all fields to default?')) {
      setFormData({
        section_name: '',
        machine_id: '',
        machine_no: '',
        item_name: '',
        production_quantity: '',
        coil_size: '',
        shift: '',
        operator_name: '',
        efficiency: '',
        remarks: ''
      });
      setErrors({});
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
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
            onClick={() => navigate('/production-sections/flattening')}
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
            <FiArrowLeft /> Back to Flattening Section
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
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <FiPackage size={28} />
            </div>
            New Flattening Record
          </h1>
          <p style={{ 
            margin: '10px 0 0 75px', 
            color: '#64748b',
            fontSize: '16px'
          }}>
            Create a new record for the flattening section
          </p>
        </div>
      </div>

      {/* Form Container */}
      <form onSubmit={handleSubmit}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '30px',
          marginBottom: '30px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            marginBottom: '30px'
          }}>
            {/* Section Name */}
            <div>
              <label style={{
                marginBottom: '10px',
                fontWeight: '600',
                color: '#1e293b',
                fontSize: '15px',
                display: 'block'
              }}>
                Section Name *
              </label>
              <input
                type="text"
                name="section_name"
                value={formData.section_name}
                onChange={handleChange}
                placeholder="e.g., Flattening Line 1"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: '10px',
                  border: `1px solid ${errors.section_name ? '#ef4444' : '#e2e8f0'}`,
                  background: '#f8fafc',
                  fontSize: '15px',
                  color: '#1e293b'
                }}
              />
              {errors.section_name && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '13px',
                  marginTop: '5px'
                }}>
                  ⚠ {errors.section_name}
                </div>
              )}
            </div>

            {/* Machine ID */}
            <div>
              <label style={{
                marginBottom: '10px',
                fontWeight: '600',
                color: '#1e293b',
                fontSize: '15px',
                display: 'block'
              }}>
                Machine ID *
              </label>
              <input
                type="text"
                name="machine_id"
                value={formData.machine_id}
                onChange={handleChange}
                placeholder="e.g., FL-001"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: '10px',
                  border: `1px solid ${errors.machine_id ? '#ef4444' : '#e2e8f0'}`,
                  background: '#f8fafc',
                  fontSize: '15px',
                  color: '#1e293b'
                }}
              />
              {errors.machine_id && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '13px',
                  marginTop: '5px'
                }}>
                  ⚠ {errors.machine_id}
                </div>
              )}
            </div>

            {/* Machine Number */}
            <div>
              <label style={{
                marginBottom: '10px',
                fontWeight: '600',
                color: '#1e293b',
                fontSize: '15px',
                display: 'block'
              }}>
                Machine Number *
              </label>
              <input
                type="text"
                name="machine_no"
                value={formData.machine_no}
                onChange={handleChange}
                placeholder="e.g., M-101"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: '10px',
                  border: `1px solid ${errors.machine_no ? '#ef4444' : '#e2e8f0'}`,
                  background: '#f8fafc',
                  fontSize: '15px',
                  color: '#1e293b'
                }}
              />
              {errors.machine_no && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '13px',
                  marginTop: '5px'
                }}>
                  ⚠ {errors.machine_no}
                </div>
              )}
            </div>

            {/* Item Name */}
            <div>
              <label style={{
                marginBottom: '10px',
                fontWeight: '600',
                color: '#1e293b',
                fontSize: '15px',
                display: 'block'
              }}>
                Item Name *
              </label>
              <select
                name="item_name"
                value={formData.item_name}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: '10px',
                  border: `1px solid ${errors.item_name ? '#ef4444' : '#e2e8f0'}`,
                  background: '#f8fafc',
                  fontSize: '15px',
                  color: '#1e293b',
                  cursor: 'pointer'
                }}
              >
                <option value="">Select an item</option>
                {items.map(item => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
              {errors.item_name && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '13px',
                  marginTop: '5px'
                }}>
                  ⚠ {errors.item_name}
                </div>
              )}
            </div>

            {/* Production Quantity */}
            <div>
              <label style={{
                marginBottom: '10px',
                fontWeight: '600',
                color: '#1e293b',
                fontSize: '15px',
                display: 'block'
              }}>
                Production Quantity *
              </label>
              <input
                type="number"
                name="production_quantity"
                value={formData.production_quantity}
                onChange={handleChange}
                placeholder="e.g., 1250"
                min="1"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: '10px',
                  border: `1px solid ${errors.production_quantity ? '#ef4444' : '#e2e8f0'}`,
                  background: '#f8fafc',
                  fontSize: '15px',
                  color: '#1e293b'
                }}
              />
              {errors.production_quantity && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '13px',
                  marginTop: '5px'
                }}>
                  ⚠ {errors.production_quantity}
                </div>
              )}
            </div>

            {/* Coil Size */}
            <div>
              <label style={{
                marginBottom: '10px',
                fontWeight: '600',
                color: '#1e293b',
                fontSize: '15px',
                display: 'block'
              }}>
                Coil Size *
              </label>
              <select
                name="coil_size"
                value={formData.coil_size}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: '10px',
                  border: `1px solid ${errors.coil_size ? '#ef4444' : '#e2e8f0'}`,
                  background: '#f8fafc',
                  fontSize: '15px',
                  color: '#1e293b',
                  cursor: 'pointer'
                }}
              >
                <option value="">Select coil size</option>
                {coilSizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
              {errors.coil_size && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '13px',
                  marginTop: '5px'
                }}>
                  ⚠ {errors.coil_size}
                </div>
              )}
            </div>

            {/* Shift */}
            <div>
              <label style={{
                marginBottom: '10px',
                fontWeight: '600',
                color: '#1e293b',
                fontSize: '15px',
                display: 'block'
              }}>
                Shift *
              </label>
              <div style={{ display: 'flex', gap: '15px' }}>
                {shifts.map(shiftOption => (
                  <label
                    key={shiftOption}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 15px',
                      borderRadius: '10px',
                      border: `1px solid ${
                        errors.shift ? '#ef4444' : 
                        formData.shift === shiftOption ? '#3b82f6' : '#e2e8f0'
                      }`,
                      background: formData.shift === shiftOption ? '#eff6ff' : '#f8fafc',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <input
                      type="radio"
                      name="shift"
                      value={shiftOption}
                      checked={formData.shift === shiftOption}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                    />
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: `2px solid ${
                        formData.shift === shiftOption ? '#3b82f6' : '#94a3b8'
                      }`,
                      background: formData.shift === shiftOption ? '#3b82f6' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {formData.shift === shiftOption && (
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: 'white'
                        }} />
                      )}
                    </div>
                    <span style={{ 
                      color: formData.shift === shiftOption ? '#1e293b' : '#64748b',
                      fontWeight: formData.shift === shiftOption ? '600' : '400'
                    }}>
                      {shiftOption}
                    </span>
                  </label>
                ))}
              </div>
              {errors.shift && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '13px',
                  marginTop: '5px'
                }}>
                  ⚠ {errors.shift}
                </div>
              )}
            </div>

            {/* Operator Name */}
            <div>
              <label style={{
                marginBottom: '10px',
                fontWeight: '600',
                color: '#1e293b',
                fontSize: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <FiUser /> Operator Name *
              </label>
              <input
                type="text"
                name="operator_name"
                value={formData.operator_name}
                onChange={handleChange}
                placeholder="e.g., Ali Khan"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: '10px',
                  border: `1px solid ${errors.operator_name ? '#ef4444' : '#e2e8f0'}`,
                  background: '#f8fafc',
                  fontSize: '15px',
                  color: '#1e293b'
                }}
              />
              {errors.operator_name && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '13px',
                  marginTop: '5px'
                }}>
                  ⚠ {errors.operator_name}
                </div>
              )}
            </div>

            {/* Efficiency */}
            <div>
              <label style={{
                marginBottom: '10px',
                fontWeight: '600',
                color: '#1e293b',
                fontSize: '15px',
                display: 'block'
              }}>
                Efficiency (%) *
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <input
                  type="range"
                  name="efficiency"
                  min="0"
                  max="100"
                  value={formData.efficiency || 0}
                  onChange={handleChange}
                  style={{
                    flex: 1,
                    height: '8px',
                    borderRadius: '4px',
                    background: `linear-gradient(to right, #ef4444 0%, #f59e0b 50%, #10b981 100%)`,
                    outline: 'none'
                  }}
                />
                <div style={{
                  width: '80px',
                  padding: '10px',
                  borderRadius: '8px',
                  background: '#f8fafc',
                  border: `1px solid ${errors.efficiency ? '#ef4444' : '#e2e8f0'}`,
                  textAlign: 'center',
                  fontWeight: '600',
                  color: parseFloat(formData.efficiency) > 90 ? '#059669' : 
                         parseFloat(formData.efficiency) > 80 ? '#d97706' : '#dc2626'
                }}>
                  {formData.efficiency || 0}%
                </div>
              </div>
              <input
                type="number"
                name="efficiency"
                min="0"
                max="100"
                step="0.1"
                value={formData.efficiency}
                onChange={handleChange}
                placeholder="e.g., 94.5"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: '10px',
                  border: `1px solid ${errors.efficiency ? '#ef4444' : '#e2e8f0'}`,
                  background: '#f8fafc',
                  fontSize: '15px',
                  color: '#1e293b',
                  marginTop: '10px'
                }}
              />
              {errors.efficiency && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '13px',
                  marginTop: '5px'
                }}>
                  ⚠ {errors.efficiency}
                </div>
              )}
            </div>

            {/* Remarks */}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{
                marginBottom: '10px',
                fontWeight: '600',
                color: '#1e293b',
                fontSize: '15px',
                display: 'block'
              }}>
                Remarks
              </label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                placeholder="Enter any additional notes or remarks..."
                rows="4"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  background: '#f8fafc',
                  fontSize: '15px',
                  color: '#1e293b',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          </div>

          {/* Form Actions */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '25px',
            borderTop: '1px solid #e2e8f0'
          }}>
            <button
              type="button"
              onClick={handleReset}
              style={{
                background: 'transparent',
                border: '2px solid #e2e8f0',
                padding: '12px 24px',
                borderRadius: '10px',
                color: '#64748b',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontWeight: '600',
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
              <FiSettings /> Reset Form
            </button>

            <div style={{ display: 'flex', gap: '15px' }}>
              <button
                type="button"
                onClick={handleCancel}
                style={{
                  background: 'transparent',
                  border: '2px solid #e2e8f0',
                  padding: '12px 28px',
                  borderRadius: '10px',
                  color: '#64748b',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: '600',
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
                <FiX /> Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting 
                    ? '#94a3b8' 
                    : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  border: 'none',
                  padding: '12px 32px',
                  borderRadius: '10px',
                  color: 'white',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)',
                  transition: 'all 0.3s ease',
                  opacity: isSubmitting ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.4)';
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: 'white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Saving...
                  </>
                ) : (
                  <>
                    <FiSave size={20} /> Save Record
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Info Card */}
      <div style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        padding: '25px',
        borderRadius: '12px',
        border: '1px solid #bae6fd'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '20px', 
          marginBottom: '20px' 
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: '#0ea5e9',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px'
          }}>
            <FiCalendar />
          </div>
          <div>
            <h3 style={{ 
              margin: '0 0 8px 0', 
              fontSize: '20px', 
              color: '#0369a1' 
            }}>
              Supabase Integration Ready
            </h3>
            <p style={{ 
              margin: '0', 
              color: '#0c4a6e', 
              fontSize: '15px',
              lineHeight: '1.5'
            }}>
              This form will save data to Supabase table "FlatteningSections"
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default FlatteningForm;