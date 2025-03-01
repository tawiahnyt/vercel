/** @format */

import {
  Monitor,
  Sparkles,
  Settings,
  Globe,
  BarChart,
  Shield,
  Code,
  RefreshCw,
  Box,
  ShoppingBag,
  TrendingUp,
  Layers,
  PenToolIcon as Tool,
  ShoppingCart,
  FileText,
  BookOpen,
  Users,
  Edit,
  Briefcase,
  Circle,
} from "lucide-react";

interface NavCardProps {
  heading: string;
  subHeading: string;
  icon: string;
}

export function NavCard({ heading, subHeading, icon }: NavCardProps) {
  return (
    <div className="flex items-start space-x-3 group cursor-pointer">
      <div className="flex-shrink-0 p-2 bg-gray-900 rounded-md">
        {renderIcon(icon)}
      </div>
      <div>
        <h3 className="font-medium group-hover:text-blue-400 transition-colors">
          {heading}
        </h3>
        <p className="text-sm text-gray-400">{subHeading}</p>
      </div>
    </div>
  );
}

function renderIcon(iconName: string) {
  const iconProps = { className: "w-5 h-5" };

  switch (iconName) {
    case "monitor":
      return <Monitor {...iconProps} />;
    case "sparkles":
      return <Sparkles {...iconProps} />;
    case "settings":
      return <Settings {...iconProps} />;
    case "globe":
      return <Globe {...iconProps} />;
    case "bar-chart":
      return <BarChart {...iconProps} />;
    case "shield":
      return <Shield {...iconProps} />;
    case "code":
      return <Code {...iconProps} />;
    case "refresh-cw":
      return <RefreshCw {...iconProps} />;
    case "box":
      return <Box {...iconProps} />;
    case "shopping-bag":
      return <ShoppingBag {...iconProps} />;
    case "trending-up":
      return <TrendingUp {...iconProps} />;
    case "layers":
      return <Layers {...iconProps} />;
    case "tool":
      return <Tool {...iconProps} />;
    case "pen-tool":
      return <Tool {...iconProps} />;
    case "shopping-cart":
      return <ShoppingCart {...iconProps} />;
    case "file-text":
      return <FileText {...iconProps} />;
    case "book-open":
      return <BookOpen {...iconProps} />;
    case "users":
      return <Users {...iconProps} />;
    case "edit":
      return <Edit {...iconProps} />;
    case "briefcase":
      return <Briefcase {...iconProps} />;
    default:
      return <Circle {...iconProps} />;
  }
}
