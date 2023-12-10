export const REQUEST_STATUSES: Record<string, Statuses> = {
  idle: 'idle',
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

export type Statuses = 'idle' | 'pending' | 'fulfilled' | 'rejected';
