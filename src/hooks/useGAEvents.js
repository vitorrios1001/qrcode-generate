import ReactGA from 'react-ga';

export const useGAEvents = (category = 'Event category') => {
  const trackEvent = (action = 'action', label = 'label') => {
    ReactGA.event(category, action, label);
  };

  return trackEvent;
};
