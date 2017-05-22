import * as Direction from './Directions';

const getNextPosition = (currentDirection, newDirection, lastPostion) => {
  return Direction[newDirection](lastPostion);
};

export default getNextPosition;