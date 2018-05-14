// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
//
// class AchievementsList extends Component{
//   componentWillMount() {
//     this.props.showAchievements();
//   }
//   render() {
//     console.log(this.props.achievements);
//     return (
//       <div className={this.props.className}>
//       {this.props.achievements.map(quest => (
//         <AchievementItem
//           key={quest._id}
//           activeQuest={quest}
//         />
//       ))}
//       </div>
//     )
//   }
// }
//
// AchievementsList.propTypes = {
//   className: PropTypes.string.isRequired,
//   showAchievements: PropTypes.func.isRequired,
//   achievements: PropTypes.array
// };
//
// AchievementsList.defaultProps = {
//   achievements: []
// };
//
// export default AchievementsList;
