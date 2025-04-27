import { termsData } from '@/constants';

export default function TermsAndService() {
  return (
    <div className="bg-gray-100 w-full">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold border-2 border-e-red-500 border-s-red-500 text-center px-8 rounded-md py-4">
          Terms Of Service
        </h1>

        <div className="space-y-6 mt-4">
          {termsData.map((data) => {
            return (
              <div key={data.id}>
                <h2 className="text-lg font-semibold mb-2">{data.title}</h2>
                <p
                  dangerouslySetInnerHTML={{ __html: data.discription }}
                  className="text-gray-700 leading-6 text-sm"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
