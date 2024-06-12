const progress = [
  {
    id: 1,
    prompt: "Review and Confirm Order",
    completed: true,
  },
  {
    id: 2,
    prompt: "Confirm Courier Pickup",
    completed: true,
  },
  {
    id: 3,
    prompt: "In Transit: Monitor Delivery",
    completed: false,
  },
  {
    id: 4,
    prompt: "Confirm Delivery Completion",
    completed: false,
  },
];

export const TimelineItem = ({ item }) => {
  return (
    <li>
      <div className="timeline-start">1984</div>
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-end timeline-box">{item.prompt}</div>
      <hr />
    </li>
  );
};
export const Timeline = () => {
  return (
    <ul className="timeline timeline-vertical">
      {progress.map((item) => (
        <TimelineItem item={item} />
      ))}
    </ul>
  );
};
