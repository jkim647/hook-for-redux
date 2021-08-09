import { createReduxModule } from "hooks-for-redux";

export const [useCount, { inc, add, reset }] = createReduxModule("count", 0, {
  inc: (state) => state + 1,
  add: (state, amount) => state + amount,
  reset: () => 0,
});
