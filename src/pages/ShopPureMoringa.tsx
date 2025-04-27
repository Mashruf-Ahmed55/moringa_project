import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  promiseData,
  ShopPureMoringaDescription,
  timeLineData,
} from '@/constants';
import { useState } from 'react';
import { Chrono } from 'react-chrono';
import { GoDotFill } from 'react-icons/go';
import { LiaCertificateSolid } from 'react-icons/lia';

const images = [
  '/p_img/1.webp',
  '/p_img/2.webp',
  '/p_img/3.webp',
  '/p_img/4.webp',
  '/p_img/5.webp',
  '/p_img/6.webp',
  '/p_img/7.webp',
];

export default function ShopPureMoringa() {
  const [selectImage, setSelectImage] = useState(images[0]);

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex items-center justify-between h-[calc(100dvh-100px)] pt-12">
          {/* Left Side - Image and Thumbnails */}
          <div className="w-1/2 flex items-center justify-center flex-col gap-y-2">
            <img
              src={selectImage}
              width={500}
              height={500}
              alt=""
              className="w-157 h-157 border object-contain"
            />
            <div className="flex items-center justify-center gap-x-[11px] flex-wrap">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  width={100}
                  height={100}
                  alt=""
                  className={`w-20 h-20 cursor-pointer object-cover rounded ${
                    selectImage === image
                      ? 'border-2 border-emerald-400'
                      : 'border'
                  }`}
                  onClick={() => setSelectImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-1/2 h-[calc(100dvh-100px)] px-4 flex flex-col gap-y-6 mt-21">
            <h1 className="text-4xl font-bold">Pure Moringa Powder Capsules</h1>

            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-red-600 line-through">$476</span>
              <span className="text-green-600">US$157.95</span>
            </h2>
            <h3 className="text-xl font-semibold">
              91% of Americans Lack Essential Nutrients - Do You?
            </h3>
            <p className="text-justify leading-relaxed text-lg">
              Nutrition is the key to wellness. Fill your body with nutrients,
              and it will thrive! <br />
              <br />
              Transform your well-being with Pure Moringa - the ultimate green
              superfood packed with more nutrients than any other plant. Add it
              to your morning routine and feel your body's true optimal
              performance.
              <span className="font-semibold">
                {' '}
                27 vitamins, 9 essential amino acids, 46 antioxidants
              </span>
              and minerals like magnesium, iron, and calcium all working to give
              you:
            </p>

            <div className="border-b border-gray-200 pb-4">
              <ul className=" list-inside text-justify text-lg">
                <li>✔ Increased energy</li>
                <li>✔ Improved digestion</li>
                <li>✔ Better sleep</li>
                <li>✔ Stronger immune system</li>
                <li>✔ Clearer skin</li>
                <li>✔ Reduced inflammation</li>
              </ul>
            </div>

            <span className="text-green-600 font-medium flex items-center gap-x-2 text-sm">
              <GoDotFill className="text-green-600 animate-ping" />
              In stock - Limited units available
            </span>

            <Button className="w-full uppercase h-12 rounded-full text-xl font-semibold bg-emerald-700 hover:bg-emerald-800 transition-colors">
              Buy Now
            </Button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center flex-col gap-y-6 py-12">
          <h1 className="text-3xl font-bold text-center mt-12">
            Product Description
          </h1>
          <div
            className="flex flex-col items-center gap-4 border w-[70%] mx-auto p-4 rounded-lg bg-[#f5faf7]
          "
          >
            <img
              src={'/refundLogo.png'}
              alt="Refund Logo"
              width={100}
              height={100}
            />
            <div className="text-center">
              <h1 className="font-bold text-xl">Feel better or it's free!</h1>
              <p className="text-base text-gray-500">
                If you don't notice a health boost, we'll refund you within 60
                days of the product being delivered. No questions asked.
              </p>
            </div>
          </div>
          <Accordion
            defaultValue="item-0"
            type="single"
            collapsible
            className="w-[70%] mx-auto flex flex-col gap-y-3"
          >
            {ShopPureMoringaDescription.map((item, index) => (
              <AccordionItem
                value={`item-${index}`}
                className="border shadow-xs rounded-sm px-3"
              >
                <AccordionTrigger className="text-xl font-semibold">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-justify">
                  <p dangerouslySetInnerHTML={{ __html: item.content }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {/* Video Box 1 */}
        <div className="w-full flex items-center justify-between mb-7">
          <div className="w-1/2 p-7 flex items-start flex-col gap-y-4">
            <h1 className="text-[34px] font-bold">
              Today's Food Leaves Us Deficient
            </h1>
            <p className="text-justify leading-relaxed text-lg">
              Over-farming, aggressive cash cropping, GMOs and pesticides have
              depleted the nutrients in our soil, meaning the foods we eat today
              are less nutrient-dense than they were decades ago. Without these
              essential nutrients, your body struggles to function at its best.
              <br />
              <br />
              91% of Americans are lacking critical nutrients their bodies need
              <br />
              <br />
              to thrive. 74% suffer from symptoms like fatigue, brain fog, and
              poor sleep—all signs of underlying nutrient deficiencies. <br />{' '}
              <br /> Every cell, in every system within your body, needs
              specific nutrients in order to do their job properly. When the
              food you eat doesn't contain the nutrients you need, those cell,
              and the systems they belong to, can't function properly. Over
              time, this manifest in different ways - Constant fatigue,
              irritability, poor sleep, brain fog. Over time, your nutrient
              deficiency and cellular dysfunction create a cascade of problems,
              leaving you feeling drained, out of balance, and worse.
            </p>
          </div>
          <div className="w-1/2 overflow-hidden flex items-center justify-center">
            <video
              src="/vid1.mp4"
              className="h-[85%] object-cover mx-auto w-[85%] rounded-2xl"
              muted
              autoPlay
              playsInline
              loop
            />
          </div>
        </div>
        {/* Video Box 2 */}
        <div className="w-full flex items-center justify-between rounded-t-2xl">
          <div className="w-1/2">
            <video
              src="/v2.mp4"
              className="h-[85%] object-cover mx-auto w-[85%] rounded-2xl"
              muted
              autoPlay
              playsInline
              loop
            />
          </div>
          <div className="w-1/2 flex flex-col gap-y-2 p-7">
            <h1 className="text-[34px] font-bold text-center">
              Pure Moringa: <br /> The Miracle Tree Solution
            </h1>
            <p className="text-justify leading-relaxed text-lg">
              Known as the “Miracle Tree,” Moringa has been cherished for
              centuries for its incredible health benefits. Its unmatched
              nutrient profile makes it a powerful tool for restoring balance
              and vitality to the body. <br /> <br /> Packed with over 90
              essential nutrients—including vitamins, minerals, and
              antioxidants—Pure Moringa replenishes your body of what it’s
              missing. These nutrients:
            </p>
            <ul className="text-justify leading-relaxed text-lg pl-4">
              <li>
                ✔ Restore mitochondrial function to efficiently convert food
                into energy
              </li>
              <li>✔ Reduce oxidative stress and repair damaged cells</li>
              <li>
                ✔ Support better sleep, balanced mood, and improved vitality
              </li>
            </ul>
            <p className="text-justify leading-relaxed text-lg">
              Feel revitalized from the inside out. With Pure Moringa, you’re
              harnessing the power of nature’s most nutrient-dense plant to
              reclaim your energy, balance, and resilience.
            </p>
          </div>
        </div>

        <div className="w-full bg-[#86b48d] flex items-center justify-center flex-col gap-y-10 my-10 p-8">
          <h1 className="text-[34px] font-bold text-center text-white">
            The Science Supporting PURE
          </h1>
          <img src="/scienceImg.webp" className="w-full" alt="" />
          <h1 className="text-center font-bold text-lg text-white">
            Results from clinical studies on Pure Moringa:
          </h1>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col items-center justify-center gap-y-2">
              <h2 className="text-3xl text-[#f4a623] font-bold">73%</h2>
              <p className="text-center text-white text-lg font-light">
                Reported a noticeable reduction in cortisol levels, verified
                through saliva and blood tests.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <h2 className="text-3xl text-[#f4a623] font-bold">81%</h2>
              <p className="text-center text-white text-lg font-light">
                Experienced deeper, more restorative sleep based on monitored
                sleep studies.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <h2 className="text-3xl text-[#f4a623] font-bold">86%</h2>
              <p className="text-center text-white text-lg font-light">
                Showed reduction in oxidative stress, and boosted immunity
                verified through clinical tests.
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center gap-y-2">
              <h2 className="text-3xl text-[#f4a623] font-bold">77%</h2>
              <p className="text-center text-white text-lg font-light">
                Noticed healthier skin, stronger nails, and improved hair
                quality.
              </p>
            </div>
          </div>
          <h1 className="text-center font-bold text-lg text-white">
            With Pure Moringa, you’re giving your body the nutrients it needs to
            thrive—backed by real results.
          </h1>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="w-1/2 p-7 flex flex-col gap-y-4">
            <h1 className="text-3xl font-bold">
              One Ingredient, Endless Benefits
            </h1>
            <p className="text-justify leading-relaxed text-lg">
              Unlike most supplements with long, unrecognizable ingredient
              lists, Pure Moringa keeps it simple with just one ingredient: 100%
              pure Moringa leaf powder. It’s nature’s most powerful solution for
              total wellness - Packed with essential nutrients like:
            </p>
            <p className="text-lg font-bold">Vitamins:</p>
            <ul className="list-inside pl-4 flex flex-col gap-y-2 items-start">
              <li>✔ Vitamin A for healthy skin, vision, and immunity</li>
              <li>
                ✔ Vitamin C to fight oxidative stress and support collagen
                production
              </li>
              <li>
                ✔ B Vitamins (B1, B2, B6, B12) to boost energy and support brain
                function
              </li>
            </ul>
            <p className="text-lg font-bold">Minerals:</p>
            <ul className="list-inside pl-4 flex flex-col gap-y-2 items-start">
              <li>✔ Calcium for strong bones and teeth</li>
              <li>✔ Magnesium to promote relaxation and deeper sleep</li>
              <li>✔ Potassium for healthy muscle and nerve function</li>
            </ul>
            <p className="text-lg font-bold"> Antioxidants:</p>
            <ul className="list-inside pl-4 flex flex-col gap-y-2 items-start">
              <li>✔ Quercetin to combat inflammation and protect your cells</li>
              <li>✔ Chlorogenic acid to support healthy blood sugar levels</li>
              <li>✔ Beta-carotene to neutralize harmful free radicals</li>
            </ul>
          </div>
          <div className="w-1/2 flex items-center justify-center p-7">
            <img src="/moringa_detailsimg.webp" alt="" />
          </div>
        </div>

        <div className="my-12">
          <h1 className="text-center text-4xl font-bold my-8">
            Here’s How Pure Moringa Compares to Other Healthy Foods:
          </h1>
          <div className="grid grid-cols-3 w-full gap-8">
            <img src="/v_img/v1.webp" alt="" />
            <img src="/v_img/v2.webp" alt="" />
            <img src="/v_img/v3.webp" alt="" />
            <img src="/v_img/v4.webp" alt="" />
            <img src="/v_img/v5.webp" alt="" />
            <img src="/v_img/v6.webp" alt="" />
          </div>
          <div className="flex items-center justify-center flex-col gap-y-4 mt-12">
            <Button className="w-[70%] uppercase h-12 rounded-full text-xl font-semibold bg-emerald-700 hover:bg-emerald-800 transition-colors">
              BUY NOW
            </Button>
            <span className="flex items-center gap-x-2 font-semibold">
              <LiaCertificateSolid size={24} />
              <p>60-Day Money Back Guarantee</p>
            </span>
          </div>
        </div>

        <div className="w-full bg-[#86b48d] my-12">
          <h1 className="text-4xl text-center text-white font-bold py-8">
            The Pure Moringa Promise
          </h1>
          <div className="w-full grid grid-cols-6 gap-4 p-8">
            {promiseData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-y-2"
              >
                <img src={item.img} className="w-20" alt="" />
                <p className="text-white text-base text-center font-medium">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-y-8 my-12">
          <h1 className="text-center text-4xl text-[#86b48d] font-bold">
            What Should You Expect From Consistent Use of Pure Moringa?
          </h1>
          <div>
            <Chrono
              focusActiveItemOnLoad
              mode="VERTICAL_ALTERNATING"
              items={timeLineData}
              disableToolbar={true}
              slideShow
              slideItemDuration={4500}
              slideShowType="reveal"
              classNames={{
                card: 'my-card',
                cardMedia: 'my-card-media',
                cardSubTitle: 'my-card-subtitle',
                cardText: 'my-card-text',
                cardTitle: 'my-card-title',
                controls: 'my-controls',
                title: 'my-title',
              }}
              theme={{
                primary: '#86b48d53',
                secondary: '#86b48d',
                cardBgColor: '#f5faf7',
                titleColor: '#86b48d',
                titleColorActive: '#ffffff',
                titleColorInactive: '#000',
                titleFontSize: '1.5rem',
                cardTitleColor: '#86b48d',
              }}
              cardHeight={100}
            />
          </div>
          <div className="flex items-center justify-center flex-col gap-y-4 mt-12">
            <Button className="w-md uppercase h-12 rounded-full text-xl font-semibold bg-emerald-700 hover:bg-emerald-800 transition-colors">
              BUY NOW
            </Button>
            <span className="flex items-center gap-x-2 font-semibold">
              <LiaCertificateSolid size={24} />
              <p>60-Day Money Back Guarantee</p>
            </span>
          </div>
        </div>

        <div>
          <h1></h1>
        </div>
      </div>
    </section>
  );
}
