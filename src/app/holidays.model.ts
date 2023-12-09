// src/app/holiday.model.ts

export interface Holidays {
    id: number;
    name: string;
    description: string;
  }
  
  export class HolidaysModel implements Holidays {
    constructor(
      public id: number,
      public name: string,
      public description: string
    ) {}
  }
  