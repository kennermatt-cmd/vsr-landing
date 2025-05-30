export default function DemolitionPage() {
    return (
      <div className="px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">Demolition</h1>
        <p className="mb-8 text-lg">
          Safe and clean demolition services for residential and commercial projects.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Photo Gallery</h2>
        <div className="w-full h-[600px]">
          <iframe
            src="https://drive.google.com/embeddedfolderview?id=1edZkkPbHU8HyIjh5-50yHM60TYy3wzl5#grid"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </div>
      </div>
    );
  }