import React from 'react';

type Props = {
  onClose: () => void;
};

const SignUpLoginModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center text-[#350BF5] mb-6">
          Welcome to THINKTALK
        </h2>

        <div className="flex flex-col gap-4">
          <button className="bg-[#350BF5] text-white py-2 rounded-lg text-lg hover:bg-blue-700 transition">
            Sign Up
          </button>
          <button className="border border-[#350BF5] text-[#350BF5] py-2 rounded-lg text-lg hover:bg-[#350BF5] hover:text-white transition">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpLoginModal;
