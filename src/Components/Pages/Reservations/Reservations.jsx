import React from 'react'

const Reservations = () => {
  return (
    <form>
      <div>
        <select>
          <option>Vælg destination & hotel</option>
          <option value="hotel1">Hotel 1</option>
          <option value="hotel2">Hotel 2</option>
          <option value="hotel3">Hotel 3</option>
        </select>
      </div>
      <div>
      <select>
        <option>Vælg værelsestype</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
          {/* Add more options if needed */}
        </select>
      </div>
    </form>
  )
}

export default Reservations