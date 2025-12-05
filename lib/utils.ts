import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const avatars = [
  {
    id: "ash",
    name: "Ash",
    img: "https://res.cloudinary.com/gfg-members/image/upload/v1764707505/Ash_p1tl7x.png"
  },
  {
    id: "brock",
    name: "Brock",
    img: "https://res.cloudinary.com/gfg-members/image/upload/v1764707511/Brock_bgolk2.png"
  },
  {
    id: "pikachu",
    name: "Pikachu",
    img: "https://res.cloudinary.com/gfg-members/image/upload/v1764707507/Pikachu_xegujk.png"
  },
  {
    id: "charizard",
    name: "Charizard",
    img: "https://res.cloudinary.com/gfg-members/image/upload/v1764707508/Charizard_s5re4t.png"
  },
  {
    id: "misty",
    name: "Misty",
    img: "https://res.cloudinary.com/gfg-members/image/upload/v1764707508/misty_pieshw.png"
  },
  {
    id: "serena",
    name: "Serena",
    img: "https://res.cloudinary.com/gfg-members/image/upload/v1764707511/Serena_rlrh7x.png"
  },
  {
    id: "eevee",
    name: "Eevee",
    img: "https://res.cloudinary.com/gfg-members/image/upload/v1764707512/evee_gvkgip.png"
  },
  {
    id: "sylveon",
    name: "Sylveon",
    img: "https://res.cloudinary.com/gfg-members/image/upload/v1764707503/Sylveon_fbzhdo.png"
  }
];