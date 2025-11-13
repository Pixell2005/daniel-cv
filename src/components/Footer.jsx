import { FaGithub, FaInstagram, FaEnvelope, FaSpotify } from "react-icons/fa";

export default function Footer({ email, social }) {
  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case "github":
        return <FaGithub />;
      case "instagram":
        return <FaInstagram />;
      case "spotify":
        return <FaSpotify />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-indigo-500 text-white text-center py-6 mt-10 rounded-t-2xl shadow-inner">
      <h2 className="text-xl font-semibold mb-4">Contact</h2>
      <div className="flex justify-center gap-6 text-3xl">
        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="hover:text-yellow-300 transition"
          title="Email"
        >
          <FaEnvelope />
        </a>

        {/* Socials */}
        {social
          .filter((item) =>
            ["github", "instagram", "spotify"].includes(item.name.toLowerCase())
          )
          .map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition"
              title={item.name}
            >
              {getSocialIcon(item.name)}
            </a>
          ))}
      </div>
    </footer>
  );
}
