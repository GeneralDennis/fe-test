import React from 'react'
import { connect } from "react-redux";
import { setReviewsFilter } from '../../redux/actions'

const ReviewsFilter = ({setReviewsFilter, byReviews}) => {
  return (
    <div className='block block--sm'>
      <input
        type="number"
        value={byReviews}
        placeholder='Например, от 10'
        onChange={e => setReviewsFilter(e.target.value)}/>
    </div>
  )
}

const mapStateToProps = ({byReviews}) => ({
  byReviews
})

const mapDispatchToProps = {
  setReviewsFilter,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsFilter);
