import { IamgeSwaiper, MobileImageSawiper } from '@/components/Swaiper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/customAcroding';
import { Progress } from '@/components/ui/progress';
import { articles, reviews, sliderImg } from '@/constants';
import { ArrowRight, Star, StarIcon } from 'lucide-react';

import Marquee from 'react-fast-marquee';
import { AiTwotoneSafetyCertificate } from 'react-icons/ai';
import {
  FaArrowTrendUp,
  FaGripfire,
  FaHeartCirclePlus,
  FaLeaf,
  FaStaffSnake,
} from 'react-icons/fa6';
import { IoArrowRedoOutline } from 'react-icons/io5';
import { LuPlus } from 'react-icons/lu';
import { Link } from 'react-router';

const ratingData = [
  { stars: 5, count: 474 },
  { stars: 4, count: 35 },
  { stars: 3, count: 16 },
  { stars: 2, count: 2 },
  { stars: 1, count: 0 },
];

const totalReviews = ratingData.reduce((acc, item) => acc + item.count, 0);
const averageRating = (
  ratingData.reduce((acc, item) => acc + item.stars * item.count, 0) /
  totalReviews
).toFixed(2);

const faqs = [
  {
    question: 'What ingredients are in Pure Moringa capsules?',
    answer: (
      <>
        <p className="mb-2">
          It's simple - the purest, highest-quality Moringa - that's it!
        </p>
        <p>
          Each serving (two capsules) contains 800mg of Pure Nutrient-Rich
          Moringa Leaf Powder - A Natural Green Antioxidant Superfood. Our
          Moringa is passionately grown, ethically sourced, and produced with
          your health in mind. We use only the highest quality Moringa, and only
          the leaves, so you can be confident you're actually getting all the
          vitamins and nutrients you're looking for.
        </p>
      </>
    ),
  },
  {
    question: 'Is Pure Moringa safe to take with my current medications?',
    answer:
      'Please consult with your healthcare provider before starting any new supplement, especially if you are currently taking medications. While Moringa is generally considered safe, it may interact with certain medications.',
  },
  {
    question:
      'Will the Pure Moringa supplement help with my energy levels and overall health?',
    answer:
      'Many of our customers report improved energy levels and overall well-being after taking Pure Moringa regularly. The nutrient-dense profile of Moringa provides essential vitamins and minerals that support natural energy production and overall health.',
  },
  {
    question:
      'How long until I feel improvement in my energy levels and health?',
    answer:
      'Individual results may vary. Some customers report feeling a difference within days, while for others it may take a few weeks of consistent use. For best results, we recommend taking Pure Moringa daily as part of your wellness routine.',
  },
  {
    question: 'Are there any age or health restrictions?',
    answer:
      'Pure Moringa is generally suitable for adults of all ages. However, pregnant or nursing women, individuals with pre-existing health conditions, or those under 18 should consult with a healthcare professional before use.',
  },
  {
    question: 'What is your return policy?',
    answer:
      "We offer a 100% satisfaction guarantee. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund, no questions asked.",
  },
];

