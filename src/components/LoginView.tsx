import React, { useState } from 'react';
import { Music, FcGoogle, AiFillApple, Search, RiWhatsappFill } from 'react-icons/all';

const countryCodes = [
  { code: '+91', country: 'India (IN)' },
  { code: '+1', country: 'USA (US)' },
  { code: '+44', country: 'UK (UK)' },
  { code: '+971', country: 'UAE (AE)' },
];

export default function LoginView({ onVerify }) {
  const [otpInput, setOtpInput] = useState(['', '', '', '']);
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [otpTarget, setOtpTarget] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCode, setSelectedCode] = useState('+91');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCodes = countryCodes.filter(item =>
    item.country.toLowerCase().includes(searchQuery.toLowerCase()) || item.code.includes(searchQuery)
  );

  const handleOtpChange = (index, value) => {
    let newOtp = [...otpInput];
    newOtp[index] = value;
    setOtpInput(newOtp);
    if (value && index < 3) document.getElementById(`otp-${index + 1}`).focus();
  };

  const handleVerify = () => {
    if (otpInput.join('') === '1234') {
      onVerify(true);
    } else {
      alert('गलत OTP! कृपया "1234" डालकर ट्राई करें।');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
        
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-full shadow-lg">
            <Music className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mt-3 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">KITTU MUSIC</h1>
        </div>

        {/* Social Login */}
        <div className="flex flex-col gap-2.5 mb-4">
          <button className="flex items-center justify-center gap-3 w-full bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg text-sm"><FcGoogle className="text-lg" /> Continue with Google</button>
          <button className="flex items-center justify-center gap-3 w-full bg-black text-white font-semibold py-2 px-4 rounded-lg border border-gray-700 text-sm"><AiFillApple className="text-lg" /> Continue with Apple</button>
        </div>

        <div className="text-center text-xs text-gray-400 my-3">OR</div>

        {/* Mobile Input */}
        <div className="mb-4">
          <div className="flex gap-2 relative">
            <button onClick={() => setShowDropdown(!showDropdown)} type="button" className="bg-white/10 border border-white/20 rounded-lg px-2 py-2 text-sm min-w-[70px]">{selectedCode} ▾</button>
            {showDropdown && (
              <div className="absolute top-11 left-0 w-60 bg-slate-800 border border-white/20 rounded-lg shadow-xl z-50 p-2">
                <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-white/10 rounded px-2 py-1 text-xs w-full mb-2 focus:outline-none" />
                <div className="max-h-32 overflow-y-auto text-xs">
                  {filteredCodes.map((item, i) => (
                    <div key={i} onClick={() => { setSelectedCode(item.code); setShowDropdown(false); }} className="py-1.5 px-2 hover:bg-purple-600/50 rounded cursor-pointer flex justify-between">
                      <span>{item.country}</span><span className="font-semibold text-purple-300">{item.code}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <input type="tel" placeholder="Enter mobile number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm focus:outline-none" />
          </div>
          {mobileNumber && (
            <div className="flex gap-2 mt-2">
              <button onClick={() => setOtpTarget('SMS')} className="flex-1 bg-purple-600 text-xs py-1.5 rounded">Send SMS</button>
              <button onClick={() => setOtpTarget('WhatsApp')} className="flex-1 bg-green-600 text-xs py-1.5 flex items-center justify-center gap-1 rounded"><RiWhatsappFill/> WhatsApp</button>
            </div>
          )}
        </div>

        {/* Email Input */}
        <div className="mb-4 space-y-2">
          <input type="email" placeholder="Email (Optional)" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm focus:outline-none" />
          {email && <button onClick={() => setOtpTarget('Email')} className="w-full bg-indigo-600 text-xs py-1.5 rounded">Send OTP to Email</button>}
        </div>

        {/* OTP Verification */}
        <div className="border-t border-white/10 pt-4 text-center">
          <p className="text-xs text-green-400 mb-2">{otpTarget ? `✓ OTP Sent via ${otpTarget} (Enter '1234')` : 'Fill details to get OTP'}</p>
          <div className="flex justify-center gap-2 mb-4">
            {otpInput.map((val, index) => (
              <input key={index} id={`otp-${index}`} type="text" maxLength="1" value={val} onChange={(e) => handleOtpChange(index, e.target.value)} className="w-10 h-10 text-center text-lg font-bold bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none" />
            ))}
          </div>
          <button onClick={handleVerify} className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-2 rounded-xl font-bold text-sm">Verify & Enter Home</button>
        </div>

      </div>
    </div>
  );
}
