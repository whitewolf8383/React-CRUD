import React, { useState } from "react";

function UserUpdate(props) {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <div className='UserUpdate'>
      <h2 className='UserUpdate__h2'>{isAdmin ? 'Update User\'s Info' : 'Update My Info'}</h2>
      <form>
        <input id='register-name' className='UserUpdate__form__input' type='text' placeholder='Name' />
        <input id='register-phone' className='UserUpdate__form__input' type='text' placeholder='Phone' />
        <input id='register-city' className='UserUpdate__form__input' type='text' placeholder='City' />
        <select id='register-state' name='state' className='UserUpdate__form__input'>
          <option value="Alabama">Alabama</option>
          <option value="Alaska">Alaska</option>
          <option value="Arizona">Arizona</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Connecticut">Connecticut</option>
          <option value="Delaware">Delaware</option>
          <option value="Florida">Florida</option>
          <option value="Georgia">Georgia</option>
          <option value="Hawaii">Hawaii</option>
          <option value="Idaho">Idaho</option>
          <option value="Illinois">Illinois</option>
          <option value="Indiana">Indiana</option>
          <option value="Iowa">Iowa</option>
          <option value="Kansas">Kansas</option>
          <option value="Kentucky">Kentucky</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Maine">Maine</option>
          <option value="Maryland">Maryland</option>
          <option value="Massachusetts">Massachusetts</option>
          <option value="Michigan">Michigan</option>
          <option value="Minnesota">Minnesota</option>
          <option value="Mississippi">Mississippi</option>
          <option value="Missouri">Missouri</option>
          <option value="Montana">Montana</option>
          <option value="Nebraska">Nebraska</option>
          <option value="Nevada">Nevada</option>
          <option value="New Hampshire">New Hampshire</option>
          <option value="New Jersey">New Jersey</option>
          <option value="New Mexico">New Mexico</option>
          <option value="New York">New York</option>
          <option value="North Carolina">North Carolina</option>
          <option value="North Dakota">North Dakota</option>
          <option value="Ohio">Ohio</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Oregon">Oregon</option>
          <option value="Pennsylvania">Pennsylvania</option>
          <option value="Rhode Island">Rhode Island</option>
          <option value="South Carolina">South Carolina</option>
          <option value="South Dakota">South Dakota</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Texas">Texas</option>
          <option value="Utah">Utah</option>
          <option value="Vermont">Vermont</option>
          <option value="Virginia">Virginia</option>
          <option value="Washington">Washington</option>
          <option value="West Virginia">West Virginia</option>
          <option value="Wisconsin">Wisconsin</option>
          <option value="Wyoming">Wyoming</option>
        </select>
        <input id='register-email' className='UserUpdate__form__input' type='text' placeholder='Email' />
        <input id='register-password' className='UserUpdate__form__input' type='text' placeholder='Password' />
        <input id='register-confirmPasssword' className='UserUpdate__form__input' type='text' placeholder='Confirm Password' />
      </form>
      <button type='submit' className='UserUpdate__update-btn'>Update</button>
      <button type='submit' className='UserUpdate__cancel-btn'>Cancel</button>
    </div>
  );
}

export default UserUpdate;