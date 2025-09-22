import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, Home, Video, Download, ExternalLink } from "lucide-react";
import michelinMap from './/circuitmap.jpg';
import PRTLMap from './/PRTLmap.jpg';
import paroisseMap from './/eglisemap.jpg';

export default function VideoApp() {
  const [tab, setTab] = useState("home");

  const videos = [
    {
      title: "Fontaine Bonnefond — Ajain",
      src: "/V1_fontaine_bonnefond_vertical.mp4",
      poster: "/poster-ajain.jpg",
      description:
        "La Fontaine Bonnefond, datant du XIXe siècle, est un petit trésor local. Parfait pour un selfie après le marché ! 📸",
    },
    {
      title: "Autre vidéo patrimoine",
      src: "/video2.mp4",
      poster: "/poster2.jpg",
      description: "Découvrez un autre lieu avec son anecdote amusante.",
    },
  ];

  const homeItems = [
    {
      title: "Paroisse",
      link: "https://www.paroisse-st-pardoux.org/",
      thumbnail: paroisseMap,
    },
    {
      title: "PRTL",
      link: "https://www.paroisse-st-pardoux.org/prtl.html",
      thumbnail: PRTLMap,
    },
    {
      title: "Idées Visites",
      link: "https://www.google.com/maps/d/edit?hl=fr&mid=1GyytTfkgaYhhhYK_oLcJer9p6ABZQHI&ll=46.215995514997644%2C1.784491877714216&z=9",
      thumbnail: michelinMap,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-rose-50 to-teal-50 text-slate-900 antialiased flex flex-col pb-20 font-sans">
      {/* HEADER */}
      <header className="px-6 py-4 shadow-lg bg-white/90 backdrop-blur-sm sticky top-0 z-20">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-extrabold tracking-tight text-sky-700"
        >
          Pastorale du Tourisme
        </motion.h1>
        <p className="text-sm text-slate-600 flex items-center gap-2">
          <span className="text-rose-500">✨</span> Donner du sens au temps libre
        </p>
      </header>

      {/* CONTENT */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <AnimatePresence mode="wait">
          {/* HOME PAGE */}
          {tab === "home" && (
            <motion.div
  key="home"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  className="grid grid-cols-2 gap-6 w-full max-w-md place-items-center"
>
  {homeItems.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: i * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow duration-300 w-36 h-36 text-center"
      onClick={() =>
        item.action ? item.action() : window.open(item.link, "_blank")
      }
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-12 h-12 rounded-lg object-cover mb-2"
      />
      <span className="font-semibold text-slate-800 text-sm">
        {item.title}
      </span>
    </motion.div>
  ))}
</motion.div>
          )}

          {/* VIDEOS PAGE */}
          {tab === "videos" && (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative" style={{ aspectRatio: "9/16" }}>
                <video
                  key={videos[0].src}
                  controls
                  playsInline
                  poster={videos[0].poster}
                  className="w-full h-full object-cover rounded-t-2xl"
                >
                  <source src={videos[0].src} type="video/mp4" />
                  Ton navigateur ne supporte pas la lecture vidéo.
                </video>
                <div className="absolute left-4 top-4 bg-rose-500/90 text-white rounded-full px-3 py-1 text-xs font-semibold shadow">
                  {videos[0].title}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-slate-700 flex items-start gap-2">
                  <Info className="w-4 h-4 mt-0.5 text-sky-500" />
                  {videos[0].description}
                </p>
              </div>
            </motion.div>
          )}

          {/* DOWNLOAD PAGE */}
          {tab === "download" && (
            <motion.div
              key="download"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center space-y-6 max-w-md p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl"
            >
              <h2 className="text-xl font-bold text-sky-700">
                Installer l'application
              </h2>
              <p className="text-sm text-slate-600">
                Cette application est une <span className="font-semibold text-rose-500">Progressive Web App (PWA)</span> ! Ajoute-la à ton écran d'accueil pour une expérience fluide et rapide.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-rose-500">🍎</span> Sur iPhone (Safari) → Partager → « Sur l'écran d'accueil »
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-500">🤖</span> Sur Android (Chrome) → Menu ⋮ → « Installer l'application »
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-sky-500 text-white rounded-full font-semibold shadow-md hover:bg-sky-600 transition-colors"
                onClick={() => setTab("home")}
              >
                Retour à l'accueil
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* NAVIGATION */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-slate-200 flex justify-around items-center py-3 shadow-lg">
        {[
          { id: "home", icon: Home, label: "Accueil" },
          { id: "videos", icon: Video, label: "Vidéos" },
          { id: "download", icon: Download, label: "Installer" },
        ].map(({ id, icon: Icon, label }) => (
          <motion.button
            key={id}
            onClick={() => setTab(id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`flex flex-col items-center text-xs ${
              tab === id ? "text-rose-500" : "text-slate-500"
            } transition-colors duration-200`}
          >
            <Icon className="w-6 h-6" />
            {label}
          </motion.button>
        ))}
      </nav>
    </main>
  );
}