export default function Header() {
  return (
    <header className="bg-gray-800 px-6 py-2">
      <nav className="container mx-auto flex justify-between text-white">
        <div className="text-xl">Next.js</div>
        <div className="space-x-12">
          <a href="">Home</a>
          <a href="">About Us</a>
        </div>
      </nav>
    </header>
  );
}
