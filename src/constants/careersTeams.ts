import { strings } from "@/lib/strings";
import {
  Gamepad2,
  Smartphone,
  TrendingUp,
  Code,
  Users,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export type CareerTeam = {
  id: string;
  icon: LucideIcon;
  title: string;
  image: string;
};

export const careersTeams: CareerTeam[] = [
  {
    id: "product",
    icon: Gamepad2,
    title: strings.careersPage.teams.LiveOps.title,
    image:
      "https://images.unsplash.com/photo-1623743993904-b913e870da4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3132",
  },
  {
    id: "creative",
    icon: Smartphone,
    title: strings.careersPage.teams.Creative.title,
    image:
      "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2064",
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: strings.careersPage.teams.Growth.title,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    id: "hybrid",
    icon: Code,
    title: strings.careersPage.teams.Hybrid.title,
    image: "https://plus.unsplash.com/premium_photo-1682124918327-d3b6197efc43?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
  },
  {
    id: "publishing",
    icon: Users,
    title: strings.careersPage.teams.Publishing.title,
    image:
      "https://plus.unsplash.com/premium_photo-1661410847282-d6af31c576a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2064",
  },
  {
    id: "tech",
    icon: Briefcase,
    title: strings.careersPage.teams.Tech.title,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  },
  {
    id: "operations",
    icon: Briefcase,
    title: strings.careersPage.teams.Operation.title,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  },
];

