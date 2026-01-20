import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  
  // const API = import.meta.env.VITE_API_URL;

  const sendOtp = async () => {
    const res = await fetch(`/api/auth/send-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("OTP sent to your email");
      setStep(2);
    } else {
      setMessage(data.message);
    }
  };

  const verifyOtp = async () => {
    const res = await fetch(`/api/auth/verify-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("OTP verified! You can reset password now.");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-[350px] space-y-4">

        <h2 className="text-xl font-bold text-center">Forgot Password</h2>

        {message && <p className="text-sm text-center">{message}</p>}

        {step === 1 && (
          <>
            <input
              placeholder="Enter email"
              className="border w-full p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={sendOtp}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              placeholder="Enter OTP"
              className="border w-full p-2 rounded"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={verifyOtp}
              className="w-full bg-green-600 text-white py-2 rounded"
            >
              Verify OTP
            </button>
          </>
        )}

      </div>
    </div>
  );
}
