import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
  const [active, setActive] = useState(null);

  const getButtonClass = (position) => cn('btn btn-secondary', position, {
    active: active === position,
  });

  return (
    <div className="btn-group" role="group">
      <button
        type="button"
        className={getButtonClass('left')}
        onClick={() => setActive('left')}
      >
        Left
      </button>
      <button
        type="button"
        className={getButtonClass('right')}
        onClick={() => setActive('right')}
      >
        Right
      </button>
    </div>
  );
  // END
};

export default BtnGroup;