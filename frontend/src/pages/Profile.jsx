import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import API_BASE from "../api/api";

export default function Profile() {

  const [profile, setProfile] = useState({
    full_name: "",
    age: "",
    license_number: "",
    driving_experience: "",
    vehicle_type: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const res = await fetch(`${API_BASE}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setProfile(data);
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  async function saveProfile() {

    setSaving(true);

    try {

      let res = await fetch(`${API_BASE}/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profile),
      });

      if (!res.ok) {

        res = await fetch(`${API_BASE}/profile`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(profile),
        });

      }

      setSuccess("✅ Profile saved successfully!");

setTimeout(() => {
  setSuccess("");
}, 3000);

    } catch (err) {

      console.error(err);

    }

    setSaving(false);

  }

  if (loading) {

    return (
      <AppLayout>
        <div className="flex h-[80vh] items-center justify-center">
          <h1 className="text-3xl text-white">
            Loading Profile...
          </h1>
        </div>
      </AppLayout>
    );

  }

  return (

    <AppLayout>

      <h1 className="text-4xl font-bold text-white mb-8">
        Driver Profile
      </h1>

      <div className="max-w-4xl rounded-3xl border border-white/10 bg-[#08111E] p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Input
            label="Full Name"
            value={profile.full_name}
            onChange={(e) =>
              setProfile({
                ...profile,
                full_name: e.target.value,
              })
            }
          />

          <Input
            label="Age"
            type="number"
            value={profile.age}
            onChange={(e) =>
              setProfile({
                ...profile,
                age: Number(e.target.value),
              })
            }
          />

          <Input
            label="License Number"
            value={profile.license_number}
            onChange={(e) =>
              setProfile({
                ...profile,
                license_number: e.target.value,
              })
            }
          />

          <Input
            label="Driving Experience (Years)"
            type="number"
            value={profile.driving_experience}
            onChange={(e) =>
              setProfile({
                ...profile,
                driving_experience: Number(e.target.value),
              })
            }
          />

          <div className="md:col-span-2">

            <label className="text-slate-400 mb-2 block">
              Vehicle Type
            </label>

            <select
              value={profile.vehicle_type}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  vehicle_type: e.target.value,
                })
              }
              className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white"
            >
              <option>Car</option>
              <option>Bike</option>
              <option>Truck</option>
              <option>Bus</option>
            </select>

          </div>

        </div>
        {success && (
  <div className="mb-5 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center font-semibold text-green-400 animate-pulse">
    {success}
  </div>
)}
        <button
          onClick={saveProfile}
          disabled={saving}
          className="mt-8 rounded-xl bg-cyan-500 px-8 py-3 text-lg font-semibold text-white hover:bg-cyan-600"
        >
          {saving ? "Saving..." : "Save Profile"}
        </button>

      </div>

    </AppLayout>

  );

}

function Input({
  label,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div>

      <label className="mb-2 block text-slate-400">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
      />

    </div>
  );
}