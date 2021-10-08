import {
  Getters,
  Mutations,
  Actions,
  Module,
  createComposable,
  createMapper,
} from "vuex-smart-module";

interface Payload {
  input_a: number;
  input_b: number;
}

class SumState {
  sum = "0";
}
class SumGetters extends Getters<SumState> {
  get sum() {
    return this.state.sum;
  }
}

class SumMutations extends Mutations<SumState> {
  setSum(payload: Payload) {
    this.state.sum = (payload.input_a + payload.input_b).toString();
  }
}

// Actions
// Extend 'Actions' class with other module asset types
// Note that you need to specify self action type (SumActions) as a type parameter explicitly
class SumActions extends Actions<
  SumState,
  SumGetters,
  SumMutations,
  SumActions
> {
  calc(payload: Payload) {
    console.log(payload);
    this.commit("setSum", payload);
  }
}

export const sum = new Module({
  state: SumState,
  getters: SumGetters,
  mutations: SumMutations,
  actions: SumActions,
});

export const useSum = createComposable(sum);
export const useMapper = createMapper(sum);
