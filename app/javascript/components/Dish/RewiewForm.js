import React from 'react'

const RewiewForm  = (props) => {
  return (
    <div className="wrapper">
      <form>
        <div>Have an experience with [Dish Name]? Share your review!</div>
        <div className="field">
          <input type="text" name="title" placeholder="Review Title" />
        </div>
        <div className="field">
          <input type="text" name="description" placeholder="Review Fescription" />
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">Rate This Dish</div>
            [Ster Rating Godes Here]
          </div>
        </div>
        <button type="submit">Submit Your Review</button>
      </form>
    </div>
  )
}

export default RewiewForm
