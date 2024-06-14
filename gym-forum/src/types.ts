// src/types.ts
export interface Post {
    id: number;
    title: string;
    body: string;
    user_id: number;
    created_at: string;
    updated_at: string;
  }
  
  export interface PostData {
    post: Post;
  }
  