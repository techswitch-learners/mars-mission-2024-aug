import React, { useState } from 'react';

function BirthdayForm() {
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    getBirthday(birthday); 
  };

  const getBirthday = (date: string) => {
    console.log("Birthday:", date);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Birthday</label>
      <input
        type="date"
        id="birthday"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BirthdayForm;
