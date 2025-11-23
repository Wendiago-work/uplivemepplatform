export interface Job {
  id: number;
  hash: string;
  position_name: string;
  description: string;
  requirements?: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  zipcode?: string;
  location_display?: string;
  department?: string;
  contract_details?: string;
  is_salary_visible?: boolean;
  is_remote?: boolean;
  is_pinned_in_career_page?: boolean;
  published_at?: string;
  apply_url?: string;
}

export interface JobsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Job[];
}
