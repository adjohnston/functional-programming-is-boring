export type Either<E, A> =
  | { type: "Left"; value: E }
  | { type: "Right"; value: A };

export type Horse = {
  type: "HORSE";
  name: string;
  legs: number;
  hasTail: boolean;
};

const horses: Horse[] = [
  {
    type: "HORSE",
    name: "CHAMPION",
    legs: 3,
    hasTail: false
  },
  {
    type: "HORSE",
    name: "HOOVES_GALORE",
    legs: 4,
    hasTail: true
  }
];

// these are the types of thing that can go wrong
type HorseError =
  | { type: "HAS_NO_TAIL" }
  | { type: "TOO_MANY_LEGS" }
  | { type: "NOT_ENOUGH_LEGS" }
  | { type: "HORSE_NOT_FOUND"; name: string };

// left :: E -> Either E never
export const left = <E>(e: E): Either<E, never> => ({
  type: "Left",
  value: e
});

// right :: A -> Either never A
export const right = <A>(a: A): Either<never, A> => ({
  type: "Right",
  value: a
});

const getHorse = (name: string): Either<HorseError, Horse> => {
  const found = horses.filter(horse => horse.name === name);
  return found[0] ? right(found[0]) : left({ type: "HORSE_NOT_FOUND", name });
};

// RENAME HORSE

const tidyHorseName = (horse: Horse): Horse => {
  return {
    ...horse,
    name:
      horse.name.charAt(0).toUpperCase() + horse.name.slice(1).toLowerCase()
  };
};

// STANDARDISE HORSES

type StandardHorse = {
  name: string;
  hasTail: true;
  legs: 4;
  type: "STANDARD_HORSE";
};

// standardise :: Horse -> Either HorseError StandardHorse
export const standardise = (horse: Horse): Either<HorseError, StandardHorse> =>
  undefined as any;

// map :: (A -> B) -> Either E A -> Either E B
export const map = <E, A, B>(
  fn: (a: A) => B,
  either: Either<E, A>
): Either<E, B> => undefined as any;

// bind :: (A -> Either E B) -> Either E A -> Either E B
export const bind = <E, A, B>(
  fn: (a: A) => Either<E, B>,
  either: Either<E, A>
): Either<E, B> => undefined as any;

// match :: (E -> B) -> (A -> B) -> Either E A -> B
export const matchEither = undefined as any;

const showError = (err: HorseError): string => {
  switch (err.type) {
    case "TOO_MANY_LEGS":
      return "There are just too many legs";
    case "NOT_ENOUGH_LEGS":
      return "There are simply not enough legs";
    case "HAS_NO_TAIL":
      return "You can see that it clearly has no tail";
    case "HORSE_NOT_FOUND":
      return `The horse ${err.name} cannot be found`;
  }
};

// this needs to getHorse, tidyHorseName and standardise it, then turn the
// result into a sensible string

// horseFinder :: String -> String
export const horseFinder = undefined as any;
