import { profile } from "./data/profile";
import React, { useState } from "react";

export default function App() {
  const [activeAchievement, setActiveAchievement] = useState(null);
  const [activeActivities, setActiveActivities] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
        <header className="bg-yellow-100 shadow">
          <div className="max-w-6xl mx-auto p-8 flex items-center gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold">{profile.name}</h1>
              <p className="text-lg text-gray-600">{profile.major} – {profile.school}</p>
              <p className="text-sm text-gray-500">📍 {profile.location}</p>
              <p className="text-sm text-blue-600">📞 {profile.phone}</p>
            </div>

            <img
              src="pic.jpg"
              alt="PIC"
              loading="lazy"
              className="w-40 h-40 object-cover shadow-lg"
            />
          </div>
        </header>

      <div className="max-w-4xl mx-auto p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">About Me</h2>
          {profile.bio.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="grid grid-cols-2 list-disc list-inside">
            {profile.skills.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Achievements</h2>
          <div className="grid grid-cols-1 gap-4">
            {profile.achievements.map((ach, i) => (
              <button
                key={i}
                onClick={() => setActiveAchievement(ach)}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              >
                <h3 className="font-semibold">{ach.title}</h3>
              </button>
            ))}
          </div>
        </section>

          {activeAchievement?.details?.length > 0 && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              onClick={() => setActiveAchievement(null)}
            >
              <div
                className="bg-blue-100 rounded-xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveAchievement(null)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                >
                  ✕
                </button>

                <h3 className="font-semibold mb-4">
                  {activeAchievement.title}
                </h3>

                <div className="space-y-6">
                  {activeAchievement.details.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="Achievement"
                      className="w-full rounded-lg shadow"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Activities</h2>
          <div className="grid grid-cols-1 gap-4">
            {profile.activities.map((act, i) => (
              <button
                key={i}
                onClick={() => setActiveActivities(act)}
                className="bg-white p-4 rounded-xl shadow text-left"
              >
                <h3 className="font-semibold">{act.title}</h3>
                <p className="text-sm text-gray-600">{act.org}</p>
                <p className="text-sm text-gray-600">{act.pos}</p>
                <p className="text-sm text-gray-500">{act.time}</p>
              </button>
            ))}
          </div>
        </section>

        {activeActivities && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setActiveActivities(null)}
          >
            <div
              className="bg-blue-100 rounded-xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveActivities(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>

              <h3 className="font-semibold mb-4">
                {activeActivities.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeActivities.details?.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="Activities"
                    className="w-full rounded-lg shadow"
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="space-y-3 p-5">
                {activeActivities.video && (
                  <div className="space-y-3 p-5">
                    {Array.isArray(activeActivities.video)
                      ? activeActivities.video.map((vid, idx) => (
                          <video
                            key={idx}
                            src={vid}
                            controls
                            className="w-full rounded-lg shadow"
                          />
                        ))
                      : (
                          <video
                            src={activeActivities.video}
                            controls
                            className="w-full rounded-lg shadow"
                          />
                        )
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <footer className="text-center text-sm text-gray-400 mt-10">
        © 2025 Nguyễn Tú Anh
        </footer>
      </div>
    </div>
  );
}