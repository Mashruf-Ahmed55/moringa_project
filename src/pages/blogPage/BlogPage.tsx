import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { newsItems } from '@/constants';
import { Link } from 'react-router';

export default function BlogPage() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">News</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsItems.map((item) => (
          <Link to={`/blogs/${item.id}`} key={item.id} className="group ">
            <Card className="border-none shadow-sm overflow-hidden h-full rounded-sm bg-gray-200 pb-4 p-3">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={item.image || '/placeholder.svg'}
                  alt={item.title}
                  width={600}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="px-0 pt-4 pb-2">
                <h2 className="text-xl font-semibold text-center line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-sm text-center text-gray-500">{item.date}</p>
              </CardHeader>
              <CardContent className="px-0 py-2">
                <p className="text-gray-600 text-center">{item.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
