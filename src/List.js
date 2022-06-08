import React from 'react';

const List = ({ people }) => {

  return (
    <>
      {people.map((person)=> {
        const { id, name ,email} = person;
        return (
         
          <article key={id} className='person'>
            <img src={`https://ui-avatars.com/api/?name=${name}`} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{email} </p>
            </div>
          </article>
         
        );
      })}
    </>
  );
};

export default List;
