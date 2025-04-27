import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="space-y-4"
      >
        <AccordionItem
          value="item-1"
          className="border rounded-lg shadow-sm bg-white"
        >
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <span className="text-left font-medium">
              What ingredients are in Pure Moringa capsules?
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 pt-1 text-muted-foreground">
            <p>
              It's simple - the purest, highest-quality Moringa - that's it!
            </p>
            <p className="mt-3">
              Each serving (two capsules) contains 800mg of Pure Nutrient-Rich
              Moringa Leaf Powder - A Natural Green Antioxidant Superfood. Our
              Moringa is passionately grown, ethically sourced, and produced
              with your health in mind. We use only the highest quality Moringa,
              and only the leaves, so you can be confident you're actually
              getting all the vitamins and nutrients you're looking for.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="border rounded-lg shadow-sm bg-white"
        >
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <span className="text-left font-medium">
              Is Pure Moringa safe to take with my current medications?
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 pt-1 text-muted-foreground">
            <p>
              While Pure Moringa is a natural supplement, we always recommend
              consulting with your healthcare provider before starting any new
              supplement, especially if you are currently taking medications.
              Your doctor can provide personalized advice based on your specific
              health situation.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="border rounded-lg shadow-sm bg-white"
        >
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <span className="text-left font-medium">
              Will the Pure Moringa supplement help with my energy levels and
              overall health?
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 pt-1 text-muted-foreground">
            <p>
              Many of our customers report improved energy levels and overall
              well-being after incorporating Pure Moringa into their daily
              routine. Moringa is rich in nutrients, antioxidants, and
              anti-inflammatory compounds that may contribute to better health.
              However, individual results may vary based on your unique body
              chemistry and lifestyle factors.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="border rounded-lg shadow-sm bg-white"
        >
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <span className="text-left font-medium">
              How long until I feel improvement in my energy levels and health?
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 pt-1 text-muted-foreground">
            <p>
              Most customers begin to notice positive changes within 2-4 weeks
              of consistent use. For optimal results, we recommend taking Pure
              Moringa daily as directed. Remember that nutritional supplements
              work best as part of a healthy lifestyle that includes proper
              diet, regular exercise, and adequate rest.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="border rounded-lg shadow-sm bg-white"
        >
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <span className="text-left font-medium">
              Are there any age or health restrictions?
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 pt-1 text-muted-foreground">
            <p>
              Pure Moringa is generally considered safe for adults. However,
              pregnant or nursing women, children under 18, and individuals with
              known medical conditions should consult with a healthcare
              professional before use. Always follow the recommended dosage
              instructions on the product label.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-6"
          className="border rounded-lg shadow-sm bg-white"
        >
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <span className="text-left font-medium">
              What is your return policy?
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 pt-1 text-muted-foreground">
            <p>
              We stand behind our product with a 100% satisfaction guarantee. If
              you're not completely satisfied with your purchase for any reason,
              simply return it within 30 days for a full refund of the purchase
              price, no questions asked. Please contact our customer service
              team to initiate the return process.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-10 flex justify-center">
        <Button className="bg-[#8bba91] hover:bg-[#7aa980] text-white px-8 py-6 rounded-md text-lg font-medium">
          TRY IT RISK FREE <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
