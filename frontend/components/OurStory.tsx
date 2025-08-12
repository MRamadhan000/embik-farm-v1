import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="flex h-screen p-16 gap-10 bg-white">
      {/* Left Content */}
      <div className="flex flex-col justify-center flex-1">
        <h1 className="text-5xl font-bold mb-10 text-gray-900 bg-amber-300">About Us</h1>

        <div className="mb-8 max-w-xl">
          <h2 className="text-3xl font-semibold text-green-600 mb-3">Our Valuesddfdsfdsfs</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kami berkomitmen untuk menghadirkan inovasi dan kualitas terbaik dalam setiap produk dan layanan kami. Integritas, kolaborasi, dan keberlanjutan adalah nilai-nilai utama yang kami pegang teguh.
          </p>
        </div>

        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-green-600 mb-3">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Misi kami adalah memberdayakan masyarakat melalui teknologi yang mudah diakses dan memberikan dampak positif bagi kehidupan sehari-hari. Kami berusaha untuk terus berinovasi demi masa depan yang lebih baik.
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Our Team Illustration"
          className="rounded-lg shadow-lg object-cover max-h-[80vh] w-full"
        />
      </div>
    </section>
  );
};

export default AboutUs;
