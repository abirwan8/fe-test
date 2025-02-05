import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/company.jpg')" }}
      >
        <div className="h-screen flex flex-col items-center justify-center px-10 space-y-8 text-white text-center bg-gradient-to-t from-gray-950 to-zinc-950/20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold">
              Welcome to our page! We're glad to have you <span className="text-teal-500">here</span>👋
            </h1>
            <p className="text-base md:text-lg">Please login to to begin explore the website</p>
            <div className="">
              <Button label="Login" href="/login" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
