import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView4190423Saga from '../features/CalendarView4190423/redux/sagas';
import CalendarView1190421Saga from '../features/CalendarView1190421/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView4190423Saga,
    
  ]);
}