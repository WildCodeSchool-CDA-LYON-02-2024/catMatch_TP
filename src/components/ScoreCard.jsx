
import PropTypes from 'prop-types'

 function ScoreCard({score}) {
  return (
    <div className='container-score'>
    
      <p>{score.name}</p>
      <p>Score :{score.score} </p>
    </div>
  )
 }

ScoreCard.propTypes = {
  score: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score:PropTypes.number.isRequired,
   }).isRequired,
 }


export default ScoreCard;