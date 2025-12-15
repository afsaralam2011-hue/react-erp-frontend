import { useState, useEffect } from "react";
import { supabase } from "../../../supabaseClient";

export default function SpiralPage() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchRecords = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("spiral_section")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setErrorMessage(error.message);
        setRecords([]);
      } else {
        setRecords(data);
        setErrorMessage("");
      }
    } catch (err) {
      setErrorMessage(err.message);
      setRecords([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {loading ? (
        <p>Loading records...</p>
      ) : errorMessage ? (
        <p className="text-red-600">{errorMessage}</p>
      ) : records.length === 0 ? (
        <p className="text-gray-500">کوئی ریکارڈ نہیں ملا۔</p>
      ) : (
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-blue-600 text-white">
            <tr>
              {["Section", "Machine ID", "Machine No", "Item", "Qty", "Coil Size", "Shift", "Operator", "Efficiency", "Remarks"].map((h) => (
                <th key={h} className="px-4 py-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((rec) => (
              <tr key={rec.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{rec.section_name}</td>
                <td className="px-4 py-2">{rec.machine_id}</td>
                <td className="px-4 py-2">{rec.machine_no}</td>
                <td className="px-4 py-2">{rec.item_name}</td>
                <td className="px-4 py-2">{rec.production_quantity}</td>
                <td className="px-4 py-2">{rec.coil_size}</td>
                <td className="px-4 py-2">{rec.shift}</td>
                <td className="px-4 py-2">{rec.operator_name}</td>
                <td className="px-4 py-2">{rec.efficiency}</td>
                <td className="px-4 py-2">{rec.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
