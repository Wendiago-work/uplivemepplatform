export const queryKeys = {
  jobs: () => ["jobs"] as const,
  job: (id: string | null) => ["job", id] as const,
};

