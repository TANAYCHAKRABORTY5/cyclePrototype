import Image from "next/image";

export default function CardHoverExample() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-purple-100 rounded-3xl text-center p-8  transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img
            src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/6853e15e5104d359ae231783_furry-poster.webp"
            alt="VoiceHunter"
            className="mx-auto w-32 h-32 mb-6 transition-transform duration-500 group-hover:animate-bounce"
          />
          <p className="text-purple-700 mb-2">Understanding Customers</p>
          <h3 className="text-purple-800 font-bold text-xl">@VoiceHunter</h3>
        </div>

        <div className="bg-blue-100 rounded-3xl text-center p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img
            src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/6853e15e4b797121c37dd44e_sunglasses-poster.webp"
            alt="Pathfinder"
            className="mx-auto w-32 h-32 mb-6 transition-transform duration-500 group-hover:animate-bounce"
          />
          <p className="text-blue-700 mb-2">Shaping the Product</p>
          <h3 className="text-blue-800 font-bold text-xl">@Pathfinder</h3>
        </div>

        <div className="bg-yellow-100 rounded-3xl text-center p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img
            src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/6853e15c580e7d581e42e819_yellow-cap-poster.webp"
            alt="LoopCloser"
            className="mx-auto w-32 h-32 mb-6 transition-transform duration-500 group-hover:animate-bounce"
          />
          <p className="text-yellow-700 mb-2">Closing the Loop</p>
          <h3 className="text-yellow-800 font-bold text-xl">@LoopCloser</h3>
        </div>
      </div>
    </div>
  );
}
