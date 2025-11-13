import profilePic from "../assets/Profile.jpg";

export default function Profile({ fam, name, title, gender, address, email, social, phone }) {
  return (
    <section className="relative flex flex-col md:flex-row items-start bg-white mt-8 mx-auto w-[90%] max-w-5xl rounded-2xl p-8 shadow-lg">
      {/* LABEL "PROFILE" */}
      <div className="absolute -top-6 left-8 bg-indigo-500 text-white font-bold text-lg px-6 py-2 rounded-full shadow-md">
        PROFILE
      </div>

      {/* KOLOM KIRI: FOTO */}
      <div className="flex flex-col items-center md:items-start md:w-1/3">
        <div className="relative">
          <img
            src={profilePic}
            alt="Profile"
            className="w-76 h-76 rounded-full object-cover shadow-lg"
          />
          <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-indigo-500 rounded-full"></div>
        </div>

        {/* DATA DIRI */}
        <ul className="text-left space-y-2 mt-6 text-gray-800">
          <li><strong>Gender:</strong> {gender}</li>
          <li><strong>Address:</strong> {address}</li>
          <li><strong>Email:</strong> {email}</li>
          <li><strong>Phone Number:</strong> {phone}</li>
        </ul>
      </div>

      {/* KOLOM KANAN */}
      <div className="flex-1 md:ml-12 mt-8 md:mt-0 text-left">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold leading-tight">{fam}</h1>
            <h1 className="text-5xl font-bold leading-tight">{name}</h1>
          </div>

          <div className="border-2 border-red-500 text-red-500 px-4 py-1 rounded-full text-lg font-medium">
            {title}
          </div>
        </div>
      </div>
    </section>
  );
}
