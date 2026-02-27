import { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";

export interface Quest {
  id?: string | number;
  name: string;
  icon: string;
  status: "Completed" | "Ongoing" | "Failed";
  date_start: string;
  date_end?: string | null;
}

export interface Certificate {
  id?: string | number;
  name: string;
  issuer: string;
  year_start: string;
  year_end: string;
  icon: string;
}

export const SelectedIcons: Record<string, LucideIcon> = {
  // Combined selection logic
  Sword: LucideIcons.Sword, Shield: LucideIcons.Shield, Zap: LucideIcons.Zap, 
  Target: LucideIcons.Target, Flame: LucideIcons.Flame, Trophy: LucideIcons.Trophy, 
  Crown: LucideIcons.Crown, Compass: LucideIcons.Compass, Map: LucideIcons.Map, 
  Flag: LucideIcons.Flag, Code: LucideIcons.Code, Terminal: LucideIcons.Terminal, 
  CircleUser: LucideIcons.CircleUser, MapPinHouse: LucideIcons.MapPinHouse, 
  BookText: LucideIcons.BookText, Calendar: LucideIcons.Calendar, 
  ShieldCheck: LucideIcons.ShieldCheck, Cog: LucideIcons.Cog, 
  LocateFixed: LucideIcons.LocateFixed, Brain: LucideIcons.Brain, 
  Bookmark: LucideIcons.Bookmark, Book: LucideIcons.Book, 
  ScrollText: LucideIcons.ScrollText, Scroll: LucideIcons.Scroll, 
  PenTool: LucideIcons.PenTool, HandCoins: LucideIcons.HandCoins, 
  Cpu: LucideIcons.Cpu, Server: LucideIcons.Server
};