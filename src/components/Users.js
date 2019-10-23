import React from 'react';
import User from './User'

export default function Users() {
  return(
    <div className="right">
      <User
        src="https://cdn.trinixy.ru/pics5/20180508/uncommon_01.jpg"
        alt="smbd"
        name="Arkadiy"
      />
      <div className="users__block">
        <User
          src="https://cdn.trinixy.ru/pics5/20180508/uncommon_01.jpg"
          alt="smbd"
          name="Arkadiy"
          min
        />
        <User
          src="https://cdn.trinixy.ru/pics5/20180508/uncommon_01.jpg"
          alt="smbd"
          name="Arkadiy"
          min
        />
        <User
          src="https://cdn.trinixy.ru/pics5/20180508/uncommon_01.jpg"
          alt="smbd"
          name="Arkadiy"
          min
        />
        <User
          src="https://cdn.trinixy.ru/pics5/20180508/uncommon_01.jpg"
          alt="smbd"
          name="Arkadiy"
          min
        />
      </div>
    </div>
  )
}
