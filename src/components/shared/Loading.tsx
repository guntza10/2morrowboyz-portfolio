const Loading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50">
      <div className="flex items-center gap-3 rounded-lg bg-white p-6">
        <div className="h-6 w-6 animate-spin rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-1">
          <div className="h-full w-full rounded-full bg-white"></div>
        </div>

        <span className="text-gray-700">Sending your message...</span>
      </div>
    </div>
  );
};

export default Loading;
