export default function EmailInput() {
    return (
      <div className="flex items-center justify-center mt-10 px-4">
        <div className="flex items-center border border-gray-400 rounded-full overflow-hidden shadow-sm w-full max-w-lg sm:max-w-2xl px-2">
          {/* Input Field */}
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 focus:outline-none text-sm sm:text-base rounded-l-full"
          />
          {/* Button */}
          <button className="bg-[#E5ABF3] hover:bg-[#D594E6] text-black font-semibold px-6 py-2 rounded-full transition text-sm sm:text-base">
            Send
          </button>
        </div>
      </div>
    );
  }
  