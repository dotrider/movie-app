// Every movie has a title, description, Average ratings, your rating, comments.

export interface Movie {
    id: number;
    title: string;
    description: string;
    averageRating: number;
    myRating: number;
    comments: string;
  }
  