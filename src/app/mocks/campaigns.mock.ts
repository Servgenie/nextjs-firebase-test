import { CampaignStatus } from "../types/campaign-status.enum";
import { Campaign } from "../types/campaign.interface";

const campaigns: Campaign[] = [
  {
    id: 1,
    name: "Summer Sale",
    subject: "Don't Miss Our Summer Sale!",
    previewText:
      "Enjoy huge discounts on all your favorite products this summer. Whether you’re looking for clothing, electronics, or home goods, we have something for everyone. Don’t miss out!",
    status: CampaignStatus.Draft,
    sender: {
      id: 10,
      name: "Marketing Team",
      email: "marketing@example.com",
    },
    htmlContent: `
        <html>
          <body>
            <h1>Summer Sale!</h1>
            <p>Dear Valued Customer,</p>
            <p>We are thrilled to announce our biggest summer sale ever! For a limited time, enjoy massive discounts on a wide range of products. Whether you're looking to refresh your wardrobe, upgrade your gadgets, or add a touch of summer to your home, we have something for everyone.</p>
            <p>Check out our featured deals:</p>
            <ul>
              <li>Up to 50% off on clothing and accessories</li>
              <li>30% off on the latest smartphones and tablets</li>
              <li>Buy one, get one free on select home decor items</li>
            </ul>
            <p>But that's not all! Every purchase made during the sale will enter you into a raffle to win a free vacation to a tropical destination. Don't miss this amazing opportunity to save big and have a chance at an unforgettable getaway.</p>
            <p>Hurry, the sale ends soon!</p>
            <p>Best regards,</p>
            <p>The Marketing Team</p>
          </body>
        </html>
      `,
    sentDate: "2023-06-01T10:00:00.000Z",
  },
  {
    id: 2,
    name: "Newsletter July",
    subject: "July Updates",
    previewText:
      "Stay informed with the latest updates, new product launches, and exciting events happening this month. We have plenty of news and offers to keep you engaged and excited!",
    status: CampaignStatus.Sent,
    sender: {
      id: 11,
      name: "Newsletter",
      email: "newsletter@example.com",
    },
    htmlContent: `
        <html>
          <body>
            <h1>July News and Updates</h1>
            <p>Dear Subscriber,</p>
            <p>We hope you're enjoying your summer! This July, we have some exciting updates and offers to share with you.</p>
            <p>Here's what you can look forward to:</p>
            <ul>
              <li>A sneak peek at our upcoming product line</li>
              <li>Exclusive interviews with industry experts</li>
              <li>Special discounts just for our newsletter subscribers</li>
            </ul>
            <p>Be sure to check your inbox regularly for exclusive offers and early access to sales.</p>
            <p>We also want to hear from you! Share your thoughts with us by replying to this email or taking part in our latest survey.</p>
            <p>Best regards,</p>
            <p>The Newsletter Team</p>
          </body>
        </html>
      `,
    sentDate: "2023-07-01T10:00:00.000Z",
  },
  {
    id: 3,
    name: "Black Friday Deals",
    subject: "Get Ready for Black Friday!",
    previewText:
      "The biggest sale event of the year is almost here! Prepare for jaw-dropping discounts on electronics, fashion, home appliances, and much more. Mark your calendar for Black Friday!",
    status: CampaignStatus.Sent,
    sender: {
      id: 12,
      name: "Sales Team",
      email: "sales@example.com",
    },
    htmlContent: `
        <html>
          <body>
            <h1>Black Friday is Coming!</h1>
            <p>Dear Shopper,</p>
            <p>The wait is almost over! Our Black Friday deals are just around the corner, and we have some of the most incredible offers you'll find this year.</p>
            <p>Be sure to check out:</p>
            <ul>
              <li>Up to 70% off on the latest electronics</li>
              <li>Exclusive doorbuster deals on fashion and accessories</li>
              <li>Massive discounts on home appliances and gadgets</li>
            </ul>
            <p>We'll also be offering early access to select deals for our loyal customers, so stay tuned!</p>
            <p>Don't miss out on the chance to save big this holiday season. Prepare your shopping list and get ready to score some fantastic deals.</p>
            <p>Best regards,</p>
            <p>The Sales Team</p>
          </body>
        </html>
      `,
    sentDate: "2023-11-23T08:00:00.000Z",
  },
  {
    id: 4,
    name: "Holiday Greetings",
    subject: "Happy Holidays from Us!",
    previewText:
      "We wish you and your family all the joy and warmth of the holiday season. Thank you for being a part of our community, and we look forward to serving you in the new year!",
    status: CampaignStatus.Sent,
    sender: {
      id: 13,
      name: "Customer Support",
      email: "support@example.com",
    },
    htmlContent: `
        <html>
          <body>
            <h1>Happy Holidays!</h1>
            <p>Dear Customer,</p>
            <p>As the holiday season approaches, we want to take a moment to thank you for being a valued member of our community. Your support and loyalty mean the world to us.</p>
            <p>We hope this season brings you joy, peace, and warmth as you celebrate with your loved ones. We look forward to continuing to serve you in the year ahead.</p>
            <p>From all of us at [Company Name], we wish you the happiest of holidays and a wonderful new year!</p>
            <p>Sincerely,</p>
            <p>The Customer Support Team</p>
          </body>
        </html>
      `,
    sentDate: "2023-12-24T18:00:00.000Z",
  },
  {
    id: 5,
    name: "New Year Offers",
    subject: "Start the New Year with Great Savings!",
    previewText:
      "Kick off the new year with unbeatable offers on a wide range of products. From tech gadgets to home essentials, we’ve got everything you need to start 2024 on the right foot!",
    status: CampaignStatus.Sent,
    sender: {
      id: 14,
      name: "Promotions Team",
      email: "promotions@example.com",
    },
    htmlContent: `
        <html>
          <body>
            <h1>New Year Offers!</h1>
            <p>Dear Shopper,</p>
            <p>The new year is here, and so are our amazing offers! We’ve put together a collection of the best deals to help you start 2024 with a bang.</p>
            <p>Take advantage of:</p>
            <ul>
              <li>Exclusive discounts on the latest tech</li>
              <li>Up to 40% off home essentials</li>
              <li>Special bundles on fitness gear and accessories</li>
            </ul>
            <p>These offers are available for a limited time, so don’t wait! Start your year off right by shopping with us today.</p>
            <p>Best regards,</p>
            <p>The Promotions Team</p>
          </body>
        </html>
      `,
    sentDate: "2024-01-01T00:00:00.000Z",
  },
  {
    id: 6,
    name: "Product Launch",
    subject: "Introducing Our Latest Product!",
    previewText:
      "We are excited to unveil our newest product, designed to revolutionize the way you live. Be the first to experience innovation at its finest. Available soon!",
    status: CampaignStatus.Sent,
    sender: {
      id: 15,
      name: "Product Team",
      email: "product@example.com",
    },
    htmlContent: `
        <html>
          <body>
            <h1>New Product Launch!</h1>
            <p>Dear Customer,</p>
            <p>We are thrilled to introduce our latest innovation! This new product is the result of extensive research and development, designed to meet your needs and exceed your expectations.</p>
            <p>Key features include:</p>
            <ul>
              <li>Cutting-edge technology for superior performance</li>
              <li>Innovative design that combines form and function</li>
              <li>Environmentally friendly materials and processes</li>
            </ul>
            <p>Stay tuned for more details and be ready to experience the future with our newest product. It will be available soon!</p>
            <p>Best regards,</p>
            <p>The Product Team</p>
          </body>
        </html>
      `,
    sentDate: "2024-02-15T12:00:00.000Z",
  },
];

export { campaigns };
