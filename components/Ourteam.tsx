export default function Ourteam() {
  const team = [
    { name: 'Bhavesh Raut', role: 'Founder', image: '/team/user.png' },
    { name: 'Aditya Pachpille', role: 'Co-Founder', image: '/team/aditya.png' },
    { name: 'Suraj Patole', role: 'Director', image: '/team/user.png' },
    { name: 'Rushikesh Murade', role: 'Director', image: '/team/user.png' },
    { name: 'Shubham Harne', role: 'Division Manager', image: '/team/user.png' },
    { name: 'Sai Shete', role: 'Area Manager', image: '/team/user.png' },
  ];

  return (
    <div className="bg-white text-gray-800">

      {/* About Section */}
      <section className="mx-auto px-4 py-10 lg:max-w-7xl lg:px-40">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 pt-30">
          Who We Are
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          We are a team of passionate individuals dedicated to building high-quality,
          reliable, and impactful solutions.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-10">
        <div className="mx-auto px-4 lg:max-w-7xl lg:px-60">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition w-full"
              >
                {/* Image */}
                <div className="h-[400px] sm:h-[400px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 mt-1 text-sm sm:text-base">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
