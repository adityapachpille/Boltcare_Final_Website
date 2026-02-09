export default function Ourteam() {
  const team = [
    { name: 'Bhavesh Raut', role: 'Founder', image: '/team/user.png' },
    { name: 'Aditya Pachpille', role: 'Co-Founder', image: '/team/aditya.png' },
    { name: 'Shubham Harne', role: 'Division Manager', image: '/team/user.png' },
    { name: 'Sai Shete', role: 'Area Manager', image: '/team/user.png' },
    { name: 'Rushikesh Murade', role: 'Director', image: '/team/user.png' },
    { name: 'Suraj Patole', role: 'Director', image: '/team/user.png' },
  ];

  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] w-full">
        <img
          src="/teamabout.png"
          alt="About Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Who We Are</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          We are a team of passionate individuals dedicated to building high-quality,
          reliable, and impactful solutions. With a shared vision and strong leadership,
          our goal is to make a difference in every project we undertake.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl px-50">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white  shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="h-[320px] w-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-500 mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
