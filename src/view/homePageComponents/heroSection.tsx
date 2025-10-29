export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="text-3xl lg:text-5xl font-bold">
          <h1>Game Company SQ</h1>
        </div>
        <div className="lg:hidden text-2xl text-center mt-5">
          <h2>
            「時を超えて繋がる「絆」――
            <br /> それが、私たちの創る世界。」
          </h2>
          <h2>
            “Bonds that transcend time —
            <br /> That is the world we create.”
          </h2>
        </div>
        <div className="hidden lg:block text-3xl text-center mt-5">
          <h2>「時を超えて繋がる「絆」―― それが、私たちの創る世界。」</h2>
          <h2>“Bonds that transcend time — That is the world we create.”</h2>
        </div>
      </div>
    </>
  );
}
