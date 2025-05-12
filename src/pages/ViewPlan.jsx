import { useEffect, useState } from "react";
import { useLoaderData, useParams, useNavigate, Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import { SiGoogletasks } from "react-icons/si";

const ViewPlan = () => {
  const [user, setUser] = useState({});
  const [hasJoined, setHasJoined] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [showRateing, setShowRateing]= useState(null)
  const { id } = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    const mainData = data.find((data) => data.id == id);
    setUser(mainData);
  }, [data, id]);

  const handleClick = () => {
    Swal.fire({
      title: "Success!",
      text: "You have successfully joined the plan!",
      icon: "success",
      confirmButtonText: "Awesome!",
      background: "#1f2937",
      color: "#fff",
      confirmButtonColor: "#3b82f6",
    });

    setHasJoined(true); // User has joined
  };

  const submitReview = () => {
    if (!rating || !review.trim()) {
      Swal.fire({
        title: "Oops!",
        text: "Please give a rating and write a review.",
        icon: "warning",
        confirmButtonColor: "#f59e0b",
      });
      return;
    }

    const userRateing= rating;
    const userFeetBack= review;
    console.log({
      user: user.name,
      rating,
      review,
    });

    Swal.fire({
      title: "Thank you!",
      text: "Your feedback has been submitted.",
      icon: "success",
      confirmButtonColor: "#3b82f6",
    });

    // Reset form
    setRating(0);
    setReview("");
    setShowRateing({rateing:userRateing , review:userFeetBack})
  };


  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white relative"
      style={{
        backgroundImage: `url(${user.thumbnail})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60 z-0"></div>

      {/* Top bar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center cursor-pointer text-white text-lg font-medium hover:text-blue-300 transition md:px-6 md:py-7 rounded pr-2"
        >
          <FaArrowLeft size={25} />
        </button>

        <div className="pl-2 md:px-6 md:py-7">
          <img
            src={user.logo}
            alt="Logo"
            className="h-12 md:h-20 w-auto object-contain"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative top-10 z-10 max-w-7xl px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Be part of {user.name}
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {user.description}
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 lg:w-5xl">
          {user.membership_cards?.map((card, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-2xl p-6 flex flex-col items-center shadow-xl transition hover:scale-105 hover:shadow-2xl duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-lg font-bold mb-4">
                {card.price === 0 ? "Free" : `${card.price}€/year`}
              </p>
              <ul className="text-sm space-y-1 mb-4 text-white/90">
                {card.benefits.map((benefit, i) => (
                  <li key={i}>✔ {benefit}</li>
                ))}
              </ul>
              <button
                onClick={handleClick}
                className="px-5 py-2 border border-white cursor-pointer text-white rounded-lg hover:bg-white hover:text-black transition"
              >
                {card.price === 0
                  ? "Join now"
                  : hasJoined
                  ? <SiGoogletasks />
                  : "Buy plan"}
              </button>
            </div>
          ))}
        </div>

        <div>
          {/* Rating & Review Section */}
          {hasJoined && (
            <div className="mt-16 max-w-xl mx-auto bg-white/10 p-6 rounded-xl backdrop-blur-md shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Give Your Feedback
              </h2>

              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-3xl ${
                      star <= rating ? "text-yellow-400" : "text-gray-500"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>

              <textarea
                className="w-full h-24 p-3 rounded bg-white/20 text-white placeholder-white/70 resize-none"
                placeholder="Write your review..."
                value={review}
                name="rateing"
                onChange={(e) => setReview(e.target.value)}
              ></textarea>

              <button
                onClick={submitReview}
                className="mt-4 px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white transition cursor-pointer"
              >
                Submit
              </button>

              
              {showRateing && (
                <>
                <div className="mt-16 max-w-xl mx-auto bg-white/10 p-6 rounded-xl backdrop-blur-md shadow-lg">
                <p className="font-bold"><span className="text-blue-400">Rateing: </span> {showRateing.rateing}/5</p>
                <p className="font-bold"><span className="text-blue-400">comment: </span> {showRateing.review}</p>
                </div>
                </>
              )}
              </div>
           
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewPlan;