import {
  Flame,
  Droplet,
  Zap,
  Leaf,
  Snowflake,
  HandFist,
  Skull,
  Mountain,
  Feather,
  Eye,
  Bug,
  Star,
  Shield,
  Moon,
  Gem,
  Heart,
  BarChart,
  Circle
} from "lucide-react";

export const typeColors: Record<string, string> = {
  fire: "var(--type-fire)",
  water: "var(--type-water)",
  electric: "var(--type-electric)",
  grass: "var(--type-grass)",
  ice: "var(--type-ice)",
  fighting: "var(--type-fighting)",
  poison: "var(--type-poison)",
  ground: "var(--type-ground)",
  flying: "var(--type-flying)",
  psychic: "var(--type-psychic)",
  bug: "var(--type-bug)",
  rock: "var(--type-rock)",
  ghost: "var(--type-ghost)",
  dragon: "var(--type-dragon)",
  dark: "var(--type-dark)",
  steel: "var(--type-steel)",
  fairy: "var(--type-fairy)",
  normal: "var(--type-normal)",
};

export const typeIcons: Record<string, React.ElementType> = {
  fire: Flame,
  water: Droplet,
  electric: Zap,
  grass: Leaf,
  ice: Snowflake,
  fighting: HandFist,
  poison: Skull,
  ground: Mountain,
  flying: Feather,
  psychic: Eye,
  bug: Bug,
  rock: Star,
  ghost: Moon,
  dragon: Gem,
  dark: Moon,
  steel: Shield,
  fairy: Star,
  normal: Circle
};

export const statInfo: Record<
  string,
  { label: string; icon?: React.ElementType }
> = {
  hp: { label: "HP", icon: Heart },
  attack: { label: "Attack", icon: Zap },
  defense: { label: "Defense", icon: Shield },
  "special-attack": { label: "Sp. Attack", icon: BarChart },
  "special-defense": { label: "Sp. Defense", icon: BarChart },
  speed: { label: "Speed", icon: Zap }
};

export const moveBadgeColor = "var(--bs-secondary)";
export const abilityBadgeColor = "var(--bs-primary)";
