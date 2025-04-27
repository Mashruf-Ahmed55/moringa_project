export default function RefundPolicyPage() {
  return (
    <div className="bg-gray-100 w-full">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold border-2 border-e-red-500 border-s-red-500 text-center px-8 rounded-md py-4">
          Refund policy
        </h1>

        <div className="space-y-6 mt-4">
          <div>
            <h2 className="text-lg font-medium mb-2">Refund Policy</h2>
            <p className="text-gray-700">
              Thank you for shopping with us at Try Pure Moringa. We're
              committed to providing high-quality products and great customer
              service. If for any reason you are not completely satisfied with
              your purchase, we're here to help.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">
              60-Day Refund Guarantee
            </h2>
            <p className="text-gray-700">
              We offer a 60-day refund policy, which means you have 60 calendar
              days from the date of your purchase to request a refund. If 60
              days have passed since your purchase, unfortunately, we cannot
              offer you a refund.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">
              How to Request a Refund
            </h2>
            <p className="text-gray-700">
              To initiate a refund, please contact our support team at{' '}
              <span className="font-medium">contact@trypuremoringa.com</span>.
              Be sure to include the following information in your email:
            </p>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>- Your full name</li>
              <li>- Order number</li>
              <li>- The reason for your refund request</li>
            </ul>
            <p className="mt-2 text-gray-700">
              Our team will review your request and respond within 1-2 business
              days with further instructions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">
              Eligibility for Refunds
            </h2>
            <p className="text-gray-700">To be eligible for a refund:</p>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>
                - The request must be made within 60 days of the order date.
              </li>
              <li>
                - The product must have been purchased directly from{' '}
                <span className="font-medium">trypuremoringa.com</span>.
              </li>
            </ul>
            <p className="mt-2 text-gray-700">
              In some cases, we may request that you return the product, even if
              partially used, before processing your refund.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">Processing Refunds</h2>
            <p className="text-gray-700">
              Once your refund is approved, we will issue a refund to your
              original method of payment. Please note that it may take 5-10
              business days for the refund to reflect on your account, depending
              on your payment provider.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about our refund policy or need
              assistance, don't hesitate to reach out to us at{' '}
              <span className="font-medium">contact@trypuremoringa.com</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
