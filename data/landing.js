import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";
// Stats Data
export const statsData = [
  {
    value: "50",
    unit : "k+",
    label: "Active Users",
  },
  {
    value: "2",
    unit : "B+",
    label: "Transactions Tracked",
  },
  {
    value: "99.9",
    unit : "%",
    label: "Uptime",
  },
  {
    value: "4.9",
    unit:"/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Smart Receipt Scanner",
    description:
      "Extract data automatically from receipts using advanced AI technology",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Multi-Currency",
    description: "Support for multiple currencies with real-time conversion",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote:
      "Welth has transformed how I manage my business finances. The AI insights have helped me identify cost-saving opportunities I never knew existed.",
  },
  {
    name: "Michael Chen",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "The receipt scanning feature saves me hours each month. Now I can focus on my work instead of manual data entry and expense tracking.",
  },
  {
    name: "Emily Rodriguez",
    role: "Financial Advisor",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    quote:
      "I recommend Welth to all my clients. The multi-currency support and detailed analytics make it perfect for international investors.",
  },
]
export const testimonials = [
  {
    rating: 5, // Number of stars
    text: "It’s an all-in-one solution that has turbocharged our growth. The lead generation capabilities speak through our partner results.",
    person: {
      name: "John Carter",
      role: "Marketing Director",
      image: "/path-to-john-carter-image.jpg", // Update with actual image path
    },
  },
  {
    rating: 4,
    text: "This platform has significantly improved our workflow. The features are intuitive and easy to use.",
    person: {
      name: "Sarah Thompson",
      role: "Product Manager",
      image: "/path-to-sarah-thompson-image.jpg",
    },
  },
  {
    rating: 5,
    text: "A must-have tool for businesses looking to scale efficiently. The customer support is also top-notch.",
    person: {
      name: "David Anderson",
      role: "CEO, Tech Innovators",
      image: "/path-to-david-anderson-image.jpg",
    },
  },
];

  // export const features = [
  
  //   {
  //     "title": "Budget Planning",
  //     "description": "Plan, track, and manage your budget with ease.",
  //   },
  //   {
  //     "title": "Multi-Account Support",
  //     "description": "Manage all your accounts in one place for better control.",
  //     "img": ""
  //   },
  //   {
  //     "title": "Multi-Currency",
  //     "description": "Track finances in multiple currencies without any hassle.",
  //     "img": "path/to/multi-currency-image.jpg"
  //   },
  //   {
  //     "title": "Advanced Insights",
  //     "description": "Receive personalized, AI-powered insights to improve your financial health.",
  //     "img": "path/to/advanced-insights-image.jpg"
  //   }
  // ]
