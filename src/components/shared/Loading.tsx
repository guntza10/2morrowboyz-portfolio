const Loading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50">
      <div className="flex items-center gap-3 rounded-lg bg-white p-6">
        <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-blue-600"></div>
        <span className="text-gray-700">Sending your message...</span>
      </div>
    </div>
  );
};

export default Loading;
