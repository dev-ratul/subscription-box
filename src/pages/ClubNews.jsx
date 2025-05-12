import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const clubNews = [
  {
    name: "Barcelona",
    title: "Xavi extends contract till 2026",
    image: "https://i.postimg.cc/2S1w910c/beneficis-football-tickets-blur-EN-1.jpg",
    news: "Barcelona coach Xavi Hernández has signed a contract extension until 2026 to continue his project with the Catalan giants.",
  },
  {
    name: "Real Madrid",
    title: "Mbappe deal almost finalized",
    image: "https://wallpapercave.com/wp/wp11012453.jpg",
    news: "Real Madrid is close to finalizing the deal for Kylian Mbappe as a marquee signing for the upcoming season.",
  },
  {
    name: "Arsenal",
    title: "Arteta eyes Premier League title",
    image: "https://i.postimg.cc/jdzjdSQ9/fa-cup-win-2014-s84rlfy9.avif",
    news: "Mikel Arteta believes Arsenal have the right squad and mentality to challenge for the Premier League title this season.",
  },
  {
    name: "Manchester City",
    title: "Guardiola praises Haaland",
    image: "https://i.postimg.cc/PJxdZYzM/mark-mc-neill-qahbn44-Lczo-unsplash.jpg",
    news: "Pep Guardiola lauded Erling Haaland’s impact after another match-winning performance in the Champions League.",
  },
  {
    name: "Manchester United",
    title: "Ten Hag rebuild in progress",
    image: "https://i.postimg.cc/X7kpkk1x/495047420-1279111720245327-245419168850651394-n.jpg",
    news: "Erik ten Hag continues his rebuilding process at Manchester United with a focus on young talent and discipline.",
  },
  {
    name: "Atletico Madrid",
    title: "Griezmann stars in derby win",
    image: "https://i.postimg.cc/RVxRSm9X/istockphoto-1752042847-612x612.jpg",
    news: "Antoine Griezmann led Atletico Madrid to a sensational 3-1 win over Real Madrid in a heated derby match.",
  },
  // Repeat and modify these or add 12 more for a total of 18 news items.
];

const ClubNews = () => {
  
    return (
      <div className="p-7 max-w-6xl mx-auto mt-20">

        <h1 className="text-3xl font-bold mb-6 text-center">Latest Club News</h1>
        <div className="">
          {clubNews.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition mb-10"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                <p className="text-lg font-medium text-blue-600 mt-1">{item.title}</p>
                <p className="text-gray-600 mt-2 text-sm">{item.news}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ClubNews;
