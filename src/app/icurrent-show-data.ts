export interface ICurrentShowData {
  id: number;
  name: string;
  type: string;
  language: string;
  genres: [string];
  runtime: number;
  schedule:{
    time:string
    days:[string]
  };
  image:{
    medium: string
  };
  
    
}