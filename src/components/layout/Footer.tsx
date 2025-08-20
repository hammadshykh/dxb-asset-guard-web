export default function Footer() {
 return (
  <footer className="md:py-12 py-8 px-4 sm:px-6 lg:px-8  text-slate-900">
   <div className="max-w-6xl mx-auto">
    <div className="text-center space-y-4">
     <div className="flex items-center justify-center space-x-2">
      <div className="w-10 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
       <span className="text-white font-bold text-sm">DXB</span>
      </div>
      <span className="text-xl font-semibold text-black">Asset Guard Web</span>
     </div>

     <p className="text-slate-600">
      Comprehensive asset protection solutions for businesses across the UAE
     </p>

     <div className="pt-8 border-t border-slate-700">
      <p className="text-sm text-slate-500">
       © {new Date().getFullYear()} DXB Asset Guard Web. All rights reserved.
      </p>
     </div>
    </div>
   </div>
  </footer>
 );
}
