export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white text-2xl">
      <div className="animate-spin h-12 w-12 border-4 border-t-transparent border-white rounded-full mr-4"></div>
      Loading...
    </div>
  );
}
