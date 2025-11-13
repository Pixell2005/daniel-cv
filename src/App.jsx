import { useEffect, useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Photography from "./components/Photography";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/daniel_cv.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading JSON:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!data) return <div className="text-center mt-10 text-red-500">Failed to load data.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <Header page={data.page} />
      <Profile
        fam={data.fam}
        name={data.name}
        title={data.title}
        gender={data.gender}
        address={data.address}
        email={data.email}
        social={data.social}
        phone={data.phone}
      />
      <Skills skills={data.skills} experience={data.experience} />
      <Education education={data.education} />
      <Interests interests={data.interests} />
      <Photography photos={data.photos} />
      <Footer email={data.email} social={data.social} />
    </div>
  );
}

export default App;