function App() {
  return (
    <div className="w-full h-full">
      {/* section 2 */}
      <section className="w-full overflow-hidden">
        <div className="relative md:min-h-screen w-full h-[calc(100vh-30vh)]">
          <video
            src="/heroVideo.mp4"
            className="h-full object-cover mx-auto w-full"
            muted
            autoPlay
            playsInline
            loop
          ></video>
          <div className="absolute w-full flex items-center justify-center bottom-6 h-14 md:bottom-12 left-0 bg-white/15 backdrop-blur-xl md:h-32">
            <div className="w-7xl mx-auto">
              <Marquee>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                architecto illo excepturi laudantium voluptas sint quam, amet
                maiores eius ipsa, aliquam dolores dolorem adipisci quia, velit
                placeat sunt inventore aut.
              </Marquee>
            </div>
          </div>
          <div className="absolute w-full bg-[#2c471b] flex items-center justify-center bottom-0 left-0 bg- backdrop-blur-2xl h-8 md:h-12 text-white">
            <Marquee>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              architecto illo excepturi laudantium voluptas sint quam, amet
              maiores eius ipsa, aliquam dolores dolorem adipisci quia, velit
              placeat sunt inventore aut.
            </Marquee>
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-10 gap-y-4 md:gap-y-0 md:gap-x-12 flex-col md:flex-row">
          <div className="md:w-1/2 flex items-center justify-center px-3 md:px-0">
            <img src="/productSection.png" width={800} height={600} alt="" />
          </div>
          <div className="md:w-1/2 flex items-start justify-start px-4">
            <div className="flex flex-col items-start justify-center gap-y-3 md:gap-y-5">
              <h1 className="md:text-5xl text-[28px] font-semibold md:font-bold md:leading-14">
                Pure Moringa Powder Capsules
              </h1>
              <p className="md:text-base text-sm text-gray-500 md:font-medium md:text-balance md:leading-8">
                Pure Moringa supports mental clarity, boosts energy, and
                holistically heals your body - making tough mornings a thing of
                the past.
              </p>
              <Link to="/shop-pure-moringa">
                <Button
                  size={'lg'}
                  className="rounded-sm md:h-12 cursor-pointer"
                >
                  Shop Pure Moringa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto">
          <div className=" flex flex-col items-center justify-center text-center pb-8 pt-12 gap-y-3">
            <div className="p-3.5 flex items-center gap-x-3 bg-gray-200 rounded-md">
              <div className="w-14 h-12 rounded-sm flex items-center justify-center text-white bg-black/75">
                <h1 className="text-xl">4.5</h1>
              </div>
              <span className="flex items-center gap-2 text-sm text-gray-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </span>
              <span className="text-base text-gray-700">
                From <span className="font-bold">527</span> reviews
              </span>
            </div>
            <span className="text-sm text-gray-500">
              Collected by our users
            </span>
          </div>
          <div className="hidden md:flex justify-between py-8">
            <img src={'/reviewImg2.png'} alt="" width={415} height={415} />
            <img src={'/reviewImg1.png'} alt="" width={415} height={415} />
            <img src={'/reviewImg3.png'} alt="" width={415} height={415} />
          </div>
          <div className="block md:hidden">
            <IamgeSwaiper />
          </div>
        </div>
      </section>
      {/* section 5 */}
      <section className="w-full py-8">
        <div className="flex items-center flex-col  gap-y-6 max-w-7xl mx-auto">
          <div className="flex items-start flex-col md:flex-row md:justify-between w-full px-4 md:px-0 gap-y-4 md:gap-y-0">
            <div className="w-full md:w-[35%]">
              <h1 className="text-xl md:text-2xl font-bold">
                DON'T WASTE YOUR MONEY ON UNNATURAL IMPOSTERS.
              </h1>
              <p className="text-sm md:text-base font-medium text-gray-700 md:text-balance leading-6 mt-4">
                Why take a dozen different capsules when one natural solution
                can do it all? Moringa is a powerful, all-in-one supplement that
                combines the benefits of multiple vitamins and minerals. Get the
                maximum benefit without the hassle of multiple pills.
              </p>
            </div>
            <div className="w-full md:w-[30%] rounded-sm shadow-md flex flex-col items-start justify-center gap-y-5 px-4 py-6 bg-green-100">
              <h1 className="text-2xl font-bold">Pure Moringa</h1>
              <div className="flex flex-col items-start gap-y-3 text-green-500 font-medium">
                <h1>✔ Easy to consume capsule</h1>
                <h1>✔ High bioavailability of nutrients</h1>
                <h1>✔ High quality, all-naturel</h1>
                <h1>✔ More nutrients per serving</h1>
                <h1>✔ Easy to the stomach</h1>
              </div>
            </div>
            <div className="w-full md:w-[30%] rounded-sm shadow-md flex flex-col items-start justify-center gap-y-5 px-4 py-6 bg-red-100">
              <h1 className="text-2xl font-bold">Other Supplements</h1>
              <div className="flex flex-col items-start gap-y-3 text-red-500 font-medium">
                <h1>✘ Dozens of expensive capsules</h1>
                <h1>✘ Low absorption efficiency</h1>
                <h1>✘ Lab-made, unnatural, unknown quality</h1>
                <h1>✘ Fewer nutrients per serving</h1>
                <h1>✘ Cause nausea for some people</h1>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-y-4 mt-8">
            <Link to={'/shop-pure-moringa'}>
              <Button
                size={'lg'}
                variant={'outline'}
                className="cursor-pointer hover:bg-green-600 hover:text-white rounded-sm text-green-600 border-green-600 font-bold h-12 w-72 text-xl shadow-md transition-all duration-300 ease-in-out"
              >
                <span className="animate-pulse flex items-center gap-x-2">
                  TRY IT RISK FREE <IoArrowRedoOutline />
                </span>
              </Button>
            </Link>
            <span className="text-sm text-gray-500 font-medium">
              100% Money Back Guarantee
            </span>
          </div>
        </div>
      </section>
      {/* section 6 */}
      <section className="w-full py-8">
        <div className="flex items-center justify-center flex-col gap-x-4 max-w-7xl mx-auto px-4 md:px-0">
          <h1 className="text-center text-3xl font-bold md:block hidden">
            See Why Thousands of Americans Take <br /> Pure Moringa Daily
          </h1>
          <h1 className="text-center text-[26px] font-bold md:hidden block">
            See Why Thousands of Americans Take Pure Moringa Daily
          </h1>
          {/* Swiper Section */}
          <div className="w-full py-8 mb-6">
            <Carousel
              opts={{ align: 'start' }}
              className="w-full hidden md:block"
            >
              <CarouselContent className="w-full">
                {sliderImg.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="w-full lg:basis-1/3 h-full overflow-hidden"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={400}
                      height={500}
                      className="p-1 h-[600px] w-96 rounded-2xl"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <MobileImageSawiper />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <Button className="rounded-full h-10 w-96 md:w-[500px] text-lg font-medium text-white bg-green-600 shadow-md transition-all duration-300 ease-in-out hover:bg-green-700 cursor-pointer">
              BUY NOW & SAVE
            </Button>
            <span className="flex items-center gap-x-1 text-sm text-green-500 font-medium">
              <AiTwotoneSafetyCertificate size={28} />
              60-Day Money Back Guarantee
            </span>
          </div>
        </div>
      </section>
      {/* section 7 */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center  gap-y-10 px-4 md:px-0 ">
          <h1 className="md:text-6xl text-center font-bold text-4xl">
            One Superfood. Loads of Nutrition.
          </h1>
          <div className="flex items-center md:justify-between flex-col md:flex-row justify-center">
            <div className="w-full md:w-[30%] flex flex-col gap-y-8 items-start">
              <div className="w-full py-3">
                <h1 className="flex gap-x-2 items-center text-xl font-semibold">
                  <FaHeartCirclePlus size={26} className="text-green-600" />
                  Rich in Antioxidants
                </h1>
                <p className="font-medium text-sm text-gray-600 text-balance leading-6 pl-8 mt-3">
                  A nutritional powerhouse filled with antioxidants that help
                  combat free radicals and promote overall health and
                  well-being.
                </p>
              </div>
              <div className="w-full py-3 border-t-2 border-green-600/40 pt-6">
                <h1 className="flex gap-x-2 items-center text-xl font-semibold">
                  <FaGripfire size={26} className="text-green-600" />
                  Supports Inflammatory Response
                </h1>
                <p className="font-medium text-sm text-gray-600 text-balance leading-6 pl-8 mt-3">
                  Moringa's bioactive compounds, such as quercetin and
                  chlorogenic acid, help reduce inflammation, support healthier
                  bodily function
                </p>
              </div>
              <div className="w-full py-3 border-t-2 border-green-600/40 pt-6">
                <h1 className="flex gap-x-2 items-center text-xl font-semibold">
                  <FaArrowTrendUp size={26} className="text-green-600" />
                  Supports Energy Levels
                </h1>
                <p className="font-medium text-sm text-gray-600 text-balance leading-6 pl-8 mt-3">
                  Moringa's nutrient-rich profile, featuring iron and B
                  vitamins, fuels sustained energy levels, keeping you vital and
                  energized throughout the day.
                </p>
              </div>
            </div>
            <div className="w-full md:w-[30%] flex justify-center">
              <img src={'/single-bottle.png'} alt="" width={350} height={400} />
            </div>
            <div className="w-full md:w-[30%] flex flex-col gap-y-5 items-start">
              <div className="w-full py-3">
                <h1 className="flex gap-x-2 items-center text-xl font-semibold">
                  <FaLeaf size={26} className="text-green-600" />
                  Rich in Phytonutrients
                </h1>
                <p className="font-medium text-sm text-gray-600 text-balance leading-6 pl-8 mt-3">
                  Moringa is a treasure trove of phytonutrients, offering a
                  natural boost to your health with its abundant and diverse
                  vitamins and nutrients.
                </p>
              </div>
              <div className="w-full py-3 border-t-2 border-green-600/40 pt-6">
                <h1 className="flex gap-x-2 items-center text-xl font-semibold">
                  <LuPlus size={26} className="text-green-600" />
                  Supports Joint Health
                </h1>
                <p className="font-medium text-sm text-gray-600 text-balance leading-6 pl-8 mt-3">
                  Moringa's natural compounds, alongside vital nutrients like
                  vitamin C and calcium, help promote joint well-being and
                  alleviate discomfort.
                </p>
              </div>
              <div className="w-full py-3 border-t-2 border-green-600/40 pt-6">
                <h1 className="flex gap-x-2 items-center text-xl font-semibold">
                  <FaStaffSnake size={26} className="text-green-600" />
                  Aids in Digestion
                </h1>
                <p className="font-medium text-sm text-gray-600 text-balance leading-6 pl-8 mt-3">
                  Moringa's fiber content and digestive enzymes support healthy
                  digestion, aiding in nutrient absorption and overall
                  gut-health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 8 */}
      <section className="w-full py-10">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="grid md:grid-cols-[250px_1fr] gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold">{averageRating}</div>
              <div className="flex gap-1 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                {totalReviews} reviews
              </div>
            </div>
            <div className="space-y-2">
              {ratingData.map((item) => (
                <div key={item.stars} className="flex items-center gap-2">
                  <div className="w-8 text-right">{item.stars}</div>
                  <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                  <Progress
                    value={(item.count / totalReviews) * 100}
                    className="h-2 flex-1"
                  />
                  <div className="w-10 text-right text-gray-500">
                    ({item.count})
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {reviews.map((review, index) => (
              <Card key={index} className="border">
                <CardContent className="p-4">
                  <div className="font-medium">{review.name}</div>
                  <div className="flex gap-1 my-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="rounded-md px-8">
              See more reviews
            </Button>
          </div>
        </div>
      </section>
      {/* Section 9 */}
      <section className="w-full bg-green-500/70 h-auto py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Learn More About Moringa
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Link key={index} to={'/blogs/:id'}>
                <Card className="overflow-hidden bg-white rounded-xl border-0 px-2 py-2">
                  <div className="relative h-48 w-full overflow-hidden rounded-sm">
                    <img
                      src={'/blog.jpg'}
                      alt={article.title}
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl hover:underline">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      {article.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link to={'/blogs'}>
              <Button variant="link" className="text-white hover:text-white/80">
                View all
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Section 10 */}
      <section className="w-full py-10">
        <div className="container mx-auto py-16 max-w-7xl px-4 md:px-0">
          <h2 className="text-3xl font-bold text-center mb-8">FAQS</h2>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-sm my-2 px-4 shadow-sm"
              >
                <AccordionTrigger className="py-4 font-medium text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="flex justify-center mt-10">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-md text-lg font-medium">
              TRY IT RISK FREE <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
