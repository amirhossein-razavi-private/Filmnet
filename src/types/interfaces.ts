// REDUX
export interface IActions {
  type: string;
  payload: any;
}

// API REQUESTS
export interface IRequests {
  path: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
  contentType: string;
  body: any;
}

// CONTENTS
export interface IContentCategories {
  type: string;
  items: [];
}

export interface IContent {
  id: string;
  categories: { [index: number]: IContentCategories };
  cover_image: {
    path: string
  },
  page_title: string,
  year: number,
  duration: string,
  imdb_rank_percent: number,
}