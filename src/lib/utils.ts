import { Icons } from "@/components/svgs";
import { clsx, type ClassValue } from "clsx";
import { LayoutPanelLeft } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: Icons.dashboard,
    link: "/",
  },
  {
    title: "Our Experts",
    icon: Icons.expert,
    link: "/experts",
  },
  {
    title: "PEAP",
    icon: Icons.peap,
    link: "/peap",
  },
  {
    title: "Survey",
    icon: Icons.survey,
    link: "/survey",
  },
  {
    title: "Self Assessment",
    icon: Icons.assessment,
    link: "/assessment",
  },
  {
    title: "Admins",
    icon: Icons.admins,
    link: "/admins",
  },
  {
    title: "B2B",
    icon: Icons.b2b,
    link: "/b2b",
  },
  {
    title: "Partners",
    icon: Icons.partners,
    link: "/partners",
  },
  {
    title: "Users",
    icon: Icons.users,
    link: "/users",
  },
  {
    title: "Content Approval",
    icon: Icons.approval,
    link: "/content_approval",
  },
  {
    title: "Management",
    icon: Icons.management,
    link: "/management",
  },
  {
    title: "Push Notifications",
    icon: Icons.notifications,
    link: "/notifications",
  },
  {
    title: "CMS",
    icon: Icons.cms,
    link: "/cms",
  },
  {
    title: "CONFIG",
    icon: Icons.config,
    link: "/config",
  },
  {
    title: "App Feedback",
    icon: Icons.feedback,
    link: "/feedback",
  },
];

export function encodeImageFileAsURL(
  file: File,
  callBack: (val: string) => void
) {
  const reader = new FileReader();
  reader.onloadend = function () {
    console.log("RESULT", reader.result);
    callBack(reader.result as string);
  };
  reader.readAsDataURL(file);
}
