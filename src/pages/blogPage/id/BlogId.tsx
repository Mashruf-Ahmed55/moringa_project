import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export default function BlogId() {
  return (
    <article className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 overflow-hidden rounded-lg">
        <img
          src="/blog.jpg"
          alt="Moringa tree with seed pods"
          width={800}
          height={500}
          className="w-full h-[calc(100vh-40vh)] object-center object-cover hover:scale-110 duration-300 ease-in-out transition-all"
        />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-2">
        Unlock the Power of Moringa: Nature's Superfood
      </h1>

      <div className="flex justify-start items-center space-x-2 text-gray-500 text-sm mb-8">
        <span>January 20, 2023</span>
        <span>•</span>
        <span>5 mins</span>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          The leaves of the Moringa tree contain more than 90 nutrients and 46
          antioxidants. This powerful combination helps neutralize free
          radicals, which can contribute to oxidative stress and a host of
          health issues. By incorporating Moringa into your diet, you're
          providing your body with a natural defense against the everyday
          effects of aging and stress.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">
          The Nutritional Powerhouse of Moringa
        </h2>

        <p>
          Moringa is often hailed as one of the most nutrient-dense plants on
          the planet, and it's easy to see why. This versatile plant is rich in
          vitamins, minerals, and antioxidants that can have a profound impact
          on your overall health. From vitamin C and calcium to iron and
          protein, Moringa is a true nutritional powerhouse.
        </p>

        <p>
          The leaves of the Moringa tree contain more than 90 nutrients and 46
          antioxidants. This powerful combination helps neutralize free
          radicals, which can contribute to oxidative stress and a host of
          health issues. By incorporating Moringa into your diet, you're
          providing your body with a natural defense against the everyday
          effects of aging and stress.
        </p>
      </div>
      <div className="mt-12 mb-8">
        <Link to="/blogs">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Button>
        </Link>
      </div>
    </article>
  );
}
