import { defineStore } from 'pinia';

export const useTestStore = defineStore({ // Note that defineStore returns a callback method
  id: 'test', // test is the only flag for this state management. You can also use defineStore(id, {}); Form of
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      counter: 3,
      name: 'Eduardo',
      isAdmin: true,
      users: [
        {
          id: 1,
          name: 'Test',
        },
      ],
    };
  },
  getters: {
    getCounter: (state) => state.counter,
    doubleCount(state): number {
      return state.counter * 2;
    },
    // the return type **must** be explicitly set
    doublePlusOne(): number {
      // autocompletion and typings for the whole store ✨
      return this.doubleCount + 1;
    },
    getUserById: (state) => {
      return (userId: number) => state.users.find((user) => user.id === userId);
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random());
    },
    async testAwait(text: string): Promise<string> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(text);
          return;
        }, 1500);
      });
    },
  },
});
