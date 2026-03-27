// types.ts

// Define the types
type WorkerOptions = {
  workerId: string;
  // Add other properties as needed
};

type Event = {
  type: string;
  payload: any;
};

type AnalyticsEvent = {
  type: 'event';
  payload: {
    name: string;
    properties: {
      [key: string]: any;
    };
  };
};

type PageViewEvent = {
  type: 'page_view';
  payload: {
    url: string;
    referrer: string;
    title: string;
  };
};

type TrackEvent = {
  type: 'track';
  payload: {
    event: AnalyticsEvent;
  };
};

type PageViewTrackEvent = {
  type: 'track';
  payload: {
    event: PageViewEvent;
  };
};

// Define the types for the analytics worker
type AnalyticsWorkerOptions = {
  analyticsUrl: string;
  workerOptions: WorkerOptions;
};

type AnalyticsWorkerEvent = {
  type: 'event';
  payload: Event;
};

type AnalyticsWorkerPageViewEvent = {
  type: 'page_view';
  payload: PageViewEvent;
};