export interface Pokemon {
    id: number;
    name: string;
    forms: NameAndURL[]; // You might want to create a specific interface for forms
    height: number;
    is_default: boolean;
    moves: Move[]; // You might want to create a specific interface for moves
    order: number;
    species: NameAndURL;
    sprites: Sprites;
    stats: Stats[] ;
    types: Types[] ;
    weight: number;

  }
  
  interface NameAndURL {
    name: string;
    url: string;
  }

  interface Stats {
    base_stat: number;
    effort: number;
    stat: NameAndURL;
  }

  interface Types {
    slot: number;
    type: NameAndURL;
  }
  
  interface Move {
      move: NameAndURL;

  }

  interface Sprites {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    front_default?: string;
    front_female?:string;
    front_shiny_female?: string;

  }



  