export interface reducers {
    test: object,
    user: object
  }
  export interface storeAction {
    type: string,
    payload: object
  }

  export interface ITODO {
    id: number;
    todo: string;
    completed: boolean;
  }