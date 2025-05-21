
export default function WeServeindustries(){
    return(
        <>
     
     <section className="bg-[#f8f9fa] py-16 px-4 sm:px-6 lg:px-20">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#001428] mb-4">
      Industries & Markets We Serve
    </h2>
    <p className="text-gray-600 text-base sm:text-lg mb-12">
      We supply to:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Card 1 */}
      <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-center">
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-[#001428] rounded-full text-4xl">
          🏥
        </div>
        <h3 className="text-xl font-semibold text-[#001428]">Hospitals & Clinics</h3>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-center">
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-[#001428] rounded-full text-4xl">
          🌍
        </div>
        <h3 className="text-xl font-semibold text-[#001428]">International Importers</h3>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-center">
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-[#001428] rounded-full text-4xl">
          🛒
        </div>
        <h3 className="text-xl font-semibold text-[#001428]">Retail & Wholesale Chains</h3>
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-center">
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-[#001428] rounded-full text-4xl">
          💊
        </div>
        <h3 className="text-xl font-semibold text-[#001428]">Online Pharmacies</h3>
      </div>

    </div>
  </div>
</section>


        
        </>
    );
}