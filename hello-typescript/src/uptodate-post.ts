interface TimeStamped {
  createdAt: Date;
  modifiedAt?: Date;
  [key: string]: unknown;
}

function getPostUpToDate(posts: TimeStamped[]): TimeStamped | null {
  if (posts.length === 0) return null;

  return posts.reduce((previous, current) => {
    const previousTime = previous.modifiedAt || previous.createdAt;
    const currentTime = current.modifiedAt || current.createdAt;

    return currentTime > previousTime ? current : previous;
  });
}

const posts: TimeStamped[] = [
  {
    name: " post1 ",
    createdAt: new Date("2024-01-01"),
    modifiedAt: new Date("2024-01-02"),
  },
  { name: "post2", createdAt: new Date("2024-01-03") },
  { name: "post3", createdAt: new Date("2024-01-05") },
  {
    name: "post4",
    createdAt: new Date("2024-01-02"),
    modifiedAt: new Date("2024-01-04"),
  },
];

console.log(getPostUpToDate(posts));
