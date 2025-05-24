
export interface IBlog {
    id: number;
    date: string;
    title: string;
    description: string;
    imgSrc: string;
    authorImg: string;
    authorName: string;
    readTime: string;
    video_id?: string;
    image_slider?:string[];
    // Información específica de distritos de Hojancha
    district?: string;
    detailedContent?: {
      introduction: string;
      history: string;
      geography: string;
      culture: string;
      attractions: string[];
      economy: string;
      festivals: string[];
      naturalFeatures: string[];
      recommendations: string[];
      accessibility: string;
    };
  }
  