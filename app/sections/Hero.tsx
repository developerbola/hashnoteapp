"use client";
import Image from "next/image";

const HeroSection = () => {
  const handleDownload = () => {
    const fileName = "Hashnote-1.0.0.dmg";
    const timestamp = new Date().toISOString();

    // Add a unique identifier (e.g., timestamp) to the URL
    const uniqueURL = `https://hook.eu2.make.com/k4871v3pb83ixp3hvy9nmxxq6pkiiz67?timestamp=${timestamp}`;

    navigator.sendBeacon(
      uniqueURL,
      JSON.stringify({
        file: fileName,
        timestamp: timestamp,
        page: window.location.href,
        userAgent: navigator.userAgent,
      })
    );

    const link = document.createElement("a");
    link.href =
      "https://github.com/developerbola/hashnoteapp/releases/download/Hashnote/Hashnote-1.0.0.dmg";
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
      {/* Left Side - App Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/preview.png"
          alt="Hashnote App Preview"
          width={600}
          height={600}
          priority
          unoptimized
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Fast. Minimal. Markdown-friendly.
          <br />
          <span className="text-2xl">Free & Open source.</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Hashnote helps you write, manage, and organize your notes effortlessly
          with markdown editor, and a minimal UI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={handleDownload}
            className="bg-white text-black px-6 py-3 rounded-xl font-medium transition"
          >
            Download Now
          </button>

          <a href="/guides" className="px-6 py-3 font-medium">
            Read the Guide
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
