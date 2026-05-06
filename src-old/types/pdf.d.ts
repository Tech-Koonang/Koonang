declare module 'jspdf' {
  export default class jsPDF {
    constructor(orientation?: 'p' | 'l', unit?: string, format?: string);
    addImage(imageData: string, format: string, x: number, y: number, width?: number, height?: number): void;
    addPage(orientation?: 'p' | 'l', format?: string): void;
    save(filename: string): void;
    internal: {
      pageSize: {
        width: number;
        height: number;
      };
    };
  }
}

declare module 'html2canvas' {
  export default function html2canvas(element: HTMLElement, options?: {
    scale?: number;
    useCORS?: boolean;
    allowTaint?: boolean;
    backgroundColor?: string;
    logging?: boolean;
    windowWidth?: number;
    windowHeight?: number;
  }): Promise<HTMLCanvasElement>;
}
