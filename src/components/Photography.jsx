import { useState } from "react";

export default function Photography({ photos }) {
  const [modalSrc, setModalSrc] = useState(null);

  return (
    <section className="relative bg-white mt-8 mx-auto w-[90%] max-w-3xl rounded-2xl p-6 shadow-md">
      <h2 className="absolute -top-6 left-10 bg-indigo-500 text-white font-bold text-lg rounded-full px-6 py-2 shadow-md">
        Documentation
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={`/${photo.file}`} // ambil dari public folder
            alt={`Photo ${photo.id}`}
            className="w-60 h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setModalSrc(`/${photo.file}`)}
          />
        ))}
      </div>

      {modalSrc && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalSrc(null)}
        >
          <img
            src={modalSrc}
            alt="Modal"
            className="max-w-[80%] max-h-[80%] rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
