/** @format */

import {
  Monitor,
  Zap,
  Settings,
  Globe,
  BarChart2,
  Shield,
  Code,
  RefreshCw,
  Box,
  ShoppingBag,
  TrendingUp,
  Layers,
  Tool,
  Edit2,
  ShoppingCart,
  FileText,
  BookOpen,
  Users,
  Edit,
  Briefcase,
} from "react-feather"

export const navItems = [
  {
    navTitle: "Products",
    navContents: [
      {
        title: "Dx Services",
        subNav: [
          {
            heading: "Previews",
            subHeading: "Helping teams ship 6x faster",
            icon: Monitor,
          },
          {
            heading: "AI",
            subHeading: "Powering breakthroughs",
            icon: Zap,
          },
        ],
      },
      {
        title: "Managed Infrastructure",
        subNav: [
          {
            heading: "Fluid compute",
            subHeading: "Servers, in serverless form",
            icon: Settings,
          },
          {
            heading: "Rendering",
            subHeading: "Fast, scalable, and reliable",
            icon: Globe,
          },
          {
            heading: "Observability",
            subHeading: "Trace every step",
            icon: BarChart2,
          },
          {
            heading: "Security",
            subHeading: "Scale without compromising",
            icon: Shield,
          },
        ],
      },
      {
        title: "Open Source",
        subNav: [
          {
            heading: "Next.js",
            subHeading: "The native Next.js platform",
            icon: Code,
          },
          {
            heading: "Turborepo",
            subHeading: "Speed with Enterprise scale",
            icon: RefreshCw,
          },
          {
            heading: "ALSDK",
            subHeading: "The Al Toolkit for TypeScript",
            icon: Box,
          },
        ],
      },
    ],
  },
  {
    navTitle: "Solutions",
    navContents: [
      {
        title: "Use Cases",
        subNav: [
          {
            heading: "Al Apps",
            subHeading: "Deploy at the speed of Al",
            icon: Zap,
          },
          {
            heading: "Composable Commerce",
            subHeading: "Power storefronts that convert",
            icon: ShoppingBag,
          },
          {
            heading: "Marketing Sites",
            subHeading: "Launch campaigns fast",
            icon: TrendingUp,
          },
          {
            heading: "Multi-tenant Platforms",
            subHeading: "Scale apps with one codebase",
            icon: Layers,
          },
          {
            heading: "Web Apps",
            subHeading: "Ship features, not infrastructure",
            icon: Monitor,
          },
        ],
      },
      {
        title: "Users",
        subNav: [
          {
            heading: "Platform Engineers",
            subHeading: "Automate away repetition",
            icon: Tool,
          },
          {
            heading: "Design Engineers",
            subHeading: "Deploy for every idea",
            icon: Edit2,
          },
        ],
      },
    ],
  },
  {
    navTitle: "Resources",
    navContents: [
      {
        title: "Tools",
        subNav: [
          {
            heading: "Resource Center",
            subHeading: "Today's best practices",
            icon: Box,
          },
          {
            heading: "Marketplace",
            subHeading: "Extend and automate workflows",
            icon: ShoppingCart,
          },
          {
            heading: "Templates",
            subHeading: "Jumpstart app development",
            icon: FileText,
          },
          {
            heading: "Guides",
            subHeading: "Find help quickly",
            icon: BookOpen,
          },
          {
            heading: "Partner Finder",
            subHeading: "Get help from solution partners",
            icon: Users,
          },
        ],
      },
      {
        title: "Company",
        subNav: [
          {
            heading: "Customers",
            subHeading: "Trusted by the best teams",
            icon: Users,
          },
          {
            heading: "Blog",
            subHeading: "The latest posts and changes",
            icon: Edit,
          },
          {
            heading: "Changelog",
            subHeading: "See what shipped",
            icon: FileText,
          },
          {
            heading: "Press",
            subHeading: "Read the latest news",
            icon: Briefcase,
          },
        ],
      },
    ],
  },
  "Enterprise",
  "Docs",
  "Pricing",
];



