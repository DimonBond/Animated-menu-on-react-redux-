// import { createLogic } from 'redux-logic';
// import {
//   SHOW_QUESTS, SHOW_QUESTS_SUCCESS, SHOW_QUESTS_FAILURE
// } from './Achievements.constants';
//
// const getQuests = createLogic({
//   type: SHOW_QUESTS,
//   latest: true,
//
//   process(_, dispatch, done) {
//     fetch('http://localhost:3000/quests', {
//       method: 'GET',
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//       }
//     }).then(res => res.json())
//       .then((res) => {
//         dispatch({
//           type: SHOW_QUESTS_SUCCESS,
//           payload: res
//         });
//         done();
//       })
//       .catch((res) => {
//         dispatch({
//           type: SHOW_QUESTS_FAILURE,
//           payload: res
//         });
//         done();
//       });
//   }
// });
//
// export default [getQuest];
