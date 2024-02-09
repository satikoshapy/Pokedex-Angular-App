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
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      'official-artwork': {
        front_default: string | null;
        front_shiny: string | null;
      };
    };
  }

  export interface species {
    color: NameAndURL;
    egg_groups: NameAndURL[];
    evolution_chain: {
      url: string
    },
    flavor_text_entries: 
    {flavor_text: string;
    }[]
  }
  





  